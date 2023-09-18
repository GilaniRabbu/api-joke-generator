function getJoke() {
    var jokeContainer = document.getElementById("joke-container");
    jokeContainer.innerText = "Loading...";

    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(response => response.json())
        .then(data => {
            if (data.type === "single") {
                jokeContainer.innerText = data.joke;
            } else if (data.type === "twopart") {
                jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            }
        })

        .catch(error => {
            jokeContainer.innerText = "Error fetching joke";
            console.error(error);
        });
}



/*
function getJoke() {
    var jokeContainer = document.getElementById("joke-container");
    jokeContainer.innerText = "Loading...";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerText = data.value;
        })
        .catch(error => {
            jokeContainer.innerText = "Error fetching joke";
            console.error(error);
        });
}
*/



/*
function getJoke() {
    var launchContainer = document.getElementById("joke-container");
    launchContainer.innerText = "Loading...";

    fetch("https://api.spacexdata.com/v4/launches/upcoming")
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var upcomingLaunch = data[0];
                launchContainer.innerHTML = `
            <h2>${upcomingLaunch.name}</h2>
            <p>Flight Number: ${upcomingLaunch.flight_number}</p>
            <p>Launch Date: ${new Date(upcomingLaunch.date_utc).toLocaleString()}</p>
            <p>Details: ${upcomingLaunch.details}</p>
        `;
            } else {
                launchContainer.innerText = "No upcoming launches";
            }
        })
        .catch(error => {
            launchContainer.innerText = "Error fetching launches";
            console.error(error);
        });
}
*/