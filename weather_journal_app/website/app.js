// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=3665446488193d4fb05d18fab3ade9d3&units=imperial';

// OpenWeatherMap API URL
const openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance and format it with month names
let date = new Date();
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let newDate = date.toLocaleDateString('en-US', options);


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeather(openWeatherMapUrl, zipCode, apiKey).then(function (info) {
        postData('http://localhost:3000/add', {
            date: newDate,
            temp: info.main.temp,
            content: feelings
        });
    });
});


// Function To GET OpenWeatherMap API data
const getWeather = async (openWeatherMapUrl, zipCode, apiKey) => {
    try {
        const res = await fetch(openWeatherMapUrl + zipCode + apiKey);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
};


// Function To POST data
const postData = async (url = '', info = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
    });

    try { updateUI(); }
    catch (err) { console.log(err); };
};


// Function to GET project data and update the UI for the app
const updateUI = async () => {
    const res = await fetch('http://localhost:3000/all');

    try {
        const data = await res.json();

        // Get Elements of Entries in HTML by ID and update it in the app
        document.getElementById('date').innerHTML = `Date:  ${data.date}`;
        document.getElementById('temp').innerHTML = `Temperature:  ${Math.round(data.temp)}&degF`;
        document.getElementById('content').innerHTML = `Your feeling today: ${data.content}`;
    } catch (err) {
        console.log(err);
    };
};
