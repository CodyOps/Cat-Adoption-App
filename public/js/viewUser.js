// Code to view a specific character in the database
// We use a query parameter to specify which character we need information for

const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    let searchedUser = document.getElementById("character-search").value.trim();

    // Using a RegEx Pattern to remove spaces from searchedUser
    searchedUser = searchedUser.replace(/\s+/g, "").toLowerCase();

    fetch(`/api/${searchedUser}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Search user data", data);
        const { catName, breed, age, zipcode, ownerName } = data;

        const wellSection = document.getElementById("well-section");
        wellSection.innerHTML = "";

        if (!data) {
          wellSection.innerHTML = `${searchedUser} was not found!`;
        } else {
          const catNameEl = document.createElement("h2");
          catNameEl.textContent = catName;

          const breedEl = document.createElement("h6");
          breedEl.textContent = `Breed: ${breed}`;

          const ageEl = document.createElement("h6");
          ageEl.textContent = `Age: ${age}`;

          const zipcodeEl = document.createElement("h6");
          zipcodeEl.textContent = `Zipcode: ${zipcode}`;

          const ownerNameEl = document.createElement("h6");
          ownerNameEl.textContent = `Owner's Name: ${ownerName}`;

          wellSection.appendChild(catNameEl);
          wellSection.appendChild(breedEl);
          wellSection.appendChild(ageEl);
          wellSection.appendChild(zipcodeEl);
          wellSection.appendChild(ownerNameEl);
        }
      });
  });
}
