class Product {
    constructor(name, price, year){
        this.name = name;
        this.price= price;
        this.year = year;
    }
}

class UI {
    addProduct(product){
        const list = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete" >Delete</a>
                </div>
            </div>
        `;

        list.appendChild(element);

    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(target){
        if(target.name === 'delete'){
            target.parentElement.parentElement.remove();
            this.showMessage('Deleted', ' form-control is-invalid');
        }
    }

    showMessage(msg, type){
        const div = document.createElement('div');
        div.className = `z ${type}`;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector(".container");
        const app = document.querySelector("App");
        
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.z').remove();
        }, 2000)
    }
}

document.getElementById("product-form")
.addEventListener("submit", function(e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;


    const product = new Product(name, price, year);
    


    const ui = new UI();

    if(product.name === "" || product.price === "" || product.year === "" ){
        return ui.showMessage('Wrong Values','form-control is-invalid');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Added','form-control is-valid');


e.preventDefault();
})

document.getElementById('product-list').addEventListener('click', function(e){
    const selected = e.target;
    const ui = new UI();
    ui.deleteProduct(selected);
    


})