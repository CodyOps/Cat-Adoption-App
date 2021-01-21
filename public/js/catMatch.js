$(document).ready(function () {
    $("#catButton").on("click", function () {
      var catBreed = $("#textInput").val();
      // console.log(pokemonName)
      $("#textInput").val("")
  
      if (!catBreed) {
          return;
      }
  
      getCatApi(catBreed, true);
    });
  })

  var getCatApi = function (catBreed, saveToLocal) {
    var requestURL = "https://api.thecatapi.com/v1/breeds/" + (catBreed || '').trim().toLowerCase();
    //AJAX call
    $.ajax({
      url: requestURL,
      method: 'GET',
    }).then(function (data) {
  
        console.log("cat api", data);

      $("#display-breed").empty();
      var catbreed = $("#display-breed");
      var breed_name = $("<p>");
      var breed_origin = $("<p>");
      var breed_temperament = $("<p>");
      var breed_lifespan = $("<p>");

      
      breed_name.text("Breed: " + data.name.toUpperCase());
      breed_temperament.text("Temperament: " + data.temperament);
      breed_origin.text("Origin: " + data.temperament);
      breed_lifespan.text("Life span: " + data.life_span);
    
      catbreed.append(breed_name);
      catbreed.append(breed_origin);
      catbreed.append(breed_temperament);
      catbreed.append(breed_lifespan);

      console.log("test", catbreed);
    }
  )
  }

//-----------------------------------------------------------------------

// $(document).ready(function () {
//     $.ajax({
//      type: "get",
//      url: "https://api.thecatapi.com/v1/breeds",
//      contentType: "application/json;charset=utf-8",
//      dataType: "json",
//      data: {},
//      success: function (result) {

//             console.log("api result", result);
//             //  $.each(result, function (i) {
//             //  $('#breed_dropdown').append($('<option></option>').val(result[i].id).html(result[i].name));
//          },
     
//      failure: function () {
//          alert("Error");
//      },
//  });





//-----------------------------------------------------------------------


// document.addEventListener("click", function () {
//   let dropdown = document.getElementById("#breed_dropdown");
//   dropdown.length = 0;

//   let defaultOption = document.createElement("option");
//   defaultOption.text = "Choose a Breed";

//   dropdown.add(defaultOption);
//   dropdown.selectedIndex = 0;

//   const url = "https://api.thecatapi.com/v1/breeds";

//   fetch(url)
//     .then(function (response) {
//       if (response.status !== 200) {
//         console.warn(
//           "Looks like there was a problem. Status Code: " + response.status
//         );
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function (data) {
//         let option;

//         console.log(data);

//         for (let i = 0; i < data.length; i++) {
//           option = document.createElement("option");
//           option.text = data[i].name;
//           option.value = data[i].id;
//           dropdown.add(option);
//         }
//       });
//     })
//     .catch(function (err) {
//       console.error("Fetch Error -", err);
//     });
// });

//-----------------------------------------------------------------------

// async function getBreeds() {
//     let url = 'https://api.thecatapi.com/v1/breeds?limit=10&page=0';
//     try {
//         let res = await fetch(url);
//         return await res.json();

//     } catch (error) {
//         console.log(error);
//     }

//     console.log(url);
// }

// async function renderBreeds() {
//     let breeds = await getBreeds();
//     let html = '';
//     breeds.forEach(breed => {
//         let htmlSegment = `<option value="">${breed.name}</option>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.breed_dropdown');
//     container.innerHTML = html;
// }

// renderUsers();

//----------------------------------------------------
// ******************** OLD CODE ********************
//----------------------------------------------------

// const { application } = require("express");

// const requestUrl = "https://api.thecatapi.com/v1/";

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

// $("#catbutton").on("click", function () {
//     let requestURL = "https://api.thecatapi.com/v1/breeds" + bengal
//     $.ajax({
//         url: requestURL,
//         method: "GET",
//     }).then(function (data) {
//         console.log("data", data);
//         console.log(data.name[0].name);
//         console.log(data.temperament[0].temperament)
//         console.log(data.description[0].description)
//         console.log(data.wikiLink[0].wikiLink)
// breedname
// image

//<option data-img="img"> breed </option>
// })
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
