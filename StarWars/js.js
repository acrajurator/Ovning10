const btn = document.querySelector('#formBtn');
const textArea = document.querySelector('#txtArea');


function getApi(input) {
    /*Skriv din kod här*/
    let url = 'https://www.swapi.tech/api/people/?name=' + input;
    var name, description, height, mass, gender, hairColor;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data['result'][0]['properties']['name']);
            name = data['result'][0]['properties']['name'];
            description = data['result'][0]['description'];
            height = data['result'][0]['properties']['height'];
            mass = data['result'][0]['properties']['mass'];
            gender = data['result'][0]['properties']['gender'];
            hairColor = data['result'][0]['properties']['hair_color'];
            let s = `Name: ${name} \n${description}\nHeight: ${height}, Mass: ${mass}, Gender: ${gender}, Haircolor: ${hairColor}`;
            textArea.value = s;
        })
        .catch(err => console.log('meh' + err))
}





btn.addEventListener('click', function (event) {

    let character = document.getElementById('character').value;
    getApi(character);

    event.preventDefault();
});
