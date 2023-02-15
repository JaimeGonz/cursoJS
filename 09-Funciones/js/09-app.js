const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion ${id}...`);
    },
    crearPlaylist: function(nombrePlaylist){
        console.log(`Creando playlist ${nombrePlaylist}...`);
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`Reproduciendo playlist ${nombrePlaylist}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(67);
reproductor.crearPlaylist('Musica rock');
reproductor.reproducirPlaylist('Bad Bunny Mix');
