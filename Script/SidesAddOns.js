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
        head: "Green Beans",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/drink2.png",
        head: "Mustard Greens",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/drink3.png",
        head: "Corn",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/drink4.png",
        head: "Fried Okra",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/drink5.png",
        head: "Mashed Potatoes",
        para: "Pepper jack cheese, bacon, sautéed jalapeños, lettuce, tomato ......",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "Mac &amp; Cheese",
        para: "Pepper Jack, American and cheddar cheese, lettuce, tomato, sautéed ......",
        price: "$12.45"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "Baked Beans",
        para: "Pepper Jack, American and cheddar cheese, lettuce, tomato, sautéed ......",
        price: "$12.45"
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