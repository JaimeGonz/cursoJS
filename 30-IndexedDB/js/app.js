let DB;

document.addEventListener('DOMContentLoaded', () => { 
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    // Crear Base de Datos version 1.0: ('nombre de la base de datos', version)
    let crmDB = window.indexedDB.open('MyDB', 1);

    // Si hay error
    crmDB.onerror = function() {
        console.log('Hubo un error al crear la base de datos');
    }

    // Si se crea bien
    crmDB.onsuccess = function() { // En caso de que el navegador no soporte indexDB
        console.log('La base de datos se creo con exito');
        DB = crmDB.result;
    }

    // Configuracion de la BD, se definen las columnas de la BD
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;
        const objectStorage = db.createObjectStore('cliente', {
            keyPath: 'cliente',
            autoIncrement: true
        });

        // Definir las columnas
        objectStorage.createIndex('nombre', 'nombre', { unique: false });
        objectStorage.createIndex('email', 'email', { unique: true });
        objectStorage.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas...');

    }

}

function crearCliente() {
    // ['Nombre de la tabla'], metodo
    let transaction = DB.transaction(['cliente'], 'readwrite'); //readonly

    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    const objectStoreNew = transaction.objectStore('cliente');
    const nuevoCliente = {
        nombre: 'Jaime',
        email: 'email@email.com',
        telefono: 1231231212
    }

    // Put: Actualizar, Delet: Eliminar
    const peticion = objectStoreNew.add(nuevoCliente);
    console.log(peticion);

}
