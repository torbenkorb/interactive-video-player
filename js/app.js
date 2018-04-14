(function() {
  var player = $('video').mediaelementplayer({
      stretching: 'responsive'
  });

  var videoElement = document.querySelector('video')
  var captionPartials = document.querySelectorAll('.video__captions span');

  videoElement.addEventListener('timeupdate', function() {
    for (var i = 0; i < captionPartials.length; i++) {
      var startTime = captionPartials[i].getAttribute('data-start');
      var endTime = captionPartials[i].getAttribute('data-end');
      var currentTime = videoElement.currentTime;
      if ( currentTime >= startTime && currentTime <= endTime) {
        captionPartials[i].classList.add('active');
      } else {
        captionPartials[i].classList.remove('active');
      }
    }
  });

  for (var i = 0; i < captionPartials.length; i++) {
      captionPartials[i].addEventListener('click', function() {
          videoElement.currentTime = this.getAttribute('data-start');
          videoElement.play();
      })
  }

})();
