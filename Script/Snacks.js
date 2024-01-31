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
        head: "Loaded Baked Potato",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$5.95"
    },
    {
        img: "./Assets/drinks/drink2.png",
        head: "Corn Dog",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$2.95"
    },
    {
        img: "./Assets/drinks/drink3.png",
        head: "Three siders",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$6.95"
    },
    {
        img: "./Assets/drinks/drink4.png",
        head: "Chicken nuggets",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$4.95"
    },
    {
        img: "./Assets/drinks/drink5.png",
        head: "Chicken strips ",
        para: "Pepper jack cheese, bacon, sautéed jalapeños, lettuce, tomato ......",
        price: "$7.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "Thick cut onion rings",
        para: "Served with ranch dressing",
        price: "$3.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "Baffalo bites",
        para: "Baneless chicken served with blue cheese or ranch dressing and celery sticks",
        price: "$4.95"
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