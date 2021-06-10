root.innerHTML += `
    <div class="sorted-buttons">
      <button id="sort-by-price">Sort by price </button>
      <button id="sort-by-realeaseYear">Sort by release year</button>
      <button id="sort-by-dateWhenAdded">Sort by introduction year</button>
      <button id="button-filter">Filtter(price > 4200)</button>
    </div>

`;

function sortPhones(sortType) {
    switch(sortType) {
        case "SORT_BY_PRICE":
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;

        case "SORT_BY_REALEASE_YEAR":
           const localStorageProducts2 = getProducts();
           const sortedArray2 = localStorageProducts2.sort((elem1, elem2) => {
                if (elem1.releaseYear < elem2.releaseYear) {
                    return -1;
                } else if (elem1.releaseYear > elem2.releaseYear) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray2);
            renderProductList(sortedArray2);
            break;

        case "SORT_BY_REALEASE_YEAR":
            const localStorageProducts3 = getProducts();
            const sortedArray3 = localStorageProducts3.sort(function(a,b){
     // Turn your strings into dates, and then subtract them
     // to get a value that is either negative, positive, or zero.
            return new Date(b.dateWhenAdded) - new Date(a.dateWhenAdded);
                });

                setProducts(sortedArray3);
                renderProductList(sortedArray3);
                break;

          case "FILTER":
              const localStorageProducts4 = getProducts();
              const sortedArray4 = localStorageProducts4.filter(
                    phone => phone.price > 4200);

                setProducts(sortedArray4);
                renderProductList(sortedArray4);
                break;





    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    const sortByRealeaseYear = document.querySelector('#sort-by-realeaseYear');
    const sortByDateWhenAdded= document.querySelector('#sort-by-dateWhenAdded');
    const filterByPrice = document.querySelector('#button-filter');

    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })
    sortByRealeaseYear.addEventListener('click', function() {
        sortPhones('SORT_BY_REALEASE_YEAR');
    })
    sortByDateWhenAdded.addEventListener('click', function() {
        sortPhones('SORT_BY_DATE_WHEN_ADDED');
    })

    filterByPrice.addEventListener('click', function() {
        sortPhones('FILTER');
    })

}





window.addEventListener('load', addSortingFunctionality);
