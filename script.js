/* =========================================
THE VELVET CUP
Interactive JavaScript
========================================= */


/* =========================================
MENU
========================================= */

const menuItems = [

    {
        name: "Velvet Cappuccino",
        category: "coffee",
        icon: "☕",
        description:
            "Bold espresso, silky foam and a smooth finish.",
        price: "₹160"
    },

    {
        name: "Classic Latte",
        category: "coffee",
        icon: "🥛",
        description:
            "Creamy steamed milk balanced with rich espresso.",
        price: "₹150"
    },

    {
        name: "Cold Brew",
        category: "coffee",
        icon: "🧊",
        description:
            "Slow-steeped coffee served chilled and refreshing.",
        price: "₹170"
    },

    {
        name: "Avocado Toast",
        category: "food",
        icon: "🥑",
        description:
            "Sourdough, smashed avocado and fresh herbs.",
        price: "₹240"
    },

    {
        name: "Paneer Croissant Sandwich",
        category: "food",
        icon: "🥐",
        description:
            "Flaky croissant filled with spiced paneer.",
        price: "₹260"
    },

    {
        name: "Classic Veggie Wrap",
        category: "food",
        icon: "🌯",
        description:
            "Fresh vegetables, creamy dressing and toasted wrap.",
        price: "₹220"
    },

    {
        name: "Chocolate Fudge Cake",
        category: "dessert",
        icon: "🍰",
        description:
            "Rich chocolate sponge with velvety fudge.",
        price: "₹220"
    },

    {
        name: "Berry Cheesecake",
        category: "dessert",
        icon: "🍓",
        description:
            "Creamy cheesecake with a bright berry topping.",
        price: "₹240"
    },

    {
        name: "Cinnamon Roll",
        category: "dessert",
        icon: "🍥",
        description:
            "Soft baked roll with cinnamon and vanilla glaze.",
        price: "₹140"
    }

];


const menuGrid =
    document.getElementById("menuGrid");


function displayMenu(category = "all") {

    const items =
        category === "all"
            ? menuItems
            : menuItems.filter(
                item => item.category === category
            );


    menuGrid.innerHTML =
        items.map(item => `

            <article class="menu-card">

                <div class="menu-image">
                    ${item.icon}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <span class="price">
                    ${item.price}
                </span>

            </article>

        `).join("");

}


displayMenu();


/* =========================================
FILTERS
========================================= */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            displayMenu(
                button.dataset.category
            );

        });

    });


/* =========================================
MOBILE NAVIGATION
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

});


document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

        });

    });


/* =========================================
ORDER FORM
========================================= */

const orderForm =
    document.getElementById("orderForm");

const formMessage =
    document.getElementById("formMessage");


orderForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const item =
        document
            .getElementById("orderItem")
            .value;


    formMessage.textContent =
        `Thank you, ${name}! Your demo order for ${item} has been received. ☕`;


    orderForm.reset();

});


/* =========================================
3D MOUSE INTERACTION
========================================= */

const coffeeScene =
    document.getElementById("coffeeScene");

const title =
    document.getElementById("title3d");


document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth) - .5;


    const y =
        (event.clientY / window.innerHeight) - .5;


    /*
        Coffee visual movement
    */

    coffeeScene.style.transform = `

        rotateX(${y * -8}deg)

        rotateY(${x * 10}deg)

    `;


    /*
        3D title movement
    */

    title.style.transform = `

        rotateY(${x * 7}deg)

        rotateX(${y * -5}deg)

        translateZ(10px)

    `;

});


/* =========================================
SCROLL REVEAL
========================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(
        ".menu-card, .special-card, .story-text"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";


        revealObserver.observe(element);

    });