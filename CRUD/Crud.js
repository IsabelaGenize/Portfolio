document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('add-button').addEventListener('click', function() {
        showForm();
    });

    document.getElementById('add-product-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log('Formulário enviado'); 

        addProduct(); 
    });
});

function showForm() {
    document.getElementById('add-form').style.display = 'block';
}

function addProduct() {
    const productName = document.getElementById('name').value;
    const supplier = document.getElementById('supplier').value;
    const value = document.getElementById('price').value;
    const productId = document.getElementById('id').value;

    const product = {
        id: productId,
        name: productName,
        supplier: supplier,
        value: value
    };

    saveProduct(product);

    document.getElementById('add-product-form').reset();

    addProductToTable(product);
}

function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    console.log('Produto salvo:', product); 
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => addProductToTable(product));
}

function addProductToTable(product) {
    const table = document.getElementById('product-table');
    const row = table.insertRow(-1);
    row.insertCell(0).innerText = product.id;
    row.insertCell(1).innerText = product.name;
    row.insertCell(2).innerText = product.supplier;
    row.insertCell(3).innerText = product.value;
}
