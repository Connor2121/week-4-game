$(document).ready(function() {

    // selects random number from 19-120
    // pushes to html page
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#random-number-box").text(randomNumber);

    // var to hold value of crystals
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // var crystalValue = [10, 5, 3, 7];
    // for (var i = 0; i < crystalValue.length; i++){
     // var randomizeValue = crystalValue[Math.round(Math.random())];
    var value1 = Math.floor(Math.random() * 11 +1);
    var value2 = Math.floor(Math.random() * 11 +1);
    var value3 = Math.floor(Math.random() * 11 +1);
    var value4 = Math.floor(Math.random() * 11 +1);


   
   
   
     //$("#all-crystals").on("click", ".crystal-image", function() {
        
     $('#purpleCrystal').on('click', function() {
        userScore = userScore + value1;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++;
        }
    
         if (userScore >= randomNumber) {
            losses++
        }
     });

     $('#blueCrystal').on('click', function() {
        userScore = userScore + value2;
        $('#user-number-score').text(userScore);


        if (userScore === randomNumber) {
            wins++
        }
    
         if (userScore >= randomNumber) {
            losses++
        }
     });

     $('#clearCrystal').on('click', function() {
        userScore = userScore + value3;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++
        }
    
         if (userScore >= randomNumber) {
            losses++
        }
     });

     $('#greenCrystal').on('click', function() {
        userScore = userScore + value4;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++;
           
        } 
    
         if (userScore >= randomNumber) {
            losses++;
            
        }
     });

     var html =
     '<p>Wins: ' + wins + '<p>' +
     '<p>Losses: ' + losses + '<p>'

     $('#score-box').innerHTML = html;

});

