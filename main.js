const getBtn = document.getElementById("getBtn")
getBtn.addEventListener('click', notify)




function notify() { 
    axios.get("https://swapi.dev/api/people/") 
    .then(function (response) { 
        console.log(response);
        
    })

    console.log("Button Clicked")
}


