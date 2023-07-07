class Inscription{
    
    constructor() {
        }
    
    constructor(Joueur1, Avatar1, Joueur2, Avatar2) {
      this.Joueur1=Joueur1;
      this.Avatar1=Avatar1;
      this.Joueur2=Joueur2;
      this.Avatar2=Avatar2;
    }

    injecterDansTableauScore(tabInscription){
      tabInscription[0].push(this.Joueur1);
      tabInscription[1].push(this.Avatar1);
      tabInscription[2].push(this.Joueur2);
      tabInscription[3].push(this.Avatar2);

      }


  }