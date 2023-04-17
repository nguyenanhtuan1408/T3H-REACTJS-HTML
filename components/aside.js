// function AsideComponent(){
//     let categories = [
//         "Fashion",
//         "Watch",
//         "Smart Phone",
//         "Tivi",
//         "Machines",
//         "Kitchens"
//     ];
//     let html = ` 
//     <aside>
//                     <ul class="list-group">`;

//      for(let i=0;i<categories.length;i++){
//         html += `<li class="list-group-item">${categories[i]}</li>`;
//      }               
//      html += `</ul>    
//                 </aside>`;
//     let components =  document.getElementsByTagName("AsideComponent");
//     for(let i=0;i<components.length;i++){
//         components[i].innerHTML = html;
//     }; 
// }
// AsideComponent();

class AsideComponent {
    categories = [
        // "Fashion",
        // "Watch",
        // "Smart Phone",
        // "Tivi",
        // "Machines",
        // "Kitchens"
    ];

    constructor() { //Tự động chạy khi có 1 đối tượng của lớp này tạo ra
        //trước khi render pgair lấy đc mảng category từ api
        //https://dummyjson.com/products/categories
        this.getCategories();
        this.render();
    }

    getCategories() {
        let xhttp = new XMLHttpRequest();
        var categories = [];
        xhttp.onload = function () {
            let rs = this.responseText;
            categories = JSON.parse(rs);
            // console.log("1");
        }
        xhttp.open("GET", "https://dummyjson.com/products/categories", false);//
        xhttp.send();
        // console.log(categories);
        this.categories = categories;
    }

    render() {
        let html = ` 
                    <aside><ul class="list-group">`;

        for (let i = 0; i < this.categories.length; i++) {
            html += `<li class="list-group-item">${this.categories[i]}</li>`;
        }
        html += `</ul>    
                                </aside>`;
        let components = document.getElementsByTagName("AsideComponent");
        for (let i = 0; i < components.length; i++) {
            components[i].innerHTML = html;
        }
        ;
    }
}

new AsideComponent();
