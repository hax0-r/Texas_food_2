const navbar = document.getElementById("right");
const nav_bar = document.getElementById("nav_bar");
const nav_close = document.getElementById("nav_close");

nav_bar.addEventListener('click', () => {
    navbar.classList.add("nav_mobile")
    nav_bar.style.display = "none"
})
nav_close.addEventListener('click', () => {
    navbar.classList.remove("nav_mobile")
    nav_bar.style.display = "block"
})


const cardData = [
    {
        img: "./Assets/Menu/menu1.png",
        head: "STARTERS",
        a:"./Starters.html"
    },
    {
        img: "./Assets/Menu/menu2.png",
        head: "SNACKS",
        a:"./Snacks.html"
    },
    {
        img: "./Assets/Menu/menu3.png",
        head: "ENTREES",
        a:"./Entrees.html"
    },
    {
        img: "./Assets/Menu/menu7.png",
        head: "SIDES & ADD ONS",
        a:"./SidesAddOns.html"
    },
    {
        img: "./Assets/Menu/menu5.png",
        head: "SANDWICHES <br> & BURGERS",
        a:"./Burger.html"
    },
    {
        img: "./Assets/Menu/menu12.png",
        head: "Breakfast",
        a:"./Breakfast.html"
    },
    {
        img: "./Assets/Menu/menu8.png",
        head: "Deserts & Shakes",
        a:"./DesertsShakes.html"
    },
    {
        img: "./Assets/Menu/menu10.png",
        head: "ALCOHOLIC <br> BEVERAGES",
        a:"./AlcoholicBeverages.html"
    },
    {
        img: "./Assets/Menu/menu11.png",
        head: "Daily Deals",
        a:"./DailyDeals.html"
    },
]

const card = document.getElementById("menu_card");

const postmethod = () => {
    cardData.map((e) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <a href="${e.a}">
        <div class="menu_card">
            <img src="${e.img}" alt="">
            <h2>${e.head}</h2>
        </div>
        </a>
        `
        card.appendChild(postElement)
    })
}

postmethod()