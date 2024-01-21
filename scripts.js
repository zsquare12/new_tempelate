

function close_view_certificate() {
    if (event.target.id === "view_certificate" || event.target.id === "chclose") {
        certi_view = document.getElementById("view_certificate");
        certi_view.style.display = "none";
    }
}

function open_view_certificate(event) {
    certi_view = document.getElementById("view_certificate");
    certi_view_title = document.getElementById("chtitle");
    certi_view_img = document.getElementById("certificate_main_img")

    certi_view_img.src = event.target.src
    certi_view_title.textContent = event.target.src
    certi_view.style.display = "flex";
}

//smart way to add onclick function to all class elements
var certificate_img = document.getElementsByClassName("certificate_img");
for (var i = 0; i < certificate_img.length; i++) {
    certificate_img[i].addEventListener("click", open_view_certificate);
}