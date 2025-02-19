async function getApiData() {
    // get div with api_data id
    let api_data = document.getElementById('api_data');

    // Make a request to the user API
    const response = await fetch("https://randomuser.me/api")

    // Convert responce into json format
    const data = await response.json()

    // Create a container
    let container = document.createElement("div")

    // Set attribute class = container
    container.setAttribute("class", "container")

    // Iterate the data json object
    data.results.forEach(user => {
        // Create HTML element with data
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