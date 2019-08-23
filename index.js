'use strict'

//variables for apikey 
const apiKey = '8e934c0df4364f07ace1f4c4317de0d7';
const searchURL = 'https://api.nps.gov/api/v1/parks';

//get request from NPS API
function getNationalParks(query, maxResults = 10){
    //create query parameters
    const params = {
        api_Key: apiKey,
        stateCode: query,
        limit: maxResults,
        fields: 'addresses'
    };

    // const options = {
    //     headers: new Headers({'X-Api-Key':apiKey})
    // }

    //create string with original url and new params 
    const queryString = formatQueryParams(params)
    const newUrl = searchURL + '?' + queryString;

    fetch(newUrl) 
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(responseJson => displayResults(responseJson))
        .catch(error => {
            console.log(error);
        });
}

//checks what the user has submitted through the form 
function userInputForm(){
    $('form').on('submit', event => {
        event.preventDefault();
        let searchState = $('.state-form').val();
        let maxResults = $('.number-form').val();
        getNationalParks(searchState, maxResults);
        console.log(maxResults);
    });
    

}

//format search query 
function formatQueryParams(params) {
    const allKeys = Object.keys(params);
    const newArr = allKeys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return newArr.join('&');
  }  


//renders the get request results to the DOM 
function displayResults(json){
    $('#js-results-list').empty();
    const js = json.data;
    for(let i = 0; i < js.length; i++){
        let address = js[i].addresses[0];
    $('#js-results-list').append(`
        <h2>${js[i].fullName}</h2>
        <p>${js[i].description}</p>
        <a href="${js[i].url}">Park's Website</a><br>
        <p>${address.line1}, ${address.city}, ${address.stateCode}, ${address.postalCode}</p>
    `)
    }
}

$(userInputForm());








