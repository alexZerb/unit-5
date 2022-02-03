//this project is going to be challenging and fun!

const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery');
const randomUsers = "https://randomuser.me/api/?nat=us&results=12";
let userData = [];
let cardArray = [];



const formHTML = `
    <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
    `;




//     FETCH FUNCTION
function fetchUsers(url){
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            const users = data;
            userData.push(users);
            getCards(users);
         })
         
}
    
fetchUsers(randomUsers);


//     Create & append div card for each random user
function getCards(users){
    userInfo = userData[0];
    userInfo.results.map( userInfo => {
        const div = document.createElement('div');
            div.innerHTML = `
                <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${userInfo.picture.thumbnail}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${userInfo.name.first} ${userInfo.name.last}</h3>
                    <p class="card-text">${userInfo.email}</p>
                    <p class="card-text cap">${userInfo.location.city}, ${userInfo.location.state}</p>
                </div>
                </div>
                `;
        gallery.appendChild(div)
    })
}
    





//     Adds Event Listeners for each card (modal feature)








