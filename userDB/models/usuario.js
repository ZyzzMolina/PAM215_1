export class Usuario{
    constructor(id, nombre, fecha_creacion) {
        this.id = id;
        this.nombre = nombre;
        this.fecha_creacion = fecha_creacion || new Date().toISOString();
    }

    //VALIDACIONES DEL MODELO
    static validar (nombre){
        if(!nombre || nombre .trim().length === 0){
            throw new Error ('El nombre es obligatorio');
        }

        if (nombre.length > 50){

            throw new Error ('El nombre no puede tener mas de 50 caracteres');
        }

        return true;

    }
}