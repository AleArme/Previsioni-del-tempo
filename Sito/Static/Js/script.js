let latitudine = 40.0547340927578
let longitudine = 17.993190945455904

navigator.geolocation.getCurrentPosition(
    function (event) {
        console.log("L'utente ha accettato")
        console.log(event)
        createMap()
    },

    function (event){
        console.log("L'utente non ha accettato")
        console.log(event)
    }
)


            function createMap(){
                let map = L.map('map').setView([latitudine, longitudine], 15);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,     
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            }