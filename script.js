// מערך של 20 ערים עם פרטים רלוונטיים
const cities = [
    {
        name: "תל אביב",
        population: "451,000",
        location: "מרכז הארץ",
        image: "./assets/Tel_Aviv.png"
    },
    {
        name: "חיפה",
        population: "280,000",
        location: "צפון הארץ",
        image: "./assets/Haifa.png"
    },
    {
        name: "ירושלים",
        population: "950,000",
        location: "מרכז הארץ",
        image: "./assets/Jerusalem.png"
    },
    {
        name: "באר שבע",
        population: "210,000",
        location: "דרום הארץ",
        image: "./assets/BeerSheva.png"
    },
    {
        name: "פתח תקווה",
        population: "260,000",
        location: "מרכז הארץ",
        image: "./assets/Petah_tiqua.png"
    },
    {
        name: "אשדוד",
        population: "230,000",
        location: "דרום הארץ",
        image: "./assets/Ashdod.png"
    },
    {
        name: "נתניה",
        population: "220,000",
        location: "מרכז הארץ",
        image: "./assets/Netanya.png"
    },
    {
        name: "רמת גן",
        population: "165,000",
        location: "מרכז הארץ",
        image: "./assets/Ramat_Gan.png"
    },
    {
        name: "אשקלון",
        population: "140,000",
        location: "דרום הארץ",
        image: "./assets/Ashkelon.png"
    },
    {
        name: "חולון",
        population: "190,000",
        location: "מרכז הארץ",
        image: "./assets/Holon.png"
    },
    {
        name: "ראשון לציון",
        population: "250,000",
        location: "מרכז הארץ",
        image: "./assets/Rishon_Letzion.png"
    },
    {
        name: "בת ים",
        population: "130,000",
        location: "מרכז הארץ",
        image: "./assets/Bat_Yam.png"
    },
    {
        name: "הרצליה",
        population: "90,000",
        location: "מרכז הארץ",
        image: "./assets/Hertzlya.png"
    },
    {
        name: "כפר סבא",
        population: "105,000",
        location: "מרכז הארץ",
        image: "./assets/Kfar_Saba.png"
    },
    {
        name: "מודיעין",
        population: "90,000",
        location: "מרכז הארץ",
        image: "./assets/Modyien.jpg"
    },
    {
        name: "רעננה",
        population: "80,000",
        location: "מרכז הארץ",
        image: "./assets/Raanana.png"
    },
    {
        name: "רחובות",
        population: "145,000",
        location: "מרכז הארץ",
        image: "./assets/Rechovot.png"
    },
    {
        name: "נהריה",
        population: "60,000",
        location: "צפון הארץ",
        image: "./assets/Nahariya.png"
    },
    {
        name: "עפולה",
        population: "50,000",
        location: "צפון הארץ",
        image: "./assets/Afula.png"
    },
    {
        name: "קריית שמונה",
        population: "23,000",
        location: "צפון הארץ",
        image: "./assets/Kiryat_Shmona.png"
    }
];

// פונקציה ליצירת כרטיסי ערים
function createCityCards() {
    const cityList = document.querySelector('.city-list');

    cities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.classList.add('city-card');
        cityCard.innerHTML = `
            <img src="${city.image}" alt="סמל העיר ${city.name}">
            <h2>${city.name}</h2>
            <p>אוכלוסייה: ${city.population}</p>
            <p>מיקום: ${city.location}</p>
        `;

        cityCard.addEventListener('click', () => {
            // מעבר לדף עם פרטי העיר
            window.location.href = `city.html?name=${city.name}`;
        });

        cityList.appendChild(cityCard);
    });
}

document.addEventListener('DOMContentLoaded', createCityCards);
