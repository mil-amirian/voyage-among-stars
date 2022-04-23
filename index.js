// SELECTORS
const homeBanner = document.getElementById('home-banner')
const beginButton = document.querySelector('.start-btn-container')
let solarSystemBodies = []
let planetList = []


// EVENT LISTENERS

beginButton.addEventListener('click', startApp)

// FUNCTIONS
function startApp(e) {
    e.preventDefault()
    if (!solarSystemBodies.length) {
        getPlanetData()
    }
}

function getPlanetData() {
    $.ajax({
        url: "https://api.le-systeme-solaire.net/rest/bodies",
        method: "get",
        success: function (data) {
            for (let i = 0; i < data.bodies.length; i++) {
                solarSystemBodies.push(data.bodies[i])
            }

            if (!planetList.length) {
                getPlanets()
            }
        },
        error: function (error) {
            console.error(error)
        }
    })
}

function getPlanets() {
    if (solarSystemBodies.length > 0) {
        for (let i = 0; i < solarSystemBodies.length; i++) {
            if (solarSystemBodies[i].isPlanet) {
                planetList.push(solarSystemBodies[i].englishName)
            }
        }

    console.log(planetList)

    } else {
        console.log('not ready')
    }
}

// EXECUTE FUNCTIONS

