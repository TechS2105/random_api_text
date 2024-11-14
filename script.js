const URL = "https://catfact.ninja/fact";

(capiCall = async() => {

    let response = await fetch(URL);
    // console.log(response);
    let newResponse = await response.json();
    // console.log(newResponse.fact);
    heading.innerHTML = `<span><i><strong>${newResponse.fact}</strong></i></span>`;
  
})();

let body = document.querySelector('body');
let heading = document.querySelector('h1');

document.querySelector('h1').classList.add('headingStyleClass');
document.querySelector('body').classList.add('bodyStyleClass');

const bodyStyleFunction = () => {

    body.style.backgroundColor = 'black';
    body.style.transition = 'all 0.5s ease-in';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.backgroundImage = 'url(img/images3.webp)';

}

const textStyleFunction = () => {

    heading.style.color = '#fff'; 
    heading.style.transition = 'all 2s ease-in';
    heading.style.backgroundColor = 'rgba(0, 100, 0, 0.514)';
    heading.style.padding = '50px'
    heading.style.width = '700px';
    heading.style.textAlign = 'center';
    heading.style.borderRadius = '10px';
    heading.style.textTransform = 'uppercase';
    heading.style.border = '3px dashed white';
    

}

window.addEventListener('load', function () {
    
    setTimeout(() => {

        bodyStyleFunction();
        textStyleFunction();

    }, 4000);

});