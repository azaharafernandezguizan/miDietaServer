import { multiParser } from 'https://raw.githubusercontent.com/deligenius/multiparser/master/mod.ts';

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
  
let menus: Array<IMenu> = [
    {
        day: 'Lunes',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Carne a la plancha con bollito de pan e infusión'
            },
            {
                name: 'Comida',
                menu: 'Pescado al horno con ensalada de tomates y yogur'
            }
        ]
    },
    {
        day: 'Martes',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Carne a la plancha con bollito de pan e infusión'
            },
            {
                name: 'Comida',
                menu: 'Arroz con salmón y calabacín y yogur'
            }
        ]
    },
    {
        day: 'Miercoles',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Carne a la plancha con bollito de pan e infusión'
            },
            {
                name: 'Comida',
                menu: 'Carne con patatas cocidas y fruta'
            }
        ]
    },
    {
        day: 'Jueves',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Carne a la plancha con bollito de pan e infusión'
            },
            {
                name: 'Comida',
                menu: 'Ensalada cesar y yogur'
            }
        ]
    },
    {
        day: 'Viernes',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Carne a la plancha con bollito de pan e infusión'
            },
            {
                name: 'Comida',
                menu: 'Pasta carbonara y fruta'
            }
        ]
    },
    {
        day: 'Sabado',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Galletas e infusión'
            },
            {
                name: 'Comida',
                menu: 'Pizza casera y helado'
            }
        ]
    },
    {
        day: 'Domingo',
        meals: [
            {
                name: 'Desayuno',
                menu: 'Bizcocho de manzana y achicoria'
            },
            {
                name: 'Comida',
                menu: 'Empanada de atún y helado casero'
            }
        ]
    },
];
  

const getMenu = ({ response }: { response: any }) => { 
    response.body = menus 
  }

//   const addConditions = async ({ request, response }: { request: any; response: any }) => {
//     const body = await request.body();
//     console.log(body);
//     const body2 = await request.json();
//     console.log(body2);
//     //TODO: hacer lógica de buscar menú y crearlo.
//     response.body = { message: 'OK' }
//     response.status = 200
//   }

const addConditions = async (context: any) => {
    const formData = await context.request.body();
    console.log(formData);
    context.response.body = { message: 'OK' }
    context.response.status = 200;
  }

  export { getMenu, addConditions }