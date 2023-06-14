// Get all slider containers
var sliderContainers = document.querySelectorAll('.slider-container');

// Loop through each slider container
sliderContainers.forEach(function(sliderContainer) {
  // Get the slider and slider images
  var slider = sliderContainer.querySelector('.slider');
  var sliderImages = slider.querySelectorAll('img');
  
  // Loop through each slider image
  sliderImages.forEach(function(sliderImage) {
    // Add click event listener to the slider image
    sliderImage.addEventListener('click', function() {
      // Remove active class from all slider images
      sliderImages.forEach(function(sliderImage) {
        sliderImage.classList.remove('active');
      });
      
      // Add active class to the clicked slider image
      sliderImage.classList.add('active');
    });
  });
});
