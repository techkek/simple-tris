let player; //determina quando tocca a x e quando a o
let click = 0; //conta il totale dei click fatti, cioè solo quelli che portano ad una x o ad una o
let scheck = false; //per non contare il primo click (let scheck perchè mi faceva ridere)
if (Math.round(Math.random()) == 1) { //calcola a caso chi inizia
    console.log('sei x');
    player = 'x';
    tocca_a_x();
} else {
    console.log('sei 0');
    player = 'o';
    tocca_a_o();
}

function tocca_a_x() { //tocca a x e lo dice, inoltre conta click
    if (scheck == false) {
        scheck = true;
    } else {
        click++;
        console.log(click);
    }
    document.getElementById("tocca a").innerHTML = "tocca a x!";
}

function tocca_a_o() { //tocca a o e lo dice, inoltre conta click
    if (scheck == false) {
        scheck = true;
    } else {
        click++;
        console.log(click);
    }
    document.getElementById("tocca a").innerHTML = "tocca a o!";
}
//qui ci sono variabili per controllare se la casella è stata premuta e da chi
let x1 = false;
let x2 = false;
let x3 = false;
let x4 = false;
let x5 = false;
let x6 = false;
let x7 = false;
let x8 = false;
let x9 = false;
let o1 = false;
let o2 = false;
let o3 = false;
let o4 = false;
let o5 = false;
let o6 = false;
let o7 = false;
let o8 = false;
let o9 = false;

//quando vengono premute le caselle
function click1() {
    if (x1 == false && o1 == false) {
        if (player == 'o') {
            o1 = true;
            document.getElementById("casella1").innerHTML = "o";
            document.getElementById("casella1").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x1 = true;
            document.getElementById("casella1").innerHTML = "x";
            document.getElementById("casella1").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click2() {
    if (x2 == false && o2 == false) {
        if (player == 'o') {
            o2 = true;
            document.getElementById("casella2").innerHTML = "o";
            document.getElementById("casella2").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x2 = true;
            document.getElementById("casella2").style.opacity = "1";
            document.getElementById("casella2").innerHTML = "x";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click3() {
    if (x3 == false && o3 == false) {
        if (player == 'o') {
            o3 = true;
            document.getElementById("casella3").innerHTML = "o";
            document.getElementById("casella3").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x3 = true;
            document.getElementById("casella3").style.opacity = "1";
            document.getElementById("casella3").innerHTML = "x";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click4() {
    if (x4 == false && o4 == false) {
        if (player == 'o') {
            o4 = true;
            document.getElementById("casella4").style.opacity = "1";
            document.getElementById("casella4").innerHTML = "o";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x4 = true;
            document.getElementById("casella4").innerHTML = "x";
            document.getElementById("casella4").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click5() {
    if (x5 == false && o5 == false) {
        if (player == 'o') {
            o5 = true;
            document.getElementById("casella5").innerHTML = "o";
            player = 'x';
            document.getElementById("casella5").style.opacity = "1";
            tocca_a_x();
        } else if (player == 'x') {
            x5 = true;
            document.getElementById("casella5").innerHTML = "x";
            document.getElementById("casella5").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }

}


function click6() {
    if (x6 == false && o6 == false) {
        if (player == 'o') {
            o6 = true;
            document.getElementById("casella6").innerHTML = "o";
            document.getElementById("casella6").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x6 = true;
            document.getElementById("casella6").innerHTML = "x";
            document.getElementById("casella6").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click7() {
    if (x7 == false && o7 == false) {
        if (player == 'o') {
            o7 = true;
            document.getElementById("casella7").innerHTML = "o";
            document.getElementById("casella7").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x7 = true;
            document.getElementById("casella7").innerHTML = "x";
            document.getElementById("casella7").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click8() {
    if (x8 == false && o8 == false) {
        if (player == 'o') {
            o8 = true;
            document.getElementById("casella8").innerHTML = "o";
            document.getElementById("casella8").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x8 = true;
            document.getElementById("casella8").innerHTML = "x";
            document.getElementById("casella8").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function click9() {
    if (x9 == false && o9 == false) {
        if (player == 'o') {
            o9 = true;
            document.getElementById("casella9").innerHTML = "o";
            document.getElementById("casella9").style.opacity = "1";
            player = 'x';
            tocca_a_x();
        } else if (player == 'x') {
            x9 = true;
            document.getElementById("casella9").innerHTML = "x";
            document.getElementById("casella9").style.opacity = "1";
            player = 'o';
            tocca_a_o();
        }
        controllo();
    }
}

function controllo() {
    if (x1 == true && x2 == true && x3 == true || x1 == true && x5 == true && x9 == true || x1 == true && x4 == true && x7 == true || x2 == true && x5 == true && x8 == true || x3 == true && x6 == true && x9 == true || x3 == true && x5 == true && x7 == true || x7 == true && x8 == true && x9 == true || x4 == true && x5 == true && x6 == true) {
        alert('ha vinto x!');
        console.log('vittoria per x');
        reset();
    } else if (o1 == true && o2 == true && o3 == true || o1 == true && o5 == true && o9 == true || o1 == true && o4 == true && o7 == true || o2 == true && o5 == true && o8 == true || o3 == true && o6 == true && o9 == true || o3 == true && o5 == true && o7 == true || o7 == true && o8 == true && o9 == true || o4 == true && o5 == true && o6 == true) {
        alert('ha vinto o!');
        console.log('vittoria per o');
        reset();
    }
    if (click == 9) {
        alert('patta');
        console.log('patta');
        reset();
    }
}

function reset() {
    for (let i = 1; i < 10; i++) {
        let nome = "casella" + i;
        document.getElementById(nome).innerHTML = "";
    }
    x1 = false;
    x2 = false;
    x3 = false;
    x4 = false;
    x5 = false;
    x6 = false;
    x7 = false;
    x8 = false;
    x9 = false;
    o1 = false;
    o2 = false;
    o3 = false;
    o4 = false;
    o5 = false;
    o6 = false;
    o7 = false;
    o8 = false;
    o9 = false;
    click = 0;
}

//quando il mouse passa dalle caselle

function hox1() {
    if (x1 == false && o1 == false) {
        if (player == 'o') {
            document.getElementById("casella1").innerHTML = "o";
            document.getElementById("casella1").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella1").innerHTML = "x";
            document.getElementById("casella1").style.opacity = "0.5";
        }
    } else {
        nhox1();
    }
}

function nhox1() {
    if (x1 == false && o1 == false) {
        document.getElementById("casella1").innerHTML = "";
    }
}

function hox2() {
    if (x2 == false && o2 == false) {
        if (player == 'o') {
            document.getElementById("casella2").innerHTML = "o";
            document.getElementById("casella2").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella2").innerHTML = "x";
            document.getElementById("casella2").style.opacity = "0.5";
        }
    } else {
        nhox2();
    }
}

function nhox2() {
    if (x2 == false && o2 == false) {
        document.getElementById("casella2").innerHTML = "";
    }
}

function hox3() {
    if (x3 == false && o3 == false) {
        if (player == 'o') {
            document.getElementById("casella3").innerHTML = "o";
            document.getElementById("casella3").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella3").innerHTML = "x";
            document.getElementById("casella3").style.opacity = "0.5";
        }
    } else {
        nhox3();
    }
}

function nhox3() {
    if (x3 == false && o3 == false) {
        document.getElementById("casella3").innerHTML = "";
    }
}

function hox4() {
    if (x4 == false && o4 == false) {
        if (player == 'o') {
            document.getElementById("casella4").innerHTML = "o";
            document.getElementById("casella4").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella4").style.opacity = "0.5";
            document.getElementById("casella4").innerHTML = "x";
        }
    } else {
        nhox4();
    }
}

function nhox4() {
    if (x4 == false && o4 == false) {
        document.getElementById("casella4").innerHTML = "";
    }
}

function hox5() {
    if (x5 == false && o5 == false) {
        if (player == 'o') {
            document.getElementById("casella5").innerHTML = "o";
            document.getElementById("casella5").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella5").innerHTML = "x";
            document.getElementById("casella5").style.opacity = "0.5";
        }
    } else {
        nhox5();
    }
}

function nhox5() {
    if (x5 == false && o5 == false) {
        document.getElementById("casella5").innerHTML = "";
    }
}

function hox6() {
    if (x6 == false && o6 == false) {
        if (player == 'o') {
            document.getElementById("casella6").innerHTML = "o";
            document.getElementById("casella6").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella6").innerHTML = "x";
            document.getElementById("casella6").style.opacity = "0.5";
        }
    } else {
        nhox6();
    }
}

function nhox6() {
    if (x6 == false && o6 == false) {
        document.getElementById("casella6").innerHTML = "";
    }
}

function hox7() {
    if (x7 == false && o7 == false) {
        if (player == 'o') {
            document.getElementById("casella7").innerHTML = "o";
            document.getElementById("casella7").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella7").innerHTML = "x";
            document.getElementById("casella7").style.opacity = "0.5";
        }
    } else {
        nhox7();
    }
}

function nhox7() {
    if (x7 == false && o7 == false) {
        document.getElementById("casella7").innerHTML = "";
    }
}

function hox8() {
    if (x8 == false && o8 == false) {
        if (player == 'o') {
            document.getElementById("casella8").innerHTML = "o";
            document.getElementById("casella8").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella8").innerHTML = "x";
            document.getElementById("casella8").style.opacity = "0.5";
        }
    } else {
        nhox8();
    }
}

function nhox8() {
    if (x8 == false && o8 == false) {
        document.getElementById("casella8").innerHTML = "";
    }
}

function hox9() {
    if (x9 == false && o9 == false) {
        if (player == 'o') {
            document.getElementById("casella9").innerHTML = "o";
            document.getElementById("casella9").style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("casella9").innerHTML = "x";
            document.getElementById("casella9").style.opacity = "0.5";
        }
    } else {
        nhox9();
    }
}

function nhox9() {
    if (x9 == false && o9 == false) {
        document.getElementById("casella9").innerHTML = "";
    }
}