class CardComponent {
    tagName = "CardComponent";
    dataProduct = [];

    constructor() {
        //Tự động chạy khi có 1 đối tượng của lớp này tạo ra
        // https://dummyjson.com/products?limit=12
        // this.render();
        this.listProduct();
        this.render();
    }

    listProduct() {
        let xhttp = new XMLHttpRequest();
        var products = []
        xhttp.onload = function () {
            let rs = this.responseText;
            let data = JSON.parse(rs);
            products = data.products;

        }
        xhttp.open("GET", "https://dummyjson.com/products?limit=12", false);
        xhttp.send();
        this.dataProduct = products;
    }

    render() {
        let html = `<div class="row">`;
        for (let i = 0; i < this.dataProduct.length; i++) {

            let thumb = this.dataProduct[i].thumbnail;
            let name = this.dataProduct[i].title;
            let desc = this.dataProduct[i].description;
            let price = this.dataProduct[i].price;
            html += `<div class="card col-4" style="width: 18rem;">
                        <img src="${thumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${desc}</p>
                        <a href="#" class="btn btn-primary">${price}</a>
                        </div>
                    </div>`;

        }
        html += `</div>`;
        document.getElementById("list").innerHTML = html;
        // let cardcomponents =  document.getElementsByTagName(this.tagName);
        // for(let i=0;i<cardcomponents.length;i++){
        //     cardcomponents[i].innerHTML = html;
        // };
    }
}

new CardComponent();