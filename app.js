let x = [], o = [];
let player; //determina quando tocca a x e quando a o
let clicks = 0; //conta il totale dei click fatti, cioè solo quelli che portano ad una x o ad una o
let scheck = false; //per non contare il primo click (let scheck perchè mi faceva ridere)
if (Math.round(Math.random()) == 1) { //calcola a caso chi inizia
    console.log('sei x');
    player = 'x';
    tocca_a_x();
} else {
    console.log('sei o');
    player = 'o';
    tocca_a_o();
}
for(let i=0; i<9; i++){ //inizializza l'array
    x[i]=false;
    o[i]=false;
}
function tocca_a_x() { //tocca a x e lo dice, inoltre conta click
    if (scheck == false)
        scheck = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("tocca a").innerHTML = "tocca a x!";
}

function tocca_a_o() { //tocca a o e lo dice, inoltre conta click
    if (scheck == false)
        scheck = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("tocca a").innerHTML = "tocca a o!";
}
//qui ci sono variabili per controllare se la casella è stata premuta e da chi

function cliccato(posizione){
    if(x[posizione-1]==false && o[posizione-1]==false){
        if(player=='o'){
            o[posizione-1] = true;
            document.getElementById("casella"+posizione).innerHTML = "o";
            document.getElementById("casella"+posizione).style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x[posizione-1] = true;
            document.getElementById("casella"+posizione).innerHTML = "x";
            document.getElementById("casella"+posizione).style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

//controlla i casi di vittoria

function controllo() {
    if (x[0] == true && x[1] == true && x[2] == true || x[0] == true && x[4] == true && x[8] == true || x[0] == true && x[3] == true && x[6] == true || x[1] == true && x[4] == true && x[7] == true || x[2] == true && x[5] == true && x[8] == true || x[2] == true && x[4] == true && x[6] == true || x[6] == true && x[7] == true && x[8] == true || x[3] == true && x[4] == true && x[5] == true) {
        alert('ha vinto x!');
        console.log('vittoria per x');
        reset();
    } else if (o[0] == true && o[1] == true && o[2] == true || o[0] == true && o[4] == true && o[8] == true || o[0] == true && o[3] == true && o[6] == true || o[1] == true && o[4] == true && o[7] == true || o[2] == true && o[5] == true && o[8] == true || o[2] == true && o[4] == true && o[6] == true || o[6] == true && o[7] == true && o[8] == true || o[3] == true && o[4] == true && o[5] == true) {
        alert('ha vinto o!');
        console.log('vittoria per o');
        reset();
    }
    if (clicks == 9) {
        alert('patta');
        console.log('patta');
        reset();
    }
}

//reset quando finisce un gioco

function reset() {
    for (let i = 1; i < 10; i++) {
        let nome = "casella" + i;
        document.getElementById(nome).innerHTML = "";
        x[i-1]=false;
        o[i-1]=false;
    }
    clicks = 0;
}

//quando il mouse passa dalle caselle

function hox(posizione) {
    if (x[posizione-1] == false && o[posizione-1] == false) {
        if (player == 'o') {
            document.getElementById("casella"+posizione).innerHTML = "o";
            document.getElementById("casella"+posizione).style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella"+posizione).innerHTML = "x";
            document.getElementById("casella"+posizione).style.opacity = "0.5";
        }
    } else
        nhox(posizione);
}

function nhox(posizione) {
    if (x[posizione-1] == false && o[posizione-1] == false)
        document.getElementById("casella"+posizione).innerHTML = "";
}