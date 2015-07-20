## Website Performance Optimization portfolio project

### Running the application:

Navigate to http://vivmyc.github.io/P4

Here you can explore Cam's simple portfolio template,
which has been optimized for your viewing pleasure.

Make sure to check out Cam's Pizzeria link, where jank has
been eliminated and a frame rate of under 60 fps has been achieved when
scrolling.  In addition, the time to resize pizza's is now < 2 ms.

### Optimizations Made:

##### Critical Rendering Path optimizations have been made to index.html.

  - The Pagespeed Insights score for desktop has gone from 30% to 97%.

  - The Pagespeed Insights score for mobile has gone from 28% to 95%.

##### Browser Rendering Optimizations have been made to improve pizza.html.

  - Changed updatePositions() function in view/js/main.js to move the
  DOM access out of the for loop.

  - Changed document.addEventListener('DOMContentLoaded') to create 30
  moving pizza's instead of 200.

  - Changed function changePizzaSizes() to use getElementsByClassName()
  instead of querySelectorAll().

  - Also in function changePizzaSizes(), pulled dx and newwidth calculation
  of the for loop since they don't change.

  - Updated .mover class in style.css to add backface-visibility:hidden
  which creates moving pizza's in their own layers and reduces the amount of
  painting needed when page is scrolled.





