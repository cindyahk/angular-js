export class CounterService {
    numOfSetToActiveClicks : number = 0;
    numOfSetToInactiveClicks : number = 0;

    updateNumOfActiveClicks() {
        this.numOfSetToActiveClicks++;
        console.log("Active: " + this.numOfSetToActiveClicks);        
    }

    updateNumOfInactiveClicks() {
        this.numOfSetToInactiveClicks++;
        console.log("Inactive: " + this.numOfSetToInactiveClicks);
    }
}