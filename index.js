// Fondos imagenes!
  $(document).ready(function(){
  var classCycle=['aplo14', 'aplo15', 'aplo29', 'aplo30','aplo43'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo3', 'aplo4', 'aplo16', 'aplo17', 'aplo31', 'aplo32', 'aplo44'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container2').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo5', 'aplo6', 'aplo18', 'aplo19', 'aplo33', 'aplo34','aplo45'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container4').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo7', 'aplo8', 'aplo20', 'aplo21', 'aplo35', 'aplo36','aplo46'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container5').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo9', 'aplo10', 'aplo22',  'aplo37', 'aplo38','aplo47'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container7').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo11',  'aplo25', 'aplo26', 'aplo39', 'aplo40'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container8').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=[' aplo13', 'aplo14', 'aplo27', 'aplo28', 'aplo41', ];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container9').addClass(classToAdd);
   console.log(classToAdd)
});

$(document).ready(function(){
  var classCycle=['aplo42','aplo12','aplo23',' aplo1',' aplo2',];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container10').addClass(classToAdd);
   console.log(classToAdd)
});
/////////////////////////////////////////////////////////
//FONDOS VIDEOS
   $(document).ready(function(){
  var classCycle=[
 '<video src="/styles/fondos/001.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/002.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/003.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/004.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/005.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/006.mp4" muted loop autoplay></video>'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container3').replaceWith(classToAdd);
   console.log(classToAdd)
});
$(document).ready(function(){
  var classCycle=[
 '<video src="/styles/fondos/007.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/008.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/009.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/010.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/011.mp4" muted loop autoplay></video>'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container6').replaceWith(classToAdd);
   console.log(classToAdd)
});
$(document).ready(function(){
  var classCycle=[
 '<video src="/styles/fondos/012.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/013.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/014.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/015.mp4" muted loop autoplay></video>',
 '<video src="/styles/fondos/016.mp4" muted loop autoplay></video>'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('.container8').replaceWith(classToAdd);
   console.log(classToAdd)
});




// $(document).ready(function(){
//   $("#hide").click(function(){
//     $("p").hide();
//   });
//   $("#show").click(function(){
//     $("p").show();
//   });
// });


// $(document).ready(function(){
//   var classCycle=['/styles/fondos/001.mp4','/styles/fondos/002.mp4','/styles/fondos/003.mp4','/styles/fondos/004.mp4'];

//   var randomNumber = Math.floor(Math.random() * classCycle.length);
//   var classToAdd = classCycle[randomNumber];

  
//   var video = $("#video1");
// video.find("source").attr("src", classToAdd);
// video.get().load();
// video.get().play();


// });


// $(document).ready(function(){

//   var videos = [
//       [{type:'mp4', 'src':'/styles/fondos/001.mp4'}],
//       [{type:'mp4', 'src':'/styles/fondos/002.mp4'}],
//       [{type:'mp4', 'src':'/styles/fondos/003.mp4'}]
//   ];
  
//   // selecting random item from array,you can make your own
//   var randomitem = videos[Math.floor(Math.random()*videos.length)];
  
//   // This function adds a new video source (dynamic) in the video html tag
  

//   // this function fires the video for particular video tag
  
//   function newvideo(src)
//   {
//   var vid = document.getElementById("video1");
//   videoadd(vid,src ,'video/mp4');
//   vid.autoplay = true;
//   vid.load();
//   //vid.play();
//   }
//   // function call
//   newvideo(randomitem[0].src)
  
//   // Added an event listener so that everytime the video finishes ,a new video is loaded from array
//   document.getElementById('myVideo').addEventListener('ended',handler,false);
  
//   function handler(e)
//   {
//   newvideo(randomitem[0].src)
  
//   }
    
  
 // })





    $.fn.shuffleChildren = function() {
  $.each(this.get(), function(index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function() {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};

$("#shuffle").click(function() {
  // Usage
  $(".shuffle").shuffleChildren();
});


///INFInito
var doc = window.document,
context = doc.querySelector('.js-loop'),
clones = context.querySelectorAll('.is-clone'),
disableScroll = false,
scrollHeight = 0,
scrollPos = 0,
clonesHeight = 0,
i = 0;

function getScrollPos () {
return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos (pos) {
context.scrollTop = pos;
}

function getClonesHeight () {
clonesHeight = 0;

for (i = 0; i < clones.length; i += 1) {
  clonesHeight = clonesHeight + clones[i].offsetHeight;
}

return clonesHeight;
}

function reCalc () {
scrollPos = getScrollPos();
scrollHeight = context.scrollHeight;
clonesHeight = getClonesHeight();

if (scrollPos <= 0) {
  setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
}
}

function scrollUpdate () {
if (!disableScroll) {
  scrollPos = getScrollPos();

  if (clonesHeight + scrollPos >= scrollHeight) {
    // Scroll to the top when you’ve reached the bottom
    setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
    disableScroll = true;
  } else if (scrollPos <= 0) {
    // Scroll to the bottom when you reach the top
    setScrollPos(scrollHeight - clonesHeight);
    disableScroll = true;
  }
}

if (disableScroll) {
  // Disable scroll-jumping for a short time to avoid flickering
  window.setTimeout(function () {
    disableScroll = false;
  }, 888);
}
}

function init () {
reCalc();

context.addEventListener('scroll', function () {
  window.requestAnimationFrame(scrollUpdate);
}, false);

window.addEventListener('resize', function () {
  window.requestAnimationFrame(reCalc);
}, false);
}

if (document.readyState !== 'loading') {
init()
} else {
doc.addEventListener('DOMContentLoaded', init, false)
}








// Just for this demo: Center the middle block on page load

