class Item {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
    aumenterPrix(differencePrix){
        this.prix += differencePrix;
    }
    diminuerPrix(differencePrix){
        this.prix -= differencePrix;
    }
}

class Commande {
    constructor(item, quantite){
        this.item = item;
        this.quantite = quantite;
    }
    augmenterQuantite(differenceQuantite){
        this.quantite += 1;
    }
    diminuerQuantite(differenceQuantite){
        this.quantite -= 1;
    }
    prixTotal(){
        return this.item.prix * this.quantite;
    }
}
class Adresse{
    constructor(numeroPorte, rue, ville, codePostal, province){
        this.numeroPorte = numeroPorte;
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
        this.province = province;
    }
    modifierAdresse(nouveauNumeroPorte, nouvelleRue, nouvelleVille,nouveauCodePostal,
        nouvelleProvince){
            this.numeroPorte = nouveauNumeroPorte;
            this.rue = nouvelleRue;
            this.ville = nouvelleVille;
            this.codePostal = nouveauCodePostal;
            this.province = nouvelleProvince;
        }
}
class Client{
    constructor(nom,prenom,adresse,telephone,courriel){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.courriel = courriel;
        this.commandes = [];
    }
    modifierAdresse(nouvelleAdresse){
        this.adresse = nouvelleAdresse;
    }
    modifierTelephone(nouveauNumero){
        this.telephone = nouveauNumero;
    }
    ajouterCommande(nouvelleCommande){
        this.commandes.push(nouvelleCommande);
    }
    coutTotalDesCommandes(){
        var resultat = 0;
        function somme(commande)
        {
            resultat += commande.prixTotal();
        }
        this.commandes.forEach(somme);
        return resultat;
    }
}
class ClientPrivilege extends Client{
    constructor(nom,prenom,adresse,telephone,courriel,rabais){
        super(nom,prenom,adresse,telephone,courriel);
        this.rabais = rabais;
    }
    coutTotalDesCommandes(){
        var resultat = 0;
        function somme(commande)
        {
            resultat += commande.prixTotal();
        }
        this.commandes.forEach(somme);
        resultat = resultat * (1-this.rabais);
        return resultat;
    }
}

//Creation du client
adresse = new Adresse("1547","Girouard","Saint-Hyacinthe","J2S7P9","QC");
client = new Client("Noiseux","Felix",adresse,"4502521964","rap.felix@hotmail.com");

//Item dans le panier
ballon = new Item("Ballon",50);
batton = new Item("Baton", 10);

//Creation de la commande
commande = new Commande(ballon,2);
commande2 = new Commande(batton,1);
//Ajout de la commande au panier du client
client.ajouterCommande(commande);
client.ajouterCommande(commande2);
//Afficher cout total des commandes
console.log(client.coutTotalDesCommandes());