import {mealOptions} from './data.ts';
import {IMenu, IMeal, IReceivedConditions, ISuggestedFood} from './models.ts';

let saturdayDessert: ISuggestedFood;
let sundayDessert: ISuggestedFood;
let weekendBreakfast: ISuggestedFood;
let dinnerOptions : ISuggestedFood;
let menus: IMenu[];
let allFoodData = mealOptions as ISuggestedFood[];

const formMealsMenu = (receivedOptions? : IReceivedConditions) =>{
    menus = [
        {
            day: 'Lunes',
            meals: getMealsForDay('lunes', 0, receivedOptions)
        },
        {
            day: 'Martes',
            meals: getMealsForDay('martes', 1, receivedOptions)
        },
        {
            day: 'Miercoles',
            meals: getMealsForDay('miercoles', 2, receivedOptions)
        },
        {
            day: 'Jueves',
            meals: getMealsForDay('jueves', 3, receivedOptions)
        },
        {
            day: 'Viernes',
            meals: getMealsForDay('viernes', 4, receivedOptions)
        },
        {
            day: 'Sabado',
            meals: getMealsForDay('sabado', 5, receivedOptions)
        },
        {
            day: 'Domingo',
            meals: getMealsForDay('domingo', 6, receivedOptions)
        },
    ]
}

const getMealsForDay = (currentDay: string, numberOfDayOnWeek: number,receivedOptions? : IReceivedConditions) =>{
    initializeMeals();
    let selectedMeals: IMeal[] = [];
    let principalMealOptions : ISuggestedFood = allFoodData.filter( x=> x.mealOptionName.toLowerCase() === currentDay.toLowerCase())[0];

    let numberRandom : number = Math.floor(Math.random() * 4);
  
    let breakfast: string = "";
    if(numberOfDayOnWeek < 5){
        breakfast = "Carne de ternera o pollo a la plancha con pan tostado e infusión";
    }
    else {
        breakfast = weekendBreakfast.options[numberRandom];
    };
    selectedMeals.push({
        name: 'Desayuno',
        menu: breakfast
    });


    let lunch : string= principalMealOptions.options[numberRandom];
    lunch += getDessert(numberOfDayOnWeek, numberRandom, receivedOptions);
    selectedMeals.push({
        name: 'Comida',
        menu: lunch
    });

    
    if(receivedOptions!= null && receivedOptions.numberOfMeals > 2){
        let dinner: string = dinnerOptions.options[numberOfDayOnWeek];
        selectedMeals.push({
            name:'Cena',
            menu:dinner
        });
    }

    return selectedMeals;

}

const initializeMeals =() =>{
    if(saturdayDessert == null){
        saturdayDessert= allFoodData.filter( x=> x.mealOptionName.toLowerCase() === 'frutas')[0];
    }
    if(sundayDessert == null){
        sundayDessert= allFoodData.filter( x=> x.mealOptionName.toLowerCase() === 'postres dulces')[0];
    }
    if(weekendBreakfast == null){
        weekendBreakfast= allFoodData.filter( x=> x.mealOptionName.toLowerCase() === 'desayunos dulces')[0];
    }
    if(dinnerOptions == null){
        dinnerOptions= allFoodData.filter( x=> x.mealOptionName.toLowerCase() === 'cenas')[0];
    }
}

const getDessert = (numberDayOfWeek: number, randomNumber: number, receivedOptions? : IReceivedConditions ) =>{
        let selectedDessert: string = "";
        if(receivedOptions != null && receivedOptions.numberOfFruits > 1 && (numberDayOfWeek == 0 || numberDayOfWeek == 2)){
          selectedDessert = " y compota de fruta";
        } else if(numberDayOfWeek < 5){
            selectedDessert = " y yogur";
        } else if(numberDayOfWeek == 5){
            selectedDessert= " y "+ saturdayDessert.options[randomNumber];
        } else {
            selectedDessert= " y "+ sundayDessert.options[randomNumber];
        }
        return selectedDessert;
}

const getMenusCreated = () =>{
    if(menus == null || menus.length == 0){
        formMealsMenu(undefined);
    }
    return menus;
}

export {formMealsMenu, getMenusCreated}