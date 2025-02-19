async function getApiData() {
    // Get div with api_data id
    let api_data = document.getElementById("api_data");

    // Create a loader approach
    let loading = document.createElement('img');
    loading.src = './assets/images/loading.gif';
    loading.setAttribute('class', 'loading');
    api_data.appendChild(loading);

    // Make a request to the user API
    const response = await fetch("https://randomuser.me/api")

    // Convert response into json format
    const data = await response.json()

    // Clear the api_data div
    api_data.innerHTML = '';

    // Create a container
    let container = document.createElement("div")

    // Set attribute class = container
    container.setAttribute("class", "container")

    // Iterate the data json object
    data.results.forEach(user => {
        // Create HTML elements with data
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        let img = document.createElement("img")
        img.src = user.picture.large;
        let name = document.createElement("h3")
        name.innerHTML = `Name: ${user.name.first} ${user.name.last}`
        let email = document.createElement("p")
        email.innerHTML = user.email;
        let age = document.createElement("p")
        age.innerHTML = `Age: ${user.dob.age}`

        // Append elements to card container
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(email)
        card.appendChild(age)

        // Append elements to api_data container
        api_data.appendChild(card)
    })

}