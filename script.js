document.getElementById('download').onclick = (e)=>{
    let cards = document.getElementsByClassName('card')
    for (const card of cards){
        fetch("https://randomuser.me/api")
                .then(response => response.json(), reject =>{document.getElementById("error").innerText='Error: '+reject}).then(user=>{
                    console.log(user.results[0]);
                    let user_data = user.results[0];
                    card.getElementsByClassName("card-img")[0].src = user_data.picture.large
                    card.getElementsByClassName("card-name")[0].innerText = "Name: "+user_data.name.title + 
                        ' ' +user_data.name.first + ' ' +user_data.name.last;
                    card.getElementsByClassName("card-city")[0].innerText = "City: "+user_data.location.city;
                    card.getElementsByClassName("card-country")[0].innerText = "Country: "+user_data.location.country;
                    card.getElementsByClassName("card-code")[0].innerText = "Postal code: "+user_data.location.postcode;
                }).catch(e=>console.log('error'));
        }
    document.getElementById("error").innerText='Success!'
}