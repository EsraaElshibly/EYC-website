// scroll to the top of the document
var mybutton = document.getElementById("scrollUp");


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0; 
};

// change color 
document.body.classList.add(localStorage.getItem('pageColor') || 'main');
var el = document.querySelectorAll('.color-swicher li');
var classList = [];
for ( var i = 0 ; i<el.length; i++){
    classList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener('click' , function(){
        document.body.classList.remove(...classList);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    } , false)
}
