// 01 : Table de multiplication
const N = parseInt(prompt("Entrez un nombre N :"));

for (let i = 1; i <= 10; i++) {
    console.log(`${N} x ${i} = ${N * i}`);
}

// 02 : Afficher les nombres de 1 à N

const X = parseInt(prompt("Entrez un nombre X :"));

for (let i = 1; i <= X; i++) {
    console.log(`${i}`);
}

// 03 : Compter de 0 à 100

A = parseInt

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${"FizzBuzz"}`);
    }
    else if (i % 5 === 0) {
        console.log(`${"Buzz"}`);
    }
    else if (i % 5 === 0) {
        console.log(`${"FizzBuzz"}`);
    }
    else {
        console.log(`${i}`);
    }
}


// 04 : Somme des nombres pairs

const Y = Number(prompt(`Entrez un nombre:`))

let sommePaire = 0;

for (let i = 1; i <= Y; i++) {
    if (i % 2 == 0) {
        sommePaire += i;
    }
}
console.log(`${sommePaire}`)

// 05 : Deviner un nombre

const Z = Number(prompt("entrez un nombre "));

let nbreSecret = 10;

if (N < nbreSecret) {
    console.log("Trop pétit");
} else if (N > nbreSecret) {
    console.log("Trop grand");
}
else if (N == nbreSecret) {
    console.log("Bravo ! Tu as trouvé.");
}

// 06 : Jeu du mot de passe

let motDePass = "javascript";

let tentative = 0;

let accesAutorise = false

while (tentative < 3 && accesAutorise === false) {
    let Saisir = prompt("Saisissez le mot de passe: ");
    tentative++;

    if (Saisir === motDePass) {
        alert("Accès autorisé");
        accesAutorise = true;
    }
    else {
        alert("Mot de passe incorrect");
    }

}
if (accesAutorise === false)
    alert("Accès bloque");


// 07 : Menu d'une librairie

let choix = " ";

while (choix !== "q") {
    console.log("===== LIBRAIRIE =====");
    console.log("1 - Voir les livres");
    console.log("2 - Acheter un livre");
    console.log("3 - Voir mon panier");
    console.log("q - Quitter");

    choix = prompt("Votre choix : ");

    if (choix === "1") {
        console.log("Voici les livres disponibles.");
    }
    else if (choix === "2") {
        console.log("Quel livre voulez-vous acheter ?");
    }
    else if (choix === "3") {
        console.log("Voici votre panier");
    }
    else if (choix === "q") {
        console.log("Merci et à bientôt");
    }
    else {
        console.log("Option invalide");
    }
}