var totalAmount = 0;
var lastNumber = 0;
var validedNumber = 0;
var fireBlocking = 0;
var validationBlocking = 0;
var bankTotalAmount = 0;
var bankLastNumber = 0;

function tirage() {
    if(fireBlocking == 0) {
        lastNumber = Math.floor(Math.random() * 7);
        if(lastNumber == 0) {
            lastNumber = 1;
        }
        totalAmount = totalAmount + lastNumber;
        if(totalAmount > 21) {
            validation();
        }
        display();  
    }
}
function validation() {
    if(totalAmount == 0) {

    }
    else {
        var validBtn = document.getElementById("validator");
        if(fireBlocking == 0 && validationBlocking == 0) {
            validedNumber = totalAmount;
            fireBlocking = 1;
            validationBlocking = 1;
            validBtn.innerHTML = "La banque joue..";
            bankPlaying();
        }
        if(validBtn.innerHTML == "Rejouer") {
            restart();
        }
    }
}
function restart() {
    fireBlocking = 0;
    validationBlocking = 0;
    totalAmount = 0;
    bankTotalAmount = 0;
    var counter = document.getElementById("amount");
    counter.innerHTML = totalAmount;
    var validBtn = document.getElementById("validator");
    validBtn.innerHTML = "Valider";
    var shower = document.getElementById("annonce");
    shower.innerHTML = "";
    bankDisplay();
    initDisplay();
}
document.body.onkeyup = function(e){
    if(e.keyCode == 37){
        tirage();
    }
    if(e.keyCode == 39){
        validation();
    }
}
function display() {
    var counter = document.getElementById("amount");
    counter.innerHTML = totalAmount;
}
function bankPlaying() {
    setTimeout(function() {
        while(bankTotalAmount <= 16) {
            bankLastNumber = Math.floor(Math.random() * 7);
            if(bankLastNumber == 0) {
                bankLastNumber = 1;
            }
            bankTotalAmount = bankTotalAmount + bankLastNumber;
            bankDisplay();
        }
        if(totalAmount > 21) {
        }
        if(bankTotalAmount == 18 && bankTotalAmount <= totalAmount) {
            bankLastNumber = Math.floor(Math.random() * 7);
            if(bankLastNumber == 0) {
                bankLastNumber = 1;
            }
            bankTotalAmount = bankTotalAmount + bankLastNumber;
            bankDisplay();
        }
        if(bankTotalAmount >= totalAmount && bankTotalAmount <= 21) {
            bankTotalAmount = bankTotalAmount;
        }
        partyVerification();
    }, 500);
}
function bankDisplay() {
    var counter = document.getElementById("bankAmount");
    counter.innerHTML = bankTotalAmount;
}
function inialization() {
    var tWins = localStorage.getItem('totalWins');
    var tGames = localStorage.getItem('totalGames');
    var tEquality = localStorage.getItem('totalEquality');
    var tLost = localStorage.getItem('totalLost');
    if(tWins == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
    }
    if(tGames == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
    }
    if(tEquality == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
    }
    if(tLost == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
    }
    initDisplay();
}
function initDisplay() {
    var tWins = localStorage.getItem('totalWins');
    var tGames = localStorage.getItem('totalGames');
    var tEquality = localStorage.getItem('totalEquality');
    var tLost = localStorage.getItem('totalLost');
    var dWins = document.getElementById('totalWins');
    var dGames = document.getElementById('totalGames');
    var dEquality = document.getElementById('totalEquality');
    var dLost = document.getElementById('totalLost');
    dGames.innerHTML = tGames;
    dWins.innerHTML = tWins;
    dEquality.innerHTML = tEquality;
    dLost.innerHTML = tLost;
}
function partyVerification() {
    var tWins = localStorage.getItem('totalWins');
    var tGames = localStorage.getItem('totalGames');
    var tEquality = localStorage.getItem('totalEquality');
    var tLost = localStorage.getItem('totalLost');
    var bGames = parseInt(tGames);
    var bWins = parseInt(tWins);
    var bEquality = parseInt(tEquality);
    var bLost = parseInt(tLost);
    var shower = document.getElementById("amount");
    if(bankTotalAmount > totalAmount && bankTotalAmount <= 21) {
        shower.innerHTML = "La banque l'emporte!";
        var nLost = bLost + 1;
        localStorage.setItem('totalLost', nLost);
        initDisplay();
    }
    if(bankTotalAmount == totalAmount) {
        shower.innerHTML = "Personne ne gagne..";
        var nEquality = bEquality + 1;
        localStorage.setItem('totalEquality', nEquality);
        initDisplay();
    }
    if(totalAmount > bankTotalAmount && totalAmount <= 21) {
        shower.innerHTML = "Vous avez gagné!";
        var nWins = bWins + 1;
        localStorage.setItem('totalWins', nWins);
        initDisplay();
    }
    if(bankTotalAmount > 21) {
        shower.innerHTML = "Vous avez gagné!";
        var nWins = bWins + 1;
        localStorage.setItem('totalWins', nWins);
        initDisplay();
    }
    if(totalAmount > 21) {
        shower.innerHTML = "La banque l'emporte!";
        var nLost = bLost + 1;
        localStorage.setItem('totalLost', nLost);
        initDisplay();
    }
    if(bankTotalAmount > 21 && totalAmount > 21) {
        shower.innerHTML = "Personne ne gagne..";
        var nEquality = bEquality + 1;
        localStorage.setItem('totalEquality', nEquality);
        initDisplay();
    }
    var validBtn = document.getElementById("validator");
    validBtn.innerHTML = "Rejouer";
    var nGames = bGames + 1;
    localStorage.setItem('totalGames', nGames);
    initDisplay();
}