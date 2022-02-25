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
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    var bMise = parseInt(tMise);
    var bMoney = parseInt(tMoney);
    var newSold = 0;
    if(totalAmount == 0) {

    }
    else {
        var validBtn = document.getElementById("validator");
        if(fireBlocking == 0 && validationBlocking == 0) {
            validedNumber = totalAmount;
            fireBlocking = 1;
            validationBlocking = 1;
            validBtn.innerHTML = "La banque joue..";
            newSold = bMoney - bMise;
            localStorage.setItem('totalMoney', newSold);
            bankPlaying();
        }
        if(validBtn.innerHTML == "Rejouer") {
            restart();
        }
        initDisplay();
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
    miseVerification();
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
        bankTirage();
        bankTirage();
        if(bankTotalAmount == 2) {
            bankTirage();
        }
        if(bankTotalAmount == 3) {
            bankTirage();
        }
        if(bankTotalAmount == 4) {
            bankTirage();
        }
        if(bankTotalAmount == 5) {
            bankTirage();
        }
        if(bankTotalAmount == 6) {
            bankTirage();
        }
        if(bankTotalAmount == 7) {
            bankTirage();
        }
        if(bankTotalAmount == 8) {
            bankTirage();
        }
        if(bankTotalAmount == 9) {
            bankTirage();
        }
        if(bankTotalAmount == 10) {
            bankTirage();
        }
        if(bankTotalAmount == 11) {
            bankTirage();
        }
        if(bankTotalAmount == 12) {
            bankTirage();
        }
        if(bankTotalAmount == 13) {
            bankTirage();
        }
        if(bankTotalAmount == 14) {
            if(bankTotalAmount < totalAmount && totalAmount <= 21) {
                bankTirage();
            }
            else {
                
            }
        }
        if(bankTotalAmount == 15) {
            if(bankTotalAmount < totalAmount && totalAmount <= 21) {
                bankTirage();
            }
            else {
                
            }
        }
        if(bankTotalAmount == 16) {
            if(bankTotalAmount < totalAmount && totalAmount <= 21) {
                bankTirage();
            }
            else {

            }
        }
        if(bankTotalAmount == 17) {
            if(bankTotalAmount < totalAmount && totalAmount <= 21) {
                bankTirage();
            }
            else {

            }
        }
        if(bankTotalAmount == 18) {
            if(bankTotalAmount < totalAmount && totalAmount <= 21) {
                bankTirage();
            }
            else {

            }
            
        }
        if(bankTotalAmount >= 19) {
            
        }
        partyVerification();
        console.log("Fin de tirage");
    }, 500);
}
function bankTirage() {
    console.log("Nouveau tirage");
    bankLastNumber = Math.floor(Math.random() * 7);
    console.log(bankLastNumber);
    if(bankLastNumber == 0) {
        bankLastNumber = 1;
    }
    bankTotalAmount = bankTotalAmount + bankLastNumber;
    bankDisplay();
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
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    if(tWins == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    if(tGames == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    if(tEquality == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    if(tLost == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    if(tMise == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    if(tMoney == null) {
        localStorage.setItem('totalEquality', 0);
        localStorage.setItem('totalGames', 0);
        localStorage.setItem('totalWins', 0);
        localStorage.setItem('totalLost', 0);
        localStorage.setItem('totalMise', 100);
        localStorage.setItem('totalMoney', 1000);
    }
    initDisplay();
}
function initDisplay() {
    var tWins = localStorage.getItem('totalWins');
    var tGames = localStorage.getItem('totalGames');
    var tEquality = localStorage.getItem('totalEquality');
    var tLost = localStorage.getItem('totalLost');
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    var dWins = document.getElementById('totalWins');
    var dGames = document.getElementById('totalGames');
    var dEquality = document.getElementById('totalEquality');
    var dLost = document.getElementById('totalLost');
    var dMise = document.getElementById('totalMise');
    var dMoney = document.getElementById('totalMoney')
    dGames.innerHTML = tGames;
    dWins.innerHTML = tWins;
    dEquality.innerHTML = tEquality;
    dLost.innerHTML = tLost;
    dMise.innerHTML = tMise;
    dMoney.innerHTML = tMoney;
}

function winning() {
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    var bMise = parseInt(tMise);
    var bMoney = parseInt(tMoney);
    var newMoney = (bMise * 2);
    var newTotalMoney = bMoney + newMoney;
    localStorage.setItem('totalMoney', newTotalMoney);
}

function equality() {
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    var bMise = parseInt(tMise);
    var bMoney = parseInt(tMoney);
    var newTotalMoney = bMise + bMoney;
    localStorage.setItem('totalMoney', newTotalMoney);
}

function regaming() {
    var tMoney = localStorage.getItem('totalMoney');
    var bMoney = parseInt(tMoney);
    if(bMoney < 100) {
        partyEnding();
        fireBlocking = 1;
        validationBlocking = 1;
    }
}

function newGame() {
    localStorage.removeItem('totalMoney');
    inialization();
    initDisplay();
    location.reload();
}

function partyEnding() {
    var tWins = localStorage.getItem('totalWins');
    var tGames = localStorage.getItem('totalGames');
    var tEquality = localStorage.getItem('totalEquality');
    var tLost = localStorage.getItem('totalLost');
    var bGames = parseInt(tGames);
    var bWins = parseInt(tWins);
    var bEquality = parseInt(tEquality);
    var bLost = parseInt(tLost);
    setTimeout(function() {
    var msg='Partie terminée!';
    var rounds='\n\nManches jouées : ' + bGames
    var wins='\nManches gagnées : ' + bWins
    var equalities='\nManches à égalité : ' + bEquality
    var loses='\nManches perdues : ' + bLost
    alert(msg + rounds + wins + equalities + loses + '\n\nCliquez sur OK pour rejouer..');
    newGame();
    }, 500);
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
        equality();
        initDisplay();
    }
    if(totalAmount > bankTotalAmount && totalAmount <= 21) {
        shower.innerHTML = "Vous avez gagné!";
        var nWins = bWins + 1;
        localStorage.setItem('totalWins', nWins);
        winning();
        initDisplay();
    }
    if(bankTotalAmount > 21) {
        shower.innerHTML = "Vous avez gagné!";
        var nWins = bWins + 1;
        localStorage.setItem('totalWins', nWins);
        winning();
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
        equality();
        initDisplay();
    }
    var validBtn = document.getElementById("validator");
    validBtn.innerHTML = "Rejouer";
    var nGames = bGames + 1;
    localStorage.setItem('totalGames', nGames);
    regaming();
    initDisplay();
}

function setMise(mise) {
    var tMoney = localStorage.getItem('totalMoney');
    var bMoney = parseInt(tMoney);
    if(mise.value > bMoney && bMoney < 500) {
        console.log('Cas 1');
        localStorage.setItem('totalMise', 250);
        initDisplay();
    }
    if(mise.value > bMoney && bMoney < 250) {
        localStorage.setItem('totalMise', 100);
        console.log('Cas 2');
        initDisplay();
    }
    if(mise.value <= bMoney) {
        console.log('Cas 3 soit OK');
        localStorage.setItem('totalMise', mise.value);
        initDisplay();
    }
}
function miseVerification() {
    var tMise = localStorage.getItem('totalMise');
    var tMoney = localStorage.getItem('totalMoney');
    var bMoney = parseInt(tMoney);
    var bMise = parseInt(tMise);
    if(bMise > bMoney && bMoney < 500) {
        console.log('Cas 1');
        localStorage.setItem('totalMise', 250);
        initDisplay();
    }
    if(bMise > bMoney && bMoney < 250) {
        localStorage.setItem('totalMise', 100);
        console.log('Cas 2');
        initDisplay();
    }
    if(bMise <= bMoney) {
        console.log('Cas 3 soit Ok');
        localStorage.setItem('totalMise', tMise);
        initDisplay();
    }
}