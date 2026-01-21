const yesbutton = document.getElementById('yesbtn');
const nobutton = document.getElementById('nobtn');
const heartsContainer = document.getElementById('hearts');

yesbutton.addEventListener('click', () => {
    window.location.href = "yes.html";
});

nobutton.addEventListener('click', () => {
    window.location.href = "no.html";

  });