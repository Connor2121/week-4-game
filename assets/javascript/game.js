$(document).ready(function() {

    // selects random number from 19-120
    // pushes to html page
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#random-number-box").text(randomNumber);

    // var to hold value of crystals
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    

    var reset = function(){
       
        randomNumber = Math.floor(Math.random() * 101 + 19);
         $('#random-number-box').text(randomNumber);
         userScore = 0;
        $("#user-number-score").text(userScore);
         
       
        };
     
    

    
    // for (var i = 0; i < ; i++){
     // var randomizeValue = crystalValue[Math.round(Math.random())];
    
    // random value for each crystal
  
    var value1 = Math.floor(Math.random() * 11 +1);
    var value2 = Math.floor(Math.random() * 11 +1);
    var value3 = Math.floor(Math.random() * 11 +1);
    var value4 = Math.floor(Math.random() * 11 +1);
    

   
   
    
     //$("#all-crystals").on("click", ".crystal-image", function() {

        // on click functions for all 4 crystals...Not Dry!
     $('#purpleCrystal').on('click', function() {
        userScore = userScore + value1;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
        }
    
         if (userScore > randomNumber) {
            losses++
            $("#losses").html("Losses: " + losses);
            reset();
        }
     });

     $('#blueCrystal').on('click', function() {
        userScore = userScore + value2;
        $('#user-number-score').text(userScore);


        if (userScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
        }
    
         if (userScore > randomNumber) {
            losses++
            $("#losses").html("Losses" + losses);
            reset();
        }
     });

     $('#clearCrystal').on('click', function() {
        userScore = userScore + value3;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
        }
    
         if (userScore > randomNumber) {
            losses++
            $("#losses").html("Losses: " + losses);
            reset();
        }
     });

     $('#greenCrystal').on('click', function() {
        userScore = userScore + value4;
        $('#user-number-score').text(userScore);

        if (userScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
           
        } 
    
         if (userScore > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            reset();
        }
     });

    
});
