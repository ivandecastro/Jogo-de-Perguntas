function animes(a, b) {
    let answer = prompt(`which anime is your favorite: ${a} or ${b}`);
    let value = 0; 
    let number;

    if (answer == a) {
       number = value + 20;
    } else {
       number = value + -10;
    } //if (number > 10) {
        //alert(Your score is ${number});
        //alert('Congratulations you beauty, you actually know a lot about animes');
        //} else {
        //alert(Your score is ${number});
        //alert('I do not like to say that but you knowledge about anime is kind sucks');
        //}
    let FinalScore = number;
     
    function SecondAnimes(a, b) {
        let SecondAnswer = prompt(`which anime is your favorite: ${a} or ${b}`);
        let SecondValue = FinalScore
        let SecondNumber;
    
        if(SecondAnswer == a) {
            SecondNumber = SecondValue + 30;
        } else {
            SecondNumber = SecondValue - 40;
        }
    
        let SecondFinalScore = SecondNumber;

        function ThirdAnimes(a, b) {
            let ThirdAnswer = prompt(`which anime is your favorite: ${a} or ${b}`);
            let ThirdValue = SecondFinalScore;
            let ThirdNumber;

            if (ThirdAnswer == a) {
                ThirdNumber = ThirdValue + 40;
            } else{
                ThirdNumber = ThirdValue + 50;
            }

            let ThirdFinalScore = ThirdNumber;



            if (ThirdFinalScore > 30) {
                alert(`Your score is ${ThirdFinalScore}`);
                alert('Congratulations you beauty, you actually know a lot about animes');
            } else {
                alert(`Your score is ${ThirdFinalScore}`);
                alert('I do not like to say that but you knowledge about anime is kind sucks');
            }
        }

        ThirdAnimes('Frieren', 'One Piece');
}

SecondAnimes('aot', 'naruto');

//function SecondAnimes(a, b) {
    //let SecondAnswer = prompt(which anime is better: ${a} or ${b});
    //let SecondValue = 0
    //let SecondNumber;

   // if(SecondAnswer == a) {
        //SecondNumber = SecondValue + 30;
    //} else {
        //SecondNumber = SecondValue - 40;
    //}

    //let SecondFinalScore = SecondNumber;

    //if (SecondFinalScore >= 20) {
        //alert(Your score is ${SecondFinalScore});
        //alert('Congratulations you beauty, you actually know a lot about animes');
    //} else {
        //alert(Your score is ${SecondFinalScore});
        //alert('I do not like to say that but you knowledge about anime is kind sucks');
    //}
}

animes('your lie in april', 'boruto');