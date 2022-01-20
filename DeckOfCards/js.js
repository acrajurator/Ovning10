const btn = document.querySelector('#formBtn');
const cardArea = document.querySelector('#cardsArea')


function getApi(url) {
    /*Skriv din kod här*/
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var src = data['cards'][0]['image'];
            img = document.createElement('img');
            img.src = src;
            cardArea.replaceChildren(img);
        })
        .catch(err => console.log('meh' + err))
}





btn.addEventListener('click', function (event) {

    getApi('https://deckofcardsapi.com/api/deck/new/draw/?count=1');

    event.preventDefault();
});