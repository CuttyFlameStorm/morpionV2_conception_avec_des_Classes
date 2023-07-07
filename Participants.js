class Participants {

  constructor() {  
  }

    constructor(nom, avatar, victoire, defaite) {
      this.nom= nom;
      this.avatar= avatar;
      this.victoire= victoire;
      this.defaite=defaite;
    }

    injecterDansTableauParticipant(tabParticipant){
      tabParticipant[0].push(this.nom);
      tabParticipant[1].push(this.avatar);
      tabParticipant[2].push(this.victoire);
      tabParticipant[3].push(this.defaite);
      
    }



  }

