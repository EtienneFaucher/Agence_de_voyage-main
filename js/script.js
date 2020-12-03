
//Fonction Filtre des destinations

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

 
let destinations = [
  { ville: "Tokyo", image: "../Images/Tokyo.jpg", description: "Tokyo, la plus grande mégalopole au monde,compte parmi les destinations uniques, où les voyageurs communienttant avec la technologie qu'avec la nature et les traditions ancestrales. Tokyo la magnétique, au pays du Soleil Levant, offre un cocktail de saveurs et de sensations, au goût implosif et singulier.", continent: "asie" },
  { ville: "Melbourne", image: "../Images/Melbourne.jpg", description: "La ville colorée et pleine de vie de Melbourne a dequoi plaire à tous les types de voyageurs, entre ses cafés confortables, son art local, l'histoire australienne et aborigène jusqu'aux divers sports auxquels assister. Commencez votre journée avec un « flat white » (sorte de café latte à base d'espresso) avant d'emprunter gratuitement le City Circle Tram pour découvrir des attractions singulières comme les jardins botaniques royaux et la réserve de Healesville où vous attendent de nombreux animaux.</", continent: "australie" },
  { ville: "Venise", image: "../Images/Venise.jpg", description: "Venise est une ville enchanteresse qui envoute ses visiteurs par son charme incroyable. C'est un lieu de rêve et de romantisme où se mêlent le mystère et le drame. Et si le Carnaval n'a lieu qu'une fois par an, son ambiance est présente tout au long de l'année. Le Grand Canal est le centre de l'activité, les gondoliers chantant pour les passagers installés dans leurs petites embarcations.", continent: "europe" },
  { ville: "Dubai", image: "../Images/Dubai.jpeg", description: "Le plus grand… Le plus haut… Le plus long… Les superlatifs finissent par manquer pour décrire les attractions de Dubaï, une ville qui se distingue par son design ultra-moderne dans un pays historiquement conservateur. Les gratte-ciel vertigineux, les îles en forme de palmiers et les plages dorées, la vie nocturne vibrante, le shopping de luxe et les restaurants de classe mondiale font de la ville un endroit à contempler et à explorer.", continent:"asie" },
  { ville: "Hawaii", image: "../Images/Hawaii.jpg", description: "À Hawaii les forces brutes de la nature semblent s'être conjuguées pour former le plus beau décor du monde. Les volcans, nés des profondeurs de l’océan, ont façonné les îles une à une, projetant encore aujourd’hui leur magma incandescent en fontaines ou en coulées rougeoyantes. Réplique de l’apparition de la vie sur terre.", continent: "amerique" },
  { ville: "Florence", image: "../Images/Florence.jpg", description: "Florence fait battre le cœur des amateurs d'art. Si vous aimez particulièrement la période de la Renaissance, la Galleria dell'Accademia vous fera tourner la tête, avec notamment de nombreuses œuvres de Michel-Ange. Les fanas d'architecture pourront admirer l'antique Ponte Vecchio, tandis que les amateurs de lèche-vitrines pourront se régaler à courir les boutiques de la Piazza Santo Spirito pendant tout un après-midi.", continent: "europe" }
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

        clone.firstElementChild.setAttribute("class", "filterDiv_" + d.continent);
     
        clone.firstElementChild.firstElementChild.style.backgroundImage="url('"+d.image+"')",		
        
    document.body.appendChild(clone);				
}

//document.getElementsByClassName("continent")[0].setAttribute("class", {{continent}}); ---- ça ne donne pas à chaque destination sa classe


        /*document.getElementById("par").style.color = "blue";
        document.getElementById("par").style.backgroundImage = "url('../Images/Dubai.jpeg')"; ----- ça ne change que le style de la première template */




//Fonction qui affiche le nom de la ville que la personne veut réserver.
function reservez() {

  u = new window.URLSearchParams(window.location.search)
  
  const ville = u.get("destination");
  
  console.log(ville)
  let txtrecap = document.getElementById("dest")
  txtrecap.innerHTML = "Votre voyage pour " + ville ;
  }
  
  function pres() {
  console.log("ville")
  let presville = document.getElementById("ville")
  presville.innerHTML = VILLE
  }
  
  
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


// Demande la ville de départ pour ajuster les voyages (prix, destination). 
//Enlevée car dégrade l'experience utilisateur. 
function ville_depart() {
  const depart=prompt("De quelle ville venez vous ?");
  console.log(depart)
  let dest=document.getElementById('destination');
  dest.innerHTML= "Nos destination au départ de " + depart + ' !';
  console.log(dest)
}
//Fonction météo avec l'utilisation de l'API OpenWeatherMap
var callBackGetSuccess = function(data) {
  var element = document.getElementById("zone_meteo");
  element.innerHTML = "La temperature est de " + data.main.temp + "°C";
  
}

function buttonClickGET() {
  var ville = document.getElementById("titre").innerHTML;
 
  

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
    })
    .always(function() {
    });
}

//Calcul du prix du voyage
function calcul(nb_adulte,nb_enfant){
  
  prix= nb_adulte*50+nb_enfant*20;
  return prix
}
//Affichage du prix du voyage dans el formulaire de reservation
function change() {
  
  const nb_adulte = document.getElementById('adults').value;
  const nb_enfant = document.getElementById('kids').value;
  
  price= calcul(nb_adulte,nb_enfant)


  let aff_prix = document.getElementById('prix');
  aff_prix.innerHTML = "Le prix est maintenant de " + price+ "€";
}

//Fonction de connexion. Teste les mot de passe avec des conditions.
function hello(){
  console.log("hello")
  const username = document.getElementById('coname').value;
  const password = document.getElementById('copass').value;
  console.log(username,password)
  if (username=="etienne" && password=="coucou" || username=="silia" && password=="" || username=="prof" && password=="CeSiteEstMagnifiqueLesEtudiantsMeritentUneTresBonneNote"){
    const connexion = document.getElementById("bonjour")
    connexion.innerHTML = "Bonjour "+ username + " !"
    console.log("oui")}
  else {
    console.log("non")
    alert("Mauvais mot de passe")
}
  
}

//Fonction qui récapitule les données utilisateur pour qu'il les vérifient avant de payer.
function recap() {
console.log("recap")
u = new window.URLSearchParams(window.location.search)

const nb_adulte = u.get("user_adults");
const nb_enfant = u.get("user_kids");
const nom = u.get("user_name");

let txtrecap = document.getElementById("recap")
txtrecap.innerHTML = "Bonjour M. ou Mme " + nom + "! Vous souhaitez réserver un voyage pour " + nb_adulte + " adultes, et " + nb_enfant +" enfants. Profitez de votre voyage !! ";
}




