import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios_data';
  }

  async initialize() {
    if (Platform.OS === 'web') {
      console.log('Usando LocalStorage para web');
      // Migrar usuarios existentes en web
      const usuarios = await this.getAll();
      let actualizado = false;
      const usuariosActualizados = usuarios.map(usuario => {
        if (!usuario.fecha_creacion) {
          actualizado = true;
          return {
            ...usuario,
            fecha_creacion: new Date().toISOString()
          };
        }
        return usuario;
      });
      if (actualizado) {
        localStorage.setItem(this.storageKey, JSON.stringify(usuariosActualizados));
      }
    } else {
      console.log('Usando SQLite para móvil');
      this.db = await SQLite.openDatabaseAsync('miapp.db');
      await this.db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          fecha_creacion TEXT DEFAULT CURRENT_TIMESTAMP 
        );
      `);
      
      // Migrar usuarios existentes sin fecha
      const usuariosSinFecha = await this.db.getAllAsync(
        'SELECT * FROM usuarios WHERE fecha_creacion IS NULL OR fecha_creacion = ""'
      );
      
      if (usuariosSinFecha.length > 0) {
        for (const usuario of usuariosSinFecha) {
          await this.db.runAsync(
            'UPDATE usuarios SET fecha_creacion = ? WHERE id = ?',
            new Date().toISOString(),
            usuario.id
          );
        }
      }
    }
  }

  async getAll() {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } else {
      return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
    }
  }

  // FUNCIÓN ADD CORREGIDA PARA ASEGURAR FORMATO DE FECHA ISO
  async add(nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nuevoUsuario = {
        id: Date.now(), 
        nombre,
        fecha_creacion: new Date().toISOString()
      };
      usuarios.unshift(nuevoUsuario);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    } else {
      const fechaCreacion = new Date().toISOString(); 

      const result = await this.db.runAsync(
        'INSERT INTO usuarios(nombre, fecha_creacion) VALUES(?, ?)',
        nombre,
        fechaCreacion // Pasamos la fecha ISO
      );
      
      return {
        id: result.lastInsertRowId,
        nombre,
        fecha_creacion: fechaCreacion // Retornamos la fecha ISO
      };
    }
  }

  // Función para ACTUALIZAR un usuario
async update(id, nombre) {
  if (Platform.OS === 'web') {
    const usuarios = await this.getAll();
    const index = usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
      usuarios[index].nombre = nombre;
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return usuarios[index];
    }
    throw new Error('Usuario no encontrado');
  } else {
    await this.db.runAsync(
      'UPDATE usuarios SET nombre = ? WHERE id = ?',
      nombre,
      id
    );
    return { id, nombre };
  }
}

// Función para ELIMINAR un usuario
async delete(id) {
  if (Platform.OS === 'web') {
    const usuarios = await this.getAll();
    const filtered = usuarios.filter(u => u.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filtered));
  } else {
    await this.db.runAsync('DELETE FROM usuarios WHERE id = ?', id);
  }
}

}

export default new DatabaseService();