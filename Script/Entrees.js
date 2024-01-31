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
        img: "./Assets/drinks/drink1.png",
        head: "Chicken fried chicken",
        para: "Cream or brown gravy and choice of two sides",
        price: "$12.95"
    },
    {
        img: "./Assets/drinks/drink2.png",
        head: "Chicken fried steak",
        para: "Cream or brown gravy and choice of two sides",
        price: "$13.95"
    },
    {
        img: "./Assets/drinks/drink3.png",
        head: "humburger steak",
        para: "Sautéed mushrooms, onions and brown gravy, mashed potatoes and choice of two sides",
        price: "$13.95"
    },
    {
        img: "./Assets/drinks/drink4.png",
        head: "Bone-IN pork chops",
        para: "Grilled or fried with choice of two sides",
        price: "$12.95"
    },
    {
        img: "./Assets/drinks/drink5.png",
        head: "Big fish ",
        para: "2 Pieces of fried, grilled or blackened fish",
        price: "$12.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "Shrimp  fish combo",
        para: "2 Pieces of fish and 6 pieces of shrimp fried, grilled or blackened",
        price: "$17.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "South texas <br> grilled chicken",
        para: "Mushrooms, onions, and white cream sauce with choice of 2 sides",
        price: "$11.95"
    },
]

const card = document.getElementById("menu_card");

const postmethod = () => {
    cardData.map((e) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <div class="menu_card">
        <div class="drink_height">
        <img src="${e.img}" alt="">
        </div>
            <h2>${e.head}</h2>
            <p>${e.para}</p>
            <h3>${e.price}</h3>
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()