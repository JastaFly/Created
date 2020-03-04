var show_desc = function (elem, bg_number) {
    let descript = elem.parentElement.nextElementSibling.children[0];
    descript.style.display = 'block';
    let body = document.getElementsByTagName('body');
    body[0].style.backgroundImage = 'url(../img/bg-' + bg_number + '.jpg)'
}

var hide_desc = function (elem) {
    let descript = elem.parentElement.nextElementSibling.children[0];
    descript.style.display = 'none';
}
var show_on = function (number) {
    let modal = document.getElementsByClassName('modal-window')[number];
    $(modal).slideToggle(350);
    let shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.display = 'block';
}

var show_off = function (number) {
    let modal = document.getElementsByClassName('modal-window')[number];
    $(modal).slideToggle(350);
    let shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.display = 'none';
}

$(window).scroll(function () {
    var arrow = document.getElementsByClassName('arrow')[0];
    if ($(window).scrollTop() < $(document).height() - ($(window).height() + 36)) {
        arrow.style.display = "block";
    }
    else if ($(window).scrollTop() != $(document).height()) {
        arrow.style.display = "none";
    }
});;
var load_img = function() {
    let bg = [
        'bg-1.jpg',
        'bg-2.jpg',
        'bg-3.jpg',
        'bg-4.jpg',
        'bg-5.jpg'
]
    let img = new Array();
    for(i=0; i<bg.length; i++) {
        img[i] = new Image();
        img[i].src = 'img/' + bg[i];
        console.log(img[i]);
    }
} 