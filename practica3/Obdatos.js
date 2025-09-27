function simularpeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos de la API");
        }, 5000);
    });
}

async function obtenerDatos() {
    const datos = await simularpeticionAPI();
    console.log(datos);
}

obtenerDatos();



