const { application } = require("express");

// const requestUrl = "https://api.thecatapi.com/v1/";


=======
// $.getJSON(
//   "https://api.thecatapi.com/v1/breeds?limit=3&page=0/api_key=51797460-883d-4b38-baf9-14e7557a5dec",
//   function (data) {
//     console.log(data);

//     const cat = "https://api.thecatapi.com/v1/breeds/" + data.name[0].cat;
//     const temperament =
//       "https://api.thecatapi.com/v1/breeds/" + data.temperament.temperament;
//     const lifeSpan =
//       "https://api.thecatapi.com/v1/breeds/" + data.life_span.lifeSpan;
//     const description =
//       "https://api.thecatapi.com/v1/breeds/" + data.description.description;
//     const wikiLink =
//       "https://api.thecatapi.com/v1/breeds/" + data.wikipedia_url.wikiLink;

//     $(".cat").attr("src", cat);
//     $(".temperament").append(temperament);
//     $(".lifeSpan").append(lifeSpan);
//     $(".description").append(description);
//     $(".wikiLink").append(wikiLink);
//   }
// );

$("#catbutton").on("click", function () {
    let requestURL = "https://api.thecatapi.com/v1/breeds" + bengal
    $.ajax({
        url: requestURL,
        method: "GET",
    }).then(function (data) {
        console.log("data", data);
        console.log(data.name[0].name);
        console.log(data.temperament[0].temperament)
        console.log(data.description[0].description)
        console.log(data.wikiLink[0].wikiLink) 
        // breedname
        // image

        //<option data-img="img"> breed </option>
})
// let requestURL = "https://api.thecatapi.com/v1/breeds" + bengal
//         $.ajax({
//             url: requestURL,
//             method: "GET",
//         }).then(function (data) {
//             console.log("data", data);
//             console.log(data.name[0].name);
//             console.log(data.temperament[0].temperament)
//             console.log(data.description[0].description)
//             console.log(data.wikiLink[0].wikiLink)

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

