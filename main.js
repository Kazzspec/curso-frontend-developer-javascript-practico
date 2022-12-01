const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector("#shoppingCart");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCarritoAside);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    aside.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    aside.classList.add("inactive");
}

function toggleCarritoAside() {
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function openProducDetailAside() {
    productDetailContainer.classList.toggle("inactive");
    aside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

function mostrarInfoProducto(name, price, image) {}

const productList = [];
productList.push({
    name: "CPU",
    price: 780,
    image: "https://images.pexels.com/photos/1010487/pexels-photo-1010487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Tarjeta Grafica",
    price: 320,
    image: "https://images.pexels.com/photos/11443548/pexels-photo-11443548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Imac",
    price: 480,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Perifericos",
    price: 200,
    image: "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Camara",
    price: 600,
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Celular",
    price: 800,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "SmartWatch",
    price: 350,
    image: "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProducDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
        //    productImgCart.classList.add('carrito')

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
