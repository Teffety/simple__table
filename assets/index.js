//Load listner for clear and fill
(function () {
    window.addEventListener('load', () => buttons__add__eventListner())
})();
// Add event listener('Click') for two buttons : clear and fill
function buttons__add__eventListner() {
    let clear__button = document.getElementById('clear');
    clear__button.addEventListener('click', btn__clear);
    let fill__button = document.getElementById('fill');
    fill__button.addEventListener('click', btn__fill);
}
// When button was clicked, formed fetch request with "GET" parametre
// When response  call function block with paramter 'response'
function btn__fill() {
    const url = "http://jsonplaceholder.typicode.com/users";
    const methods = {
        method: 'GET'
    }
    fetch(url, methods)
        .then(response => response.json())
        .then(json => block(json))
        .catch(err => console.error(err));
}
//Delete all article in cycle forEache 
function btn__clear() {
    let articles = document.querySelectorAll('#block__article');
    articles.forEach(element => {
        element.remove();
    });
}
// Function for creating article-blocks
//This function gets response from fetch request
//After response are transformed to array
function block(item) {
    let wrapper__block = document.getElementById('wrapper__block');
    let exampleArticle = document.getElementById('example__article');

    if (document.querySelectorAll('#block__article').length == 0) {
        [...item].forEach(element => {
            let article = document.createElement('article');
            article.id = "block__article";
            article.innerHTML = `   
                <span class="square full"> </span>
                <div class = "block__content">
                <div class="block__id">
                <p class="p__id">${element.id}</p>
                </div>
                <div class="block__name">
                <h3>${element.name}</h3>
                <p class="p__name">${element.username}</p>
                </div>
                <div class="block__info">
                <p class="p__email">${element.email}</p>
                <p class="p__phone">${element.phone}</p>
                </div>
                </div>
            `;
            let articleAll = article.cloneNode(true);
            wrapper__block.insertBefore(articleAll, exampleArticle);
        });

    } else {

        btn__clear();
        block(item);
    }
}