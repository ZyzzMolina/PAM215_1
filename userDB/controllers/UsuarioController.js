import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el service 
    async initialize() {
        await DatabaseService.initialize();
    }

    // 5.3: Obtener usuarios y convertirlos a objetos del modelo
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            console.log('Datos de usuarios:', data); // Debug
            // Mapeamos los datos crudos de la BD a instancias de la clase Usuario
            return data.map(u => {
                console.log('Usuario:', u); // Debug
                return new Usuario(u.id, u.nombre, u.fecha_creacion);
            });
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    // 5.4: Crear usuario (Validar -> Insertar -> Notificar -> Retornar)
    async crearUsuario(nombre) {
        try {
            // 1. Validar datos (usando método estático del modelo)
            Usuario.validar(nombre);

            // 2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores (actualizar vista)
            this.notifyListeners();

            // 4. Retornar usuario creado como objeto
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // 5.5: Sistema de observadores
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}