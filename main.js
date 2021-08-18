

const residentsButton = document.getElementById("resident-btn")
// console.log(residentsButton);

function buttonClicked() {
    // console.log(response);

    axios.get('https://swapi.dev/api/planets/2/')
        .then(response => {
    //         let residentsArray = response.data.results[0].residents
    //         for(let i = 0; i < residentsArray.length; i++)

            console.log(response);
        })


}




residentsButton.addEventListener("click", buttonClicked);

