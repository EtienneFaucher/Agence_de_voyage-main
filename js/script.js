class Destination {
    constructor(nom, prix_adulte, prix_enfant, prix_dej) {
      this.nom = nom;
      this.adultes = prix_adulte;
      this.enfant = prix_enfant;
      this.dej = prix_dej;
    }
    
    get retour() {
        return [this.adultes,this.enfant]
    }
    
    
  }

var tokyo = new Destination("Tokyo",50,30,9)
var dubai = new Destination("Dubai",50,30,9)
var venise = new Destination("Venise",50,30,9)
var melbourne = new Destination("Melbourne",50,30,9)

function calcul(nb_adulte,nb_enfant){
    a=tokyo.retour;
    prix= nb_adulte*a[0]+nb_enfant*a[1];
    return prix
}

function change() {
    console.log("coucou")
    const nb_adulte = document.getElementById('adults').value;
    const nb_enfant = document.getElementById('kids').value;
    

    price= calcul(nb_adulte,nb_enfant)


    let aff_prix = document.getElementById('prix');
    aff_prix.innerHTML = "Le prix est maintenant de " + price+ "€";
}


