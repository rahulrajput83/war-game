const card_type = ['♠', '♥', '♦', '♣'];
const card_value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let mixed = card_value.flatMap(d => card_type.map(v => d + v));
let shuffledArray = [];
let card1 = document.getElementById("player");
let card2 = document.getElementById("computer");

function start() {
    if (shuffledArray.length == 0) {
        const card_type = ['♠', '♥', '♦', '♣'];
        const card_value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let mixed = card_value.flatMap(d => card_type.map(v => d + v));
        shuffledArray = mixed.sort((a, b) => 0.5 - Math.random());
        document.getElementById("player_no").style.display = "none";
        document.getElementById("com_no").style.display = "none";
        document.getElementById("player_no").innerText = shuffledArray;
        document.getElementById("com_no").innerText = shuffledArray;
    }
    else if (shuffledArray.length < 52) {
        shuffledArray = shuffledArray.sort((a, b) => 0.5 - Math.random());
        document.getElementById("player_no").style.display = "none";
        document.getElementById("com_no").style.display = "none";
    }
    else if (shuffledArray.length == 52) {
        const card_type = ['♠', '♥', '♦', '♣'];
        const card_value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let mixed = card_value.flatMap(d => card_type.map(v => d + v));
        shuffledArray = mixed.sort((a, b) => 0.5 - Math.random());
        document.getElementById("player_no").style.display = "none";
        document.getElementById("com_no").style.display = "none";
        document.getElementById("player_no").innerText = shuffledArray;
        document.getElementById("com_no").innerText = shuffledArray;
    }
    document.getElementById("button1").disabled = false;
    count = 0;
    var x = setInterval(function(){
        card1.classList.toggle("flipCard");
        card2.classList.toggle("flipCard");
        if(count > 20) clearInterval(x);
        count++;
    }, 70);
};

function getNo() {
    if (shuffledArray.length == 0) {
        document.getElementById("player_no").style.display = "none";
        document.getElementById("com_no").style.display = "none";
        document.getElementById("button1").disabled = true;
        document.getElementById("player").style.backgroundImage = "url('background.jpg')";
        document.getElementById("computer").style.backgroundImage = "url('background.jpg')";
    }
    else {
        document.getElementById("player_no").style.display = "block";
        document.getElementById("player").style.backgroundImage = "none";
        document.getElementById("computer").style.backgroundImage = "none";
        document.getElementById("com_no").style.display = "block";
        document.getElementById("player_no").innerText = shuffledArray.pop();
        document.getElementById("com_no").innerText = shuffledArray.pop();
        let char1 = document.getElementById("player_no").innerText;
        let char2 = document.getElementById("com_no").innerText;
        let player = document.getElementById("player_score");
        let player_score = player.innerHTML;
        let computer = document.getElementById("computer_score");
        let computer_score = computer.innerHTML;
        document.getElementById("winner").innerText = "";
        card1.classList.toggle("flipCard");
        card2.classList.toggle("flipCard");
        let num1 = 0;
        let num2 = 0;


        if ( char1.includes("A")) {
            num1 = 11;
        }
        else if ( char1.includes("J")) {
            num1 = 12;
        }
        else if ( char1.includes("Q")) {
            num1 = 13;
        }
        else if ( char1.includes("K")) {
            num1 = 14;
        }
        else {
            num1 = char1.charAt(0);
        }
        if ( char2.includes("A")) {
            num2 = 11;
        }
        else if ( char2.includes("J")) {
            num2 = 12;
        }
        else if ( char2.includes("Q")) {
            num2 = 13;
        }
        else if ( char2.includes("K")) {
            num2 = 14;
        }
        else {
            num2 = char2.charAt(0);
        }
        if (num1 > num2) {
            player_score = +player_score + 1;
            player.innerHTML = player_score;
        }
        else if (num1 < num2) {
            computer_score = +computer_score + 1;
            computer.innerHTML = computer_score;
        }
        else if (num1 == num2) {
        }
    }
};