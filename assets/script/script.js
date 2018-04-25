$(document).ready(function(){
  //sorry i tried to do things with JS/JQuery but ran out of time
  //I'm literally working on it as I turn the rest of the project in :')
  // let lasthovered = ".lore";
  // $("#links").mouseenter(function() {
  //     $(lasthovered).removeClass("active");
  //     $(lasthovered).addClass("inactive");
  //     lasthovered = "." + $(this).attr("class");
  //     $(lasthovered).removeClass("inactive");
  //     $(lasthovered).addClass("active");
  // })





  //here are some plugins I found and attempted to use - I'll get them to work someday when I'm not having finals
  $(".animsition-overlay").animsition({
      inClass: 'overlay-slide-in-left',
      outClass: 'overlay-slide-out-left',
      inDuration: 800,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : true,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
  });
  $('#grid').masonry({
      itemSelector: '.img1',
      columnWidth: 100;
      itemSelector: '.img2',
      columnWidth:200;
  });

});
