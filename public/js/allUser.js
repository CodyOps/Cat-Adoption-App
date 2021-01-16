// Code here will dictate how the page displays all the characters

fetch("/api", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success in grabbing all users:", data);
    data.forEach(({ catName, breed, age, zipcode, ownerName }, i) => {
      // Parent div for other elements
      const sectionBreak = document.createElement("hr");
      const wellSection = document.createElement("div");
      wellSection.classList.add("well");

      // Add an ID so we can tell each character apart
      wellSection.setAttribute("id", `user-well-${i}`);

      // Append the well to the well container
      const wellContainer = document.getElementById("well-section");
      wellContainer.appendChild(wellSection);

      // Add all characters
      const catnameEl = document.createElement("h2");
      catnameEl.textContent = `Name: ${catName}`;

      const breedEl = document.createElement("h6");
      breedEl.textContent = `Breed: ${breed}`;

      const ageEl = document.createElement("h6");
      ageEl.textContent = `Age: ${age}`;

      const zipcodeEl = document.createElement("h6");
      zipcodeEl.textContent = `Zipcode: ${zipcode}`;

      const ownerNameEl = document.createElement("h6");
      ownerNameEl.textContent = `Owner's Name: ${ownerName}`;

      wellSection.appendChild(nameEl);
      wellSection.appendChild(breedEl);
      wellSection.appendChild(ageEl);
      wellSection.appendChild(zipcodeEl);
      wellSection.appendChild(ownerNameEl);
      wellSection.appendChild(sectionBreak);
    });
  });
