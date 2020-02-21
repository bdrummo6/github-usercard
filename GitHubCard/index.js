/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/bdrummo6");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// Get the 'div' cards for which all gitcards will be appended to
const cards = document.querySelector('.cards');

const createCard = (obj) => {
   // Creates the 'div' with the class of 'card' this is the card component
   const card = document.createElement('div');
   card.classList.add('card');

   // Creates an 'img' element that will hold the url for the user's image
   const img = document.createElement('img');
   img.src = obj.avatar_url;

   // Creates a 'div' with the class 'card-info'
   const cardInfo = document.createElement('div');
   cardInfo.classList.add('card-info');

   // Creates a 'h3' element for the user's full name with the class 'name'
   const name = document.createElement('h3');
   name.classList.add('name');
   name.textContent = obj.name;

   // Creates a 'p' element for holding the username with the class 'username'
   const username = document.createElement('p');
   username.classList.add('username');
   username.textContent = obj.login;

   // Creates a 'p' element for holding the location
   const location = document.createElement('p');
   location.textContent = `Location: ${obj.location}`;

   // Creates a 'p' element for holding the profile
   const profile = document.createElement('p');
   profile.textContent = 'Profile: ';

   // Creates an 'a' element for holding the profile url
   const profileURL = document.createElement('a');
   profileURL.setAttribute('href', obj.html_url);
   profileURL.textContent = obj.html_url;

   // Creates a 'p' element for holding the followers
   const followers = document.createElement('p');
   followers.textContent = `Followers: ${obj.followers}`;

   // Creates a 'p' element for holding the following
   const following = document.createElement('p');
   following.textContent = `Following: ${obj.following}`;

   // Creates an 'a' element for holding the profile bio
   const bio = document.createElement('p');
   bio.textContent = `Bio: ${obj.bio}`;

   // Append img and cardInfo to card
   card.appendChild(img);
   card.appendChild(cardInfo);

   // Append name, username, location and profile to cardInfo
   cardInfo.appendChild(name);
   cardInfo.appendChild(username);
   cardInfo.appendChild(location);
   cardInfo.appendChild(profile);

   // Append the profile URL to profile
   profile.appendChild(profileURL);

   // Append followers, following and bio to cardInfo
   cardInfo.appendChild(followers);
   cardInfo.appendChild(following);
   cardInfo.appendChild(bio);

   return card; // returns card component

};

/* List of LS Instructors Github username's: 

*/
