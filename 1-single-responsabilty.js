// Single Responsabilty Principle
// criar uma classe para cada regra de negócio/responsabilidade

class WeightAdviser {
    constructor(user, weight) {
        this.user = user,
        this.weight = weight
    }
    
    adviser(expectedWeight) {
        if(this.weight >= expectedWeight) {
            // this.weightAlert()
            weightAlert(this.user)
        }
    }
      
/*     weightAlert() {
        console.log('Acima do peso');
    } */
}

function weightAlert(user) {
    console.log(`${user} está acima do peso`);
}

const wlad = new WeightAdviser('Wlad', 86)
wlad.adviser(86)
