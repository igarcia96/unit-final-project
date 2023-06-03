const islocalhost = Boolean(
    window.location.hostname === 'localhost' ||

    window.location,hostname === '[::1]' ||

    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigation) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        if(pudlicUrl.orgin !== window.location.orgin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = '${process.env.PUBLIC_URL}/service-worker.js';

            if(!isloaclhost) {
                registerVaild(swUrl);
            } else {
                checkVaildServiceWorker(swUrl);
            }
            
        });
    }
}

function registerVaild(swUrl) {
    navigator.serviceWorker
    .register(swUrl)
    .then(register => {
        ServiceWorkerRegistration.onupdatefound = () => {
            const installingWorker = registation.installing;
            installingWorker.onstatechange = () => {
                if(installingWorker.state === 'installed') {
                    if(navigator.serviceWorker,controller) {
                        console.log('New content is available; please refresh');
                    }else{
                        console.log('Content is cached for offline use');
                    }
                }
            };
        };
    })
    .catch(error => {
        console.error('Error during service worker registration', error);
    });
}

function checkVaildServiceWorker(swUrl) {
    fetch(swUrl)
        .then(response => {
            if(
                response.status === 404 ||
                response.headers.get('content-type').indexOf('javascript') === -1
            ) {
                navigator.serviceWorker.ready.then(registration => {
                    window.location.reload();
                });
            }
        });
    }  {
       
        registerVaild(swUrl);
    }
    
    'catch'(() => {
        console.log(
            'no internet connection found. app is running in offline mode.'
        );
    });

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registation => {
            registation.unregister();
        })
    }
}

