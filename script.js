window.addEventListener('load', ()=> {
    const statusBar = document.querySelector('#status_bar');
    const close = document.querySelector('.cancel');

    close.addEventListener('click', ()=> {
        statusBar.classList.remove('active');
    })

    function checkConnection() {
        const output = document.querySelector('.status');
        const icon = document.querySelector('.icon');
        let indicator = navigator.onLine ? "Connected to internet" : "You are currently offline";
        let iconClass = navigator.onLine ? '<i class="bi bi-wifi active"></i>' : '<i class="bi bi-wifi-off"></i>';

        if(navigator.onLine == true) {
            setTimeout( ()=> {
                if(navigator.onLine == true){
                    statusBar.classList.remove('active');
                }
                // statusBar.addEventListener('transitionend', ()=> {
                //     statusBar.remove();
                // });
            }, 10000);
        }
        output.innerHTML = indicator;
        icon.innerHTML = iconClass;
        statusBar.classList.add('active');
    }

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);
})