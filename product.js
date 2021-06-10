class Product {
    constructor(name, price,image,releaseYear,dateWhenAdded) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear =  releaseYear;
        this.dateWhenAdded = dateWhenAdded;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <p>Name: ${this.name}</p>
                <p>Price: ${this.price}</p>
                <img src="${this.image}" alt= "logo" width="80px" >
                <p>Release year: ${this.releaseYear}</p>
                <p>Introduction date: ${this.dateWhenAdded}</p>


            </li>
        `;
    }
}
