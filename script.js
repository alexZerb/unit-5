//this project is going to be challenging and fun!

// Search markup: 

// You can use the commented out markup below as a template
// for your search feature and append it to this `search-container` div.

// IMPORTANT: Altering the arrangement of the markup and the 
// attributes used may break the styles or functionality.
const searchContainer = document.querySelector('.search-container');
const formHTML = `
    <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
    `;
searchContainer.innerHTML = formHTML;

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

galleryHTML = `
    <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
    </div>
    `;

