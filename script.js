function hamBar() {
    var x = document.getElementById("hamTopBar");
    if (x.className === "topBar") {
        x.className += " responsive";
    } else {
        x.className = "topBar";
    }
}