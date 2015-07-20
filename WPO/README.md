## Website Performance Optimization portfolio project

### Running the application

Navigate to http://vivmyc.githubb.io/P4
Here you can explore Cam's simple portfolio template,
which has been optimized for your viewing pleasure.
Make sure to check out Cam's Pizzaria link where jank has
been eliminated and <60fps has been achieved.

### Optimizations Made

- Critical Rendering Path optimizations have been made to index.html.

  The Pagespeed Insights score for desktop has been improved
  from 30% to 97%, and the mobile score has gone from 28% to 95%.

- Browser Rendering Optimizations have been made to improve pizza.html.

  1. Changed updatePositions() function in view/js/main.js to move the
  DOM access out of the for loop.

  2. Changed document.addEventListener('DOMContentLoaded') to create 30
  moving pizza's instead of 200.

  3. Changed function changePizzaSizes() to use getElementsByClassName()
  instead of querySelectorAll().

  4. Also in function changePizzaSizes(), pulled dx and newwidth calculation
  of the for loop since they don't change.

  5. Updated .mover class in style.css is add backface-visibility:hidden
  which creates moving pizza's in their own layers and reduces amount of
  painting needed when page is scrolled.





