

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* random fact generator thing */

function fact_check() {
    fact = Math.floor(Math.random()*6) + 1
    switch(fact) {
        case 1:
            var x = document.getElementById("fact_div");
            x.innerHTML = "The nucklavee hates the smell of burning seaweed but beware it holds a grudge.";
            break;
        case 2:
            var x = document.getElementById("fact_div");
            x.innerHTML = "The nucklavee is disgusted by fresh water.";
            break;
        case 3:
            var x = document.getElementById("fact_div");
            x.innerHTML = "Be weary of kelpies near freshwater lakes.";
            break;
        case 4:
            var x = document.getElementById("fact_div");
            x.innerHTML = "Kelpies sometimes take the form of a male.";
            break;
        case 5:
            var x = document.getElementById("fact_div");
            x.innerHTML = "Banshees foretell the death of someone who hears it.";
            break;
        case 6:
            var x = document.getElementById("fact_div");
            x.innerHTML = "Banshees are known to be nearby the lord of the underworld.";
            break;
        default:
            var x = document.getElementById("fact_div");
            x.innerHTML = "The man sleeps.";
            break;
    }
}