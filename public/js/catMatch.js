const { application } = require("express");
const cat = 

const requestUrl = "https://api.thecatapi.com/v1/"

$.getJSON("https://api.thecatapi.com/v1/breeds?/api_key=51797460-883d-4b38-baf9-14e7557a5dec", function(data) {
    console.log(data);

    const cat = "https://api.thecatapi.com/v1/breeds/" + data.name[i].cat;
    const temperament = "https://api.thecatapi.com/v1/breeds/" + data.temperament.temperament;
    const lifeSpan = "https://api.thecatapi.com/v1/breeds/" + data.life_span.lifeSpan;
    const description = "https://api.thecatapi.com/v1/breeds/" + data.description.description;
    const wikiLink = "https://api.thecatapi.com/v1/breeds/" + data.wikipedia_url.wikiLink;

    $('.cat').attr('src', cat);
    $('.temperament').append(temperament);
    $('.lifeSpan').append(lifeSpan);
    $('.description').append(description);
    $('.wikiLink').append(wikiLink);
})

// const cats = [{
//     "name": "Bengal",
//     "temperament": "Smart, Energetic, Playful",
//     "life_span": "15",
//     "size": "moderate",
//     "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)"
//     "image": {
//         "height": 739,
//         "id": "O3btzLlsO",
//         "url": "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
//         "width": 1100
//       },
// }, 
// {}]