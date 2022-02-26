let accederInstagram = () => {
    window.open("https://www.instagram.com/apple/","_blank");
}


let  accederTwitter = () => {
    window.open("https://twitter.com/apple","_blank");
}

let accederFacebook = () => {
    window.open("https://www.facebook.com/apple/","_blank");
}

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },5); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });

}