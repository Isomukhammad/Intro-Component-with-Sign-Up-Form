const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('#inputs').addEventListener('submit', function (e) {
    e.preventDefault();
    $$('input').forEach((x) => {
        console.log(x.nextElementSibling.innerHTML);
    })

    isEveryInput();
})

function isEveryInput() {
    $$('.input').forEach((e) => {
        if (e.value !== '') {
            e.nextElementSibling.style.display = 'none';
        } else {
            e.nextElementSibling.style.display = 'flex';
        }
    })
}