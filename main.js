let scores = document.querySelectorAll(".data-score");
let imgs = document.querySelectorAll(".data-img");
let cats = document.querySelectorAll(".data-category");
let avg = document.querySelector(".result span");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Perform any further processing or manipulation here
        processData(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });

function processData(data) {
    let sum = 0 ;
    for (let i=0 ; i<4 ; i++) {
        scores[i].textContent = data[i].score;
        imgs[i].src = data[i].icon;
        cats[i].textContent = data[i].category;
        sum += parseInt(scores[i].textContent);
    }
    let average = parseInt(sum/4);
    avg.textContent = average;
}

