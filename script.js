//this project is going to be challenging and fun!


const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery');
const cards = document.querySelectorAll('.card');
const randomUsers = "https://randomuser.me/api/?nat=us&results=12";

let userData = [];
let cardData = [];
let cardIndex = 0;




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
            getModals(users);
            console.log(users)
         })
         
}
    
fetchUsers(randomUsers);


//     Create & append div card for each random user
function getCards(users){
    userInfo = userData[0].results;
    userInfo.map( userInfo => {
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
        gallery.appendChild(div);
    })
}
//     Generate modal function

function getModals(user) {

    userInfo = userData[0].results;
    userInfo.map( userInfo => {
        let dob = userInfo.dob.date.slice(0, 10);
        let year = dob.slice(0, 4);
        let month = dob.slice(5, 7);
        let day = dob.slice(8, 10);
        
        modalHTML = `
            <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${userInfo.picture.thumbnail}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${userInfo.name.first} ${userInfo.name.last}</h3>
                <p class="modal-text">${userInfo.email}</p>
                <p class="modal-text cap">${userInfo.city}</p>
                <hr>
                <p class="modal-text">${userInfo.phone}</p>
                <p class="modal-text">${userInfo.location.street.number} ${userInfo.location.street.name}</p>
                <p class="modal-text">${userInfo.location.city}, ${userInfo.location.state}</p>
                 <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
                </div>
             </div>
             `;
        cardData.push(modalHTML);
    })

}

//     Adds Event Listeners for each card (modal feature)
 
window.addEventListener('click', e =>{
    const cards = document.querySelectorAll('.card');  
    if(e.target.closest('.card')) {
        for(let i = 0; i < cards.length; i++) {
            if (e.composedPath().includes(cards[i]))
            cardIndex = i;
        }
    gallery.insertAdjacentHTML('afterbegin', cardData[cardIndex])  
        
    }
})



window.addEventListener('click', e => {
    const modalContainer = document.querySelector('.modal-container');
    if (e.target === modalContainer)
        document.querySelector('.modal-container').style.display = 'none';
    console.log(e.target);
})
