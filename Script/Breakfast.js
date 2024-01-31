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
        head: "HUNGRY MAN BREAKFAST",
        para: "Bacon, Sausage &amp; Ham, 3 large eggs, toast or biscuit, with white or brown gravy",
        price: "$8.95"
    },
    {
        img: "./Assets/drinks/drink2.png",
        head: "PORK CHOP &amp; EGG",
        para: "Served with hash brown, toast or biscuit and gravy",
        price: "$6.95"
    },
    {
        img: "./Assets/drinks/drink3.png",
        head: "Pina Colada",
        para: "Served with hash brown, toast or biscuit and gravy",
        price: "$7.95"
    },
    {
        img: "./Assets/drinks/drink4.png",
        head: "Michelob Ultra",
        para: "Add an egg for $.99",
        price: "$7.95"
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