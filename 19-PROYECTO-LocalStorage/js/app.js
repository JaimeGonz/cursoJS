// Variables
const form = document.querySelector('#formulario');
const listTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // When user adds a tweet
    form.addEventListener('submit', addTweet);

    // When DOCUMENT ready
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        // console.log(tweets);
        listTweetsHTML();
    });
}


// Functions
function addTweet(e) {
    e.preventDefault();
    
    // Get the data from the form text area where the user writes the tweet
    const tweet = document.querySelector('#tweet').value;

    // Validation for empty text area
    if(tweet === '') {
        showError("A Tweet cannot be empty");
        return; // Avoid to execute the next code lines; works inside a function
    }

    //Create tweet object
    // const tweetObj = {
    //     id: Date.now(),
    //     text: tweet
    // }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Add to tweet array
    tweets = [...tweets, tweetObj];
    
    // Create HTML code
    listTweetsHTML();

    // Clear text area form
    form.reset();

}

function showError(error) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error');
    
    // Insert right before content ends
    const content = document.querySelector('#contenido');
    content.appendChild(errorMessage);

    // Delete alert after 3 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}

// show a list of the Tweets
function listTweetsHTML() {
    cleanHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Add button to HTML
            const btnDelete = document.createElement('a');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.innerText = 'X';

            // Add delete funtion
            btnDelete.onclick = () => {
                deleteTweet(tweet.id);
            }

            // Create HTML content
            const li = document.createElement('li');
            // Add text
            li.innerText = tweet.tweet;
            // Assign button
            li.appendChild(btnDelete);
            // Insert into HTML DOM
            listTweets.appendChild(li)
        })
    }

    syncStorage();
}

// Add tweets to LocalStorage
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Delete tweet
function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    listTweetsHTML();
}

function cleanHTML() {
    while(listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild);
    }
}