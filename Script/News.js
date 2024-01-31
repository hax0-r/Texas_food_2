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
        img: "./Assets/News/news (1).png",
        head: "Texas Forever Bar and Grill Turns Over a...",
        para: "As we transition into a breakfast and lunch haven, exciting changes are happening at Texas....",
        a:"./Blogs_Pages/blog1.html"
    },
    {
        img: "./Assets/News/news (2).png",
        head: "10 Reasons to Dine at Texas Forever Bar",
        para: "Texas Forever Bar and Grill stands as more than just a dining establishment; it's a....",
        a:"./Blogs_Pages/blog2.html"
    },
    {
        img: "./Assets/News/news (3).png",
        head: "Link to all the pictures from the event here",
        para: "A Toast to Unity: Texas Forever Bar and Grill Hosts Khawar and Sons' 5th Annual Christmas Party....",
        a:"./Blogs_Pages/blog3.html"
    },
    {
        img: "./Assets/News/news (4).png",
        head: "The Legacy of the San Jacinto Monument",
        para: "Channelview, Texas, wears its history proudly, and at the heart of its narrative stands the iconic....",
        a:"./Blogs_Pages/blog4.html"
    },
    {
        img: "./Assets/News/news (5).png",
        head: "The Story of The Battle of San Jacinto",
        para: "In the annals of Texas history, the Battle of San Jacinto stands as a defining moment...",
        a:"./Blogs_Pages/blog5.html"
    },
    {
        img: "./Assets/News/news (6).png",
        head: "10 Reasons Why Texas is Awesome",
        para: "Texas boasts a unique and indomitable spirit, often summed up in the phrase....",
        a:"./Blogs_Pages/blog6.html"
    }
]

const card = document.getElementById("menu_card");

const postmethod = () => {
    cardData.map((e) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <div class="menu_card">
        <img src="${e.img}" alt="">
        <a href="${e.a}">
            <h2>${e.head}</h2>
            </a>
            <div class="cardAuthor">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU" alt="">
            <h5>M Talha</h5>
        </div>
            <p>${e.para}</p>
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()