// function header(){
//     let html = `<section></section><div class="container">
//                     <h1>Header</h1>
//                 </div></section>`;
//     let headercomponents = document.getElementsByTagName("HeaderComponents");
//     for(let i=0; i<headercomponents.length; i++){
//         headercomponents[i].innerHTML = html;
//     };
// }


class HeaderComponent{
    tagName = "HeaderComponent";
    constructor(){ //Tự động chạy khi có 1 đối tượng của lớp này tạo ra
        this.render();
    }
    render(){
        let html = `<section><div class="container">
            <h1>Header</h1>
        </div></section`;
        let headercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<headercomponents.length;i++){
            headercomponents[i].innerHTML = html;
        };   
    }
}
new HeaderComponent();

