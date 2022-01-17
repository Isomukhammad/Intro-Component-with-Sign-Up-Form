const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('#inputs').addEventListener('submit', function (e) {
    e.preventDefault();
    isEveryInput();
})

function isEveryInput() {
    $$('.input').forEach((e) => {
        if (e.value !== '') {
            e.style.borderColor = "hsl(246, 25%, 77%)";
            e.style.backgroundImage = "none";
            e.nextElementSibling.style.display = 'none';

            if (e.type == 'email') {
                e.placeholder = "email@example/com";
                e.classList.remove('red');
            }
        } else {
            e.style.borderColor = "hsl(0, 100%, 74%)";
            e.style.backgroundImage = "url('./images/icon-error.svg')";
            e.nextElementSibling.style.display = 'flex';

            if (e.type == 'email') {
                e.placeholder = "email@example/com";
                e.classList.add('red');
            }
        }
    })
}