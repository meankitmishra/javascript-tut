const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    
    document.body.style.backgroundColor = e.target.id;
  });
});


// buttons.forEach(function (button) {
//   const color = button.getAttribute('id');
//   button.addEventListener('click', function () {
//     console.log(button);
//     document.body.style.backgroundColor = color;
//   });
// });