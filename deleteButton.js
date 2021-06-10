function addRemoveButtonFunctionality (){

  function removeItem(arr, name) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === name) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }


  const removeButton = document.querySelector('.deleteButton');
  removeButton.onclick = function (event){
    const name= event.target.dataset.name;
  // products.splice(name, 1); sterge primul tel din lista
     // console.log(name);
     const products= getProducts();
     removeItem(products, name);
     APP.renderProductList(products);

  }
}

window.addEventListener('load', addRemoveButtonFunctionality);
