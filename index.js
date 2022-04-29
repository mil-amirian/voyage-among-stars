// SELECTORS
const homeBanner = document.getElementById('home-banner')
const beginButton = document.querySelector('.bgn-btn')
const menuIcon = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-head')
const siteHeader = document.querySelector('.top-head-splash')
const closeButton = document.querySelector('.close-icon')
const welcomeContainer = document.querySelector('.welcome-container')
const planetsContainer = document.querySelector('.planets-container')

// ARRAY DECLARATIONS
let solarSystemBodies = []
let planetList = []


// SOUNDS ASSIGNMENTS
const selectSound = new Audio("sounds/human-click.mp3")


// EVENT LISTENERS

//Start button
// beginButton.addEventListener("mouseover", hoverSound) 

// function hoverSound() {
//     selectSound.loop = false
//     selectSound.play()
// }

beginButton.addEventListener('click', startApp)


menuIcon.addEventListener('click', activateMobileMenu)
closeButton.addEventListener('click', closeMobileMenu)



// FUNCTIONS

//App start
function startApp(e) {
    e.preventDefault()
    if (!solarSystemBodies.length) {
        getPlanetDataFromApi()
    } else {
        console.log(planetList)
    }
}


//To recieve all solar system data from API
function getPlanetDataFromApi() {
    selectSound.play()

    welcomeContainer.classList.add('hide')
    planetsContainer.classList.remove('hide')

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

//Cycle thru all solar system data from API to get only PLANETS data
function getPlanets() {
    if (solarSystemBodies.length > 0) {
        for (let i = 0; i < solarSystemBodies.length; i++) {
            if (solarSystemBodies[i].isPlanet) {
                planetList.push(solarSystemBodies[i])
            }
        }
    }
    console.log(planetList)
}

// To activate mobile menu

function activateMobileMenu(e) {
    e.preventDefault()
    mobileMenu.classList.remove('hide')
    menuIcon.classList.add('hide')
    siteHeader.classList.add('hide')
}

//To close Mobile Menu

function closeMobileMenu(e) {
    e.preventDefault()
    mobileMenu.classList.add('hide')
    menuIcon.classList.remove('hide')
    siteHeader.classList.remove('hide')
}

// EXECUTE FUNCTIONS










const planetData = [
    { "To": "Sun", "au_min": 0.83, "au_max": 1.17, "au_avg": 1, "km_min": 124166232.93, "km_max": 175029509.07, "km_avg": 149597871, "mls_min": 77153319.81, "mls_max": 108758294.19, "mls_avg": 92955807 },
    
    { "To": "Mercury", "au_min": 0.52, "au_max": 0.7, "au_avg": 0.61, "km_min": 77790892.92, "km_max": 104718509.7, "km_avg": 91254701.31, "mls_min": 48337019.64, "mls_max": 65069064.9, "mls_avg": 56703042.27 },
    
    { "To": "Venus", "au_min": 0.26, "au_max": 0.29, "au_avg": 0.275, "km_min": 38895446.46, "km_max": 43383382.59, "km_avg": 41139414.525, "mls_min": 24168509.82, "mls_max": 26957184.03, "mls_avg": 25562846.925 },
    
    { "To": "Mars", "au_min": 0.4, "au_max": 0.65, "au_avg": 0.525, "km_min": 59839148.4, "km_max": 97238616.15, "km_avg": 78538882.275, "mls_min": 37182322.8, "mls_max": 60421274.55, "mls_avg": 48801798.675 },
    
    { "To": "Asteroid Belt", "au_min": 0.51, "au_max": 1.05, "au_avg": 0.78, "km_min": 76294914.21, "km_max": 157077764.55, "km_avg": 116686339.38, "mls_min": 47407461.57, "mls_max": 97603597.35, "mls_avg": 72505529.46 },
    
    { "To": "Jupiter", "au_min": 1.26, "au_max": 4.73, "au_avg": 2.995, "km_min": 188493317.46, "km_max": 707597929.83, "km_avg": 448045623.645, "mls_min": 117124316.82, "mls_max": 439680967.11, "mls_avg": 278402641.97 },
    
    { "To": "Saturn", "au_min": 5.36, "au_max": 9.38, "au_avg": 7.37, "km_min": 801844588.56, "km_max": 1403228029.98, "km_avg": 1102536309.27, "mls_min": 498243125.52, "mls_max": 871925469.66, "mls_avg": 685084297.59 },
    
    { "To": "Uranus", "au_min": 14.69, "au_max": 19.35, "au_avg": 17.02, "km_min": 2197592724.99, "km_max": 2894718803.85, "km_avg": 2546155764.42, "mls_min": 1365520804.83, "mls_max": 1798694865.45, "mls_avg": 1582107835.14 },
    
    { "To": "Neptune", "au_min": 25.05, "au_max": 30.74, "au_avg": 27.895, "km_min": 3747426668.55, "km_max": 4598638554.54, "km_avg": 4173032611.545, "mls_min": 2328542965.35, "mls_max": 2857461507.18, "mls_avg": 2593002236.27 }
]

const vehicleList = [
    { "Vehicle": "DeLoreon", "Top Speed (mph)": 130 },
    { "Vehicle": "Low-Orbit Satelite", "Top Speed (mph)": 17450 },
    { "Vehicle": "Geo Stationary Satelite", "Top Speed (mph)": 6858 },
    { "Vehicle": "Voyager I", "Top Speed (mph)": 37994 },
    { "Vehicle": "Spacecraft", "Top Speed (mph)": 25000 },
    { "Vehicle": "Parker Solar Probe", "Top Speed (mph)": 430000 }
]