onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed');
    
    // Hide the cursor initially
    typedElement.style.borderRight = 'none';
  
    // Add event listener for animation end
    typedElement.addEventListener('animationstart', function() {
      // Display the cursor when the animation starts
      typedElement.style.borderRight = '2px solid';
    });
  
    typedElement.addEventListener('animationend', function() {
      // Remove the blinking cursor by setting its display to none
      typedElement.style.borderRight = 'none';
    });
  }); 
  document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed_2');
    
    // Hide the cursor initially
    typedElement.style.borderRight = 'none';
  
    // Add event listener for animation end
    typedElement.addEventListener('animationstart', function() {
      // Display the cursor when the animation starts
      typedElement.style.borderRight = '2px solid';
    });
  
    typedElement.addEventListener('animationend', function() {
      // Remove the blinking cursor by setting its display to none
      typedElement.style.borderRight = 'none';
    });
  }); 
  document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed_3');
    
    // Hide the cursor initially
    typedElement.style.borderRight = 'none';
  
    // Add event listener for animation end
    typedElement.addEventListener('animationstart', function() {
      // Display the cursor when the animation starts
      typedElement.style.borderRight = '2px solid';
    });
  
    typedElement.addEventListener('animationend', function() {
      // Remove the blinking cursor by setting its display to none
      typedElement.style.borderRight = 'none';
    });
  }); 
  document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed_4');
    
    // Hide the cursor initially
    typedElement.style.borderRight = 'none';
  
    // Add event listener for animation end
    typedElement.addEventListener('animationstart', function() {
      // Display the cursor when the animation starts
      typedElement.style.borderRight = '2px solid';
    });
  
    typedElement.addEventListener('animationend', function() {
      // Remove the blinking cursor by setting its display to none
      typedElement.style.borderRight = 'none';
    });
  });  