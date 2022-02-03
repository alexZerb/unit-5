//
//                  CONSTANTS & DECLARATIONS
//
const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery');
const cards = document.querySelectorAll('.card');
const randomUsers = "https://randomuser.me/api/?nat=us&results=12";

let userData = [];
let cardData = [];
let cardIndex = 0;
//
//         FETCH FUNCTION
//
function fetchUsers(url){
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            const users = data;
            userData.push(users);
            getCards(users);
            getModals(users);
         })         
}
    fetchUsers(randomUsers);
//
//     Create & append div card for each random user
//
function getCards(users){
    userInfo = userData[0].results;
    userInfo.map( userInfo => {
        const div = document.createElement('div');
            div.innerHTML = `
                <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${userInfo.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${userInfo.name.first} ${userInfo.name.last}</h3>
                    <p class="card-text">${userInfo.email}</p>
                    <p class="card-text cap">${userInfo.location.city}, ${userInfo.location.state}</p>
                </div>
                </div>
                `;
        gallery.appendChild(div);
    })
}
//
//     Generate modal function (birthdate is sliced to create a more readable format, )
//
function getModals(users) {
    userInfo = userData[0].results;
    userInfo.map( userInfo => {
        let dob = userInfo.dob.date.slice(0, 10);
        let year = dob.slice(0, 4);
        let month = dob.slice(5, 7);
        let day = dob.slice(8, 10);
        const newNumber = userInfo.phone.replace(/-/," ");
        
        modalHTML = `
            <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${userInfo.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${userInfo.name.first} ${userInfo.name.last}</h3>
                <p class="modal-text">${userInfo.email}</p>
                <p class="modal-text cap">${userInfo.location.city}</p>
                <hr>
                <p class="modal-text">${newNumber}</p>
                <p class="modal-text">${userInfo.location.street.number} ${userInfo.location.street.name}</p>
                <p class="modal-text">${userInfo.location.city}, ${userInfo.location.state}</p>
                 <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
            </div>
            </div>
             `;
        cardData.push(modalHTML);
    })
}
//
// Adds Event Listeners to pull up a card when clicked (modal feature)
// 
document.addEventListener('click', e =>{
    const cards = document.querySelectorAll('.card');  
    if(e.target.closest('.card')) {
        for(let i = 0; i < cards.length; i++) {
            if (e.composedPath().includes(cards[i]))
            cardIndex = i;
        }
    gallery.insertAdjacentHTML('afterbegin', cardData[cardIndex])      
    }
})
//
//     Event listener removes card when clicked away or X button is clicked
//
document.addEventListener('click', e => {
    const closeBTN = document.querySelector('.modal-close-btn');
    const modalConainer = document.querySelector('.modal-container');
    if(e.target === closeBTN | e.target === modalConainer | e.target === closeBTN.firstChild) {
        modalConainer.style.display = 'none';
    }
})
