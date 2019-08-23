'use strict'

//variables for apikey 
const apiKey = '8e934c0df4364f07ace1f4c4317de0d7';
const searchURL = 'https://api.nps.gov/api/v1/parks';



//get request from NPS API
function getNationalParks(query, maxResults = 10){
    //create query parameters
    const params = {
        stateCode: query,
        maxResults,
        language: 'en',
        key: apiKey
    };
    //create string with original url and new params 
    const queryString = formatQueryParams(params)
    const newUrl = searchURL + '?' + queryString;

}



//checks what the user has submitted through the form 
function userInputForm(){
    $('form').on('submit', event =>
        event.preventDefautl();

    )

}


//format search query 
function formatQueryParams() {

  }  


//renders the get request results to the DOM 
function displayResults(){

}









