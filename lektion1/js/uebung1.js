/**
 * Uebung 1: Variablen
 */

/**
 * 1) Eine Variable land erstellen
 */
//ToDo: füge ab hier Deinen Code ein
let country = "Spanien"

function aufgabe2(land) {

    console.debug("Aufgabe 2 ==========================")
    console.debug(country)
}

/**
 * 3) Erstelle die Variablen
 */
//ToDo: füge ab hier Deinen Code ein
let stadt, berg, fluss;

/**
 * 4) Gebe den Variablen Werte
 */
function aufgabe4() {
    console.debug("Aufgabe 4 ==========================")
    //ToDo: füge ab hier Deinen Code ein
    stadt = "berlin"
    berg = " Mount Everest"
    fluss = "Nil"
    console.debug(stadt, ", ", berg, ", ", fluss)
}

/**
 * 5) Erstelle die Variablen mit verschiedenem Typ
 */
function aufgabe5() {
    console.debug("Aufgabe 5 ==========================")

    //ToDo: füge ab hier Deinen Code ein
    let name = "Elon Musk"
    let alter = 50
    let groesseInMeter = 1.88
    let amLeben = "true"
    console.debug(name)
    console.debug(alter)
    console.debug(groesseInMeter)
    console.debug(amLeben)
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    aufgabe2()
    aufgabe4()
    aufgabe5()
}

main()