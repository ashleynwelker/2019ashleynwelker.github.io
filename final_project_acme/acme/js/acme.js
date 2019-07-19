let acmeURL = "https://ashleynwelker.github.io/final_project_acme/acme/js/acme.json";
fetchData(acmeURL); 

function fetchData(acmeURL) {
    fetch(acmeURL)
    .then(function(response) {
        if(response.ok) {
        return response.json(); 
    }
        throw new Error('Network response was not OK.');
    })
    .then(function(data) {
        // Check the data object that was retrieved
        console.log(data);
        let key = document.getElementById("hidden").value;

        let info = data[key].description;
        document.getElementById("description").innerHTML = info;

        let name = data[key].name;
        document.getElementById("welcome").innerHTML = name;

        let image = data[key].path;
        document.getElementById("image").setAttribute("src", image);

        let maker = data[key].manufacturer;
        document.getElementById("maker").innerHTML = maker;

        let review = data[key].reviews;
        document.getElementById("review").innerHTML = review;

        let price = data[key].price;
        document.getElementById("price").innerHTML = price;
        
    });
}