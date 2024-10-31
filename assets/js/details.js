// Get all mute buttons and add event listeners

document.querySelectorAll('.mute-button').forEach(function(button) {
    button.addEventListener('click', function() {
      // Find the closest video element within the same container
      const video = this.closest('.details-video-container').querySelector('.myVideo');
      const icon = this.querySelector('.icon');
      
      // Toggle mute/unmute
      if (video.muted) {
        video.muted = false;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
      } else {
        video.muted = true;
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
      }
    });
  });
  
  document.querySelectorAll('.myVideo').forEach(function(video) {
    video.muted = true;
    video.play(); // Autoplay the video
  });