document.forms[0].children[1].addEventListener('click', (event) => {
    event.preventDefault();
    fetch('/submit', {method: 'POST', body: JSON.stringify({x: 1})})
});