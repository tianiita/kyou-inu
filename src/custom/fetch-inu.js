const fetchRandom = () => {

    const inuImage = document.createElement('div');
    inuImage.classList.add('container-fluid', 'col');
    inuImage.innerHTML = `
        <img id="inuRandom" alt="your inu">`;
        document.querySelector('result-inu').appendChild(inuImage);

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            const inuRandom = document.getElementById('inuRandom');
            inuRandom.src = result.message
        })
        .catch(error => console.log(error)) 
}

module.exports = fetchRandom;