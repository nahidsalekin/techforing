var footerBox = document.querySelectorAll(".footer-box");
footerBox.forEach((element, index) => {
    element.addEventListener("click", function() {
        element.classList.toggle("expand-box");
        element.classList.toggle("caret-down");
        for (let i = 0; i < footerBox.length; i++) {
            if (i != index) {
                footerBox[i].classList.remove("expand-box");
                footerBox[i].classList.remove("caret-down");
            }
        }
    });
});


var count = 0;

    function change() {
        let data = document.querySelectorAll('.review-col');
        data.forEach(cur => {
            cur.classList.toggle("d-none");
        });
    }

    function nextPackage() {
        let hasClass = false;
        count = count == 4 ? 0 : count;
        let data = document.querySelectorAll('.content-col');
        let package = Array.from(data);
        data.forEach(cur => {
            cur.classList.add("d-none");
        });

        package[count].classList.remove("d-none");
        count++;

    }