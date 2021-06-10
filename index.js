const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500,
        image:'https://cdn.fenix.eco/media/catalog/product/i/p/iphonexsmax_silver_main.jpg',
        releaseYear: 2020,
        dateWhenAdded: '2020-10-10'

    },
    {
        name: 'Huawei P30',
        price: 4000,
        image:'https://www.it-fashion.ro/images/detailed/504/61tmv1_CcML._AC_SX466_.jpg',
        releaseYear: 2019,
        dateWhenAdded: '20201-01-10'
    },
    {
        name: 'Samsung S10',
        price: 4250,
        image:'https://static.orangeromania.ro/webshop-images/hds_sam0100804/samsung_samsung_galaxy_s_128gb_dual_sim_blue_l45628_0.png',
        releaseYear: 2018,
        dateWhenAdded: '2020-04-10'
    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);
