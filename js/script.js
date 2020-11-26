class Destination {
  constructor(nom, prix_adulte, prix_enfant, prix_dej,description) {
    this.nom = nom;
    this.adultes = prix_adulte;
    this.enfant = prix_enfant;
    this.dej = prix_dej;
    this.description = description
  }
  
  get retour() {
      return [this.adultes,this.enfant,this.description]
  }
  
  
}

var tokyo = new Destination("Tokyo",50,30,9,"lorem  ")
var dubai = new Destination("Dubai",50,30,9,"lorem")
var venise = new Destination("Venise",50,30,9,"lorem")
var melbourne = new Destination("Melbourne",50,30,9,"lorem")

function ville_depart() {
  const depart=prompt("De quelle ville venez vous ?");
  console.log(depart)
  let dest=document.getElementById('destination');
  dest.innerHTML= "Nos destination au départ de " + depart + ' !';
  console.log(dest)
}

function calcul(nb_adulte,nb_enfant){
  a=tokyo.retour;
  prix= nb_adulte*a[0]+nb_enfant*a[1];
  return prix
}
function hello(){
  const username = document.getElementById('coname')
  const password = document.getElementById('copass')
  if (username=="etienne" && password=="coucou" || username=="silia" && password=="" || username=="prof" && password=="CeSiteEstMagnifiqueLesEtudiantsMeritentUneTresBonneNote"){
    const connexion = document.getElementById("bonjour")
    connexion.innerHTML = "Bonjour "+ username + " !"
    console.log("oui")}
  else {console.log("non")}
}
function change() {
  console.log("coucou")
  const nb_adulte = document.getElementById('adults').value;
  const nb_enfant = document.getElementById('kids').value;
  

  price= calcul(nb_adulte,nb_enfant)


  let aff_prix = document.getElementById('prix');
  aff_prix.innerHTML = "Le prix est maintenant de " + price+ "€";
}

function recap() {
console.log("recap")
u = new window.URLSearchParams(window.location.search)

const nb_adulte = u.get("user_adults");
const nb_enfant = u.get("user_kids");
const nom = u.get("user_name");

let txtrecap = document.getElementById("recap")
txtrecap.innerHTML = "Bonjour M. ou Mme " + nom + "! Vous souhaitez réserver un voyage pour " + nb_adulte + " adultes, et " + nb_enfant +" enfants. Profitez de votre voyage !! ";
}

function reservez() {

u = new window.URLSearchParams(window.location.search)

const ville = u.get("destiantion");


let txtrecap = document.getElementById("dest")
txtrecap.innerHTML = "Votre voyage pour " + ville ;
}

function pres() {
console.log("ville")
let presville = document.getElementById("ville")
presville.innerHTML = VILLE
}



let destinations = [
  { ville: "Tokyo", image: "../Images/Tokyo.jpg", description: "Description de Tokyo", continent: "asie" },
  { ville: "Melbourne", image: "../Images/Melbourne.jpg", description: "Description de Melbourne", continent: "australie" },
  { ville: "Venise", image: "../Images/Venise.jpg", description: "Description de Venise", continent: "europe" },
  { ville: "Dubai", image: "../Images/Dubai.jpeg", description: "Description de Dubai", continent:"asie" },
  { ville: "Hawaii", image: "../Images/Hawaii.jpeg", description: "Description de Hawaii", continent: "amerique" },
  { ville: "Florence", image: "../Images/Florence.jpeg", description: "Description de Florence", continent: "europe" }
];

 let template = document.querySelector("#listeDestinations");

for (const d of destinations) {					// itère sur le tableau
    let clone = document.importNode(template.content, true);      // clone le template

    newContent = clone.firstElementChild.innerHTML		// remplace {{modèle}}
        .replace(/{{ville}}/g, d.ville)				// et {{couleur}} par
        .replace(/{{image}}/g, d.image)
        .replace(/{{description}}/g, d.description)				// leur valeur
        .replace(/{{continent}}/g, d.continent)

    clone.firstElementChild.innerHTML = newContent		

    document.body.appendChild(clone);				// On ajoute le clone créé
}




