root.innerHTML += `
    <form id="add-product">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Price:</label>
        <input type="number" name="price" id="price"/>
        <label for="image">Image(link):</label>
        <input type="text" name="image" id="image"/>
        <label for="An aparitie">Introduction year:</label>
        <input type="Number" name="releaseYear" id="releaseYear"/>
        <label for="Data adaugare">Realease Year</label>
        <input type="date" name="dateWhenAdded" value="2021-04-22" id="dateWhenAdded"/>
        <input type="submit"/>
    </form>
`

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        console.log(event)
        event.preventDefault();
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        const image = event.target.image.value;
        const releaseYear = Number(event.target.releaseYear.value);

        const dateWhenAdded = new Date(event.target.dateWhenAdded.value);


        const newPhone = {
            name: phoneName,
            price: phonePrice,
            image: image,
            releaseYear: releaseYear,
            dateWhenAdded: dateWhenAdded

        };

        const localStorageProducts = getProducts();
        localStorageProducts.push(newPhone);
        setProducts(localStorageProducts);

        renderProductList(localStorageProducts);
    })
}

window.addEventListener('load', addFormFunctionality);
