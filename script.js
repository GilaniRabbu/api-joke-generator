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
