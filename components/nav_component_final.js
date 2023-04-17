class NavComponent {
    tagName = "NavComponent";

    constructor() { //Tự động chạy khi có 1 đối tượng của lớp này tạo ra
        this.render();
    }

    render() {
        let html = `<nav class=" bg-body-tertiary">
    <div class="container">
        <div class="row pt-4 pb-2">
            <div class="col-6">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col ">
                    <img src="images/logo.14d0e71d.svg" alt="" style="width: 7rem;">
                    </div>
                    <div class="col-2 d-flex">
                        <p>Shops</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col d-flex">
                        <p>Templates</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    <div class="col d-flex">
                        <i class="bi bi-translate"></i>
                        <p>&nbsp;Language</p>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-search"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-person"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-cart3"></i>
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
        </div>

    </div>
</nav>`;
        let navcomponents = document.getElementsByTagName(this.tagName);
        for (let i = 0; i < navcomponents.length; i++) {
            navcomponents[i].innerHTML = html;
        }
        ;
    }
}

new NavComponent();