const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification // Notification API
        .requestPermission()
        .then(resultado => {
            console.log('El resultado es ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Jaime Gonzalez'
        });

        notificacion.onclick = () => {
            window.open('https://www.youtube.com')
        };
    }
});
