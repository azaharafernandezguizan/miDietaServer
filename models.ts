interface IMenu {
    day: string;
    meals: IMeal[];
  }

interface IMeal {
    name:string;
    menu:string;
}

interface IReceivedConditions{
    numberOfMeals : number;
    numberOfFruits: number;
    numberOfProcessedFood: number;
}

interface ISuggestedFood {
    mealOptionName : string,
    options: string[]
}


export{IMenu, IMeal, IReceivedConditions, ISuggestedFood}