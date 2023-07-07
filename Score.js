class Score {

    constructor() {  
    }
  
      constructor(score) {
        this.score= score;
      }
  
      injecterDansTableau(tableau) {
        tableau.push(this.score);
      }
  
    }
  