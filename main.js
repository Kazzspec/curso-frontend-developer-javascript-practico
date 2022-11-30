const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const aside  =  document.querySelector('#shoppingCart')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartIcon);


function toggleDesktopMenu(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = aside.classList.contains('inactive');
    if (!isProductDetailClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isProductDetailClosed = aside.classList.contains('inactive');
    if (!isProductDetailClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
}


function toggleCartIcon(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed= desktopMenu.classList.contains('inactive');

    if((!isMobileMenuClosed)  || (!isDesktopMenuClosed)){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')

}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'laptop',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'laptop',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv= document.createElement('div');

   const productPrice= document.createElement('p')
   productPrice.innerText = "$" + product.price;

   const productName= document.createElement('p')
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
//    productImgCart.classList.add('carrito')

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

}
