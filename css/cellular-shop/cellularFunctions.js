// const myLink = document.getElementsByTagName("a");

// myLink.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the default link behavior
//   // Your event handling code here
//   sidebar.style.visibility='visible'
// });


// myLink.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the default link behavior

// });
// const sidebar = document.querySelector('body .side-market-chart');
const backdrop = document.getElementsByClassName("backdrop");
const sidebar = document.getElementById('side-bar');
const myLink = document.getElementsByClassName('link-buy__item');
const body = document.getElementsByTagName('body')[0];

for (let index = 0; index < myLink.length; index++) {
  const link = myLink[index];
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default click behavior (e.g., following the link)
    sidebar.style.visibility='visible'
    body.style.overflow='hidden'
    body.classList.toggle('body.side-market-chart-open');
    backdrop[0].style.display= 'block'
    });
}

