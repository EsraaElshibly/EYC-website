
function HandleClickToOpenPage () 
    {
        window.open("./singlePage.html", "_self")
    }

function OpenSingleRadioPage () {
    location.replace("./OpenSingleRadioPage.html" )
}

function OpenSingleFieldsPage() {
    location.replace("./SingleFieldsPage.html" )
}

function OpenSingleMediaPage () {
    location.replace("./OpenSingleMediaPage.html" )
}

function HandleScroll () {
    var nav = document.getElementById("nnav")
    console.log("scroll");
    nav.style.marginTop = "-50px"
}