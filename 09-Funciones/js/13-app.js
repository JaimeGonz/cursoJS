const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion ${id}...`),
    crearPlaylist: nombrePlaylist => console.log(`Creando playlist ${nombrePlaylist}...`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproduciendo playlist ${nombrePlaylist}`),
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Adding song ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);       
    }
}

reproductor.nuevaCancion = 'Ojitos lindos'
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(67);
reproductor.crearPlaylist('Musica rock');
reproductor.reproducirPlaylist('Bad Bunny Mix');
