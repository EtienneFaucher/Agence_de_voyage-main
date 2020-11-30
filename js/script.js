filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

  
/*let destinations = [
  { ville: "Tokyo", image: "../Images/Tokyo.jpg", description: "Description de Tokyo", continent: "asie" },
  { ville: "Melbourne", image: "../Images/Melbourne.jpg", description: "Description de Melbourne", continent: "australie" },
  { ville: "Venise", image: "../Images/Venise.jpg", description: "Description de Venise", continent: "europe" },
  { ville: "Dubai", image: "../Images/Dubai.jpeg", description: "Description de Dubai", continent:"asie" },
  { ville: "Hawaii", image: "../Images/Hawaii.jpeg", description: "Description de Hawaii", continent: "amerique" },
  { ville: "Florence", image: "../Images/Florence.jpeg", description: "Description de Florence", continent: "europe" }
];

 let template = document.querySelector("#listeDestinations");

for (const d of destinations) {					
    let clone = document.importNode(template.content, true);     

    newContent = clone.firstElementChild.innerHTML	
        .replace(/{{ville}}/g, d.ville)				
        .replace(/{{image}}/g, d.image)
        .replace(/{{description}}/g, d.description)				
        .replace(/{{continent}}/g, d.continent)

        
    
        clone.firstElementChild.innerHTML = newContent		
        
    document.body.appendChild(clone);				
}

document.getElementsByClassName("continent")[0].setAttribute("class", {{continent}}); ---- ça ne donne pas à chaque destination sa classe


        /*document.getElementById("par").style.color = "blue";
        document.getElementById("par").style.backgroundImage = "url('../Images/Dubai.jpeg')"; ----- ça ne change que le style de la première template */




  
  
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

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
var callBackGetSuccess = function(data) {
  var element = document.getElementById("zone_meteo");
  element.innerHTML = "La temperature est de " + data.main.temp + "°C";
  console.log(element)
}


function buttonClickGET() {
  var ville = document.getElementById("titre").innerHTML;
 
  console.log(ville)

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
    })
    .always(function() {
      //alert( "finished" );
    });
}

function calcul(nb_adulte,nb_enfant){
  a=tokyo.retour;
  prix= nb_adulte*a[0]+nb_enfant*a[1];
  return prix
}
function hello(){
  console.log("hello")
  const username = document.getElementById('coname').innerHTML;
  const password = document.getElementById('copass').innerHTML;
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


