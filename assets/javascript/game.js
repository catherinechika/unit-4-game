

// When the window loads, random numbers will be generated
window.onload = function () {
    let heartNum = Math.floor(Math.random() * 12) + 1;
    let diamondNum = Math.floor(Math.random() * 12) + 1;
    let sphereNum = Math.floor(Math.random() * 12) + 1;
    let cubeNum = Math.floor(Math.random() * 12) + 1;

    // The scores and total scores are reset to 0
    let winScore = 0
    let loseScore = 0
    let totalScore = 0;

    // The computer guess is generated
    let compGuess = Math.floor((Math.random() * (120 - 19))) + 19;
    $(".compGuess").text(compGuess);

    // When the button is clicked, we generate the id for the clicked button
    $('.btn').click(function (event) {
        const id = event.target.id
        console.log(id)

        // wnen out score equals the computer score, we update out wins
        if (totalScore === compGuess) {
            winScore++
            totalScore = 0;
            $(".totalScore").text(totalScore);
            $(".winScore").text(winScore)
            compGuess = Math.floor((Math.random() * (120 - 19))) + 19;
            $(".compGuess").text(compGuess);

        }

        // if the heart button is clicked, add the number generated for it
        else if (id === "heart" && totalScore < compGuess) {
            totalScore = totalScore + heartNum;
            $(".totalScore").text(totalScore);
        }
        // if the sphere button is clicked, add the number generated for it
        else if (id === "sphere" && totalScore < compGuess) {
            totalScore = totalScore + sphereNum;
            $(".totalScore").text(totalScore);
        }
        // if the cube button is clicked, add the number generated for it
        else if (id === "cube" && totalScore < compGuess) {
            totalScore = totalScore + cubeNum;
            $(".totalScore").text(totalScore);
        }
        // if the diamond button is clicked, add the number generated for it

        else if (id === "diamond" && totalScore < compGuess) {
            totalScore = totalScore + diamondNum;
            $(".totalScore").text(totalScore);
        }

        // when our score is more than the computer number, we update loss
        else {
            loseScore++
            totalScore = 0;
            $(".totalScore").text(totalScore);
            $(".loseScore").text(loseScore);
            compGuess = Math.floor((Math.random() * (120 - 19))) + 19;
            $(".compGuess").text(compGuess);
            totalScore = 0;
        }

    })
}


