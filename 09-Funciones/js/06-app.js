function saludar(nombre = 'desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Jaime','Gonzalez');
saludar('Jaime','');
saludar();
