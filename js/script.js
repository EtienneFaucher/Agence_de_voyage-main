// Notre "Base de donnée". Les destinations puis les utilisateurs.
let destinations = [
  { ville: "Tokyo", prix:"50", image: "../Images/Tokyo.jpg", video:" https://www.youtube.com/embed/-SL9KRvzVmo", description: "Tokyo, la plus grande mégalopole au monde,compte parmi les destinations uniques, où les voyageurs communienttant avec la technologie qu'avec la nature et les traditions ancestrales. Tokyo la magnétique, au pays du Soleil Levant, offre un cocktail de saveurs et de sensations, au goût implosif et singulier.", continent: "asie" },
  { ville: "Melbourne", prix:"30", image: "../Images/Melbourne.jpg", video:"https://www.youtube.com/embed/rGNdcEdOuMY", description: "La ville colorée et pleine de vie de Melbourne a dequoi plaire à tous les types de voyageurs, entre ses cafés confortables, son art local, l'histoire australienne et aborigène jusqu'aux divers sports auxquels assister. Commencez votre journée avec un « flat white » (sorte de café latte à base d'espresso) avant d'emprunter gratuitement le City Circle Tram pour découvrir des attractions singulières comme les jardins botaniques royaux et la réserve de Healesville où vous attendent de nombreux animaux.</", continent: "australie" },
  { ville: "Venise", prix:"30" , image: "../Images/Venise.jpg",video:"https://www.youtube.com/embed/JphHw6iU4m8", description: "Venise est une ville enchanteresse qui envoute ses visiteurs par son charme incroyable. C'est un lieu de rêve et de romantisme où se mêlent le mystère et le drame. Et si le Carnaval n'a lieu qu'une fois par an, son ambiance est présente tout au long de l'année. Le Grand Canal est le centre de l'activité, les gondoliers chantant pour les passagers installés dans leurs petites embarcations.", continent: "europe" },
  { ville: "Dubai", prix:"30", image: "../Images/Dubai.jpeg", description: "Le plus grand… Le plus haut… Le plus long… Les superlatifs finissent par manquer pour décrire les attractions de Dubaï, une ville qui se distingue par son design ultra-moderne dans un pays historiquement conservateur. Les gratte-ciel vertigineux, les îles en forme de palmiers et les plages dorées, la vie nocturne vibrante, le shopping de luxe et les restaurants de classe mondiale font de la ville un endroit à contempler et à explorer.", continent:"asie" },
  { ville: "Hawaii",  prix:"30", image: "../Images/Hawaii.jpg", description: "À Hawaii les forces brutes de la nature semblent s'être conjuguées pour former le plus beau décor du monde. Les volcans, nés des profondeurs de l’océan, ont façonné les îles une à une, projetant encore aujourd’hui leur magma incandescent en fontaines ou en coulées rougeoyantes. Réplique de l’apparition de la vie sur terre.", continent: "amerique" },
  { ville: "Florence", prix:"30", image: "../Images/Florence.jpg", description: "Florence fait battre le cœur des amateurs d'art. Si vous aimez particulièrement la période de la Renaissance, la Galleria dell'Accademia vous fera tourner la tête, avec notamment de nombreuses œuvres de Michel-Ange. Les fanas d'architecture pourront admirer l'antique Ponte Vecchio, tandis que les amateurs de lèche-vitrines pourront se régaler à courir les boutiques de la Piazza Santo Spirito pendant tout un après-midi.", continent: "europe" }
];

let baseDonnees = [
  { user: "Tokyo", psw:"50"},
  { user: "etienne", psw:"coucou"},
  { user: "silia", psw:"kawai"},
  { user: "gregory", psw:"morel"},
  { user: "site", psw:"web"},
  { user: "givors", psw:"mama"}
];

//Fonction Filtre des destinations. 
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

// Template
 let template = document.querySelector("#listeDestinations");

for (const d of destinations) {					
    let clone = document.importNode(template.content, true);     

    newContent = clone.firstElementChild.innerHTML	
        .replace(/{{ville}}/g, d.ville)				
        .replace(/{{image}}/g, d.image)
        .replace(/{{description}}/g, d.description)				
        .replace(/{{continent}}/g, d.continent)

        clone.firstElementChild.innerHTML = newContent

        clone.firstElementChild.setAttribute("class", "filterDiv " + d.continent);
     
        clone.firstElementChild.firstElementChild.style.backgroundImage="url('"+d.image+"')",		
        
    document.body.appendChild(clone);
    
    
}

//Fonction qui affiche le nom de la ville que la personne veut réserver.
function reservez() {

  u = new window.URLSearchParams(window.location.search)
  //récupère la destination choisie
  const ville = u.get("destination");
  //Change l'intitulé de la page.
  let txtrecap = document.getElementById("dest")
  txtrecap.innerHTML = "Votre voyage pour " + ville ;
  }
  
  function pres() {
  let presville = document.getElementById("ville")
  presville.innerHTML = VILLE
  }

// Demande la ville de départ pour ajuster les voyages (prix, destination). 
//Enlevée car dégrade l'experience utilisateur (Fonction jamais appelée)
function ville_depart() {
  const depart=prompt("De quelle ville venez vous ?");
  let dest=document.getElementById('destination');
  dest.innerHTML= "Nos destination au départ de " + depart + ' !';
}

//Fonction météo avec l'utilisation de l'API OpenWeatherMap
var n=0
var appliAPI = function(data) {
  var element = document.getElementsByClassName("zone_meteo");
  var zone = element[n]
  n=n+1
  zone.innerHTML = "La temperature actuelle est de " + data.main.temp + " °C";

}

function appelAPI() {
  //Boucle pour appeler la fonction à chaque ville.
  filterSelection("all");

  for (var i in destinations){
    ville = new Array(destinations[i].ville)
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"
    
    //utilisation de Jquery
    $.get(url, appliAPI).done(function() {
    })
    .always(function() {
      

    });
}
}

//Calcul du prix du voyage
function calcul(nb_adulte,nb_enfant,depart,retour,prix,dej){
  
  //duree du voyage
  d=depart.getDate()
  r=retour.getDate()
  duree=r-d

  //calcul du prix
  prix= (nb_adulte*prix+nb_enfant*(prix*0.4))*duree;

  var dej = document.getElementsByName('user_breakfast')
  
  if(dej[0].checked){
    prix=prix+ (12*(nb_adulte+nb_enfant))*duree
  }

  return prix
}

//Affichage du prix du voyage dans le formulaire de reservation
 function change() {
  //on récupère les elements du formulaire
  const nb_adulte = document.getElementById('adults').value;
  const nb_enfant = document.getElementById('kids').value;
  const depart =document.getElementById('departure').valueAsDate
  const retour =document.getElementById('return').valueAsDate  
  const dej= document.getElementsByName('dej');
  un = new window.URLSearchParams(window.location.search)
  
  const ville2 = un.get("destination");
  console.log(ville2)

  for (i=0; i< destinations.length; i++){
    if (destinations[i].ville==ville2) {
      prix=destinations[i].prix
    }
  }
  console.log(prix)
  //On vérifie que les dates sont valides
  if (depart>retour) {
    alert("La date de retour doit être superieur à la date d'arrivée")
    retour.innerHTML = ""
  }
  //on récupère le résultat du calcul
  price= calcul(nb_adulte,nb_enfant,depart,retour,prix,dej)

//on affiche le prix
  let aff_prix = document.getElementById('prix');
  aff_prix.innerHTML = "Le prix est maintenant de " + price+ "€";
}


//Fonction de connexion. Teste les mot de passe avec des conditions.
function hello() {
  const username = document.getElementById('coname').value;
  const password = document.getElementById('copass').value;
  condition = false;

  for (i=0; i< baseDonnees.length; i++){
    if (baseDonnees[i].user==username && baseDonnees[i].psw==password) {
      const connexion = document.getElementById("bonjour")
      connexion.innerHTML = "Bonjour "+ username + " !"
      connexion.style.color = "white"
      connexion.style.padding = "1em"
      connexion.style.fontWeight = "500"
      connexion.style.textShadow ="rgb(250, 250, 250) 1px 0 10px"
      condition = true;
      break
    } 
  }

  if (condition == false) {
    alert("Mot de passe incorrect")
  }
  
}

//Fonction qui récapitule les données utilisateur pour qu'il les vérifient avant de payer.
function recap() {
  u = new window.URLSearchParams(window.location.search)

  const nb_adulte = u.get("user_adults");
  const nb_enfant = u.get("user_kids");
  const nom = u.get("user_name");
  const num_reserv= 1000*Math.random()

  let txtrecap = document.getElementById("recap")
  txtrecap.innerHTML = "Bonjour M. ou Mme " + nom + "! <br\> Vous souhaitez réserver un voyage pour " + nb_adulte + " adultes, et " + nb_enfant +" enfants. <br\> Votre numero de reservation est le : " + num_reserv+ "<br\>Profitez de votre voyage !! ";
  }
  
  /// Fonction permettant d'afficher une video au survol de la ville, et de nous envoyer vers la page de reservation de la ville.
  ///Nous n'avons pas eu le temps de finir cette fonction, la soucre n'est pas modifiée selon la ville. C'est donc toujours la meme video qui s'afffiche. 
  function entreSVG(city, element) {
    document.getElementById(element).setAttribute("fill","#b95353");
    document.getElementById("video").hidden=false
    for (var i in destinations){
      if (destinations[i].ville==city){
        source = destinations[i].video
      }
    }
    document.getElementById("video").src= source + "autoplay=1"
    
  }
  
  function sortSVG(element) {
    document.getElementById(element).setAttribute("fill","#130e3b"); 
    document.getElementById("video").hidden=true

  }

  function cliqueImage(city){
    document.location.href="Reservation.html?destination=" + city; 
  }