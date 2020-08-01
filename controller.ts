import {IMenu, IReceivedConditions} from './models.ts';
import {formMealsMenu, getMenusCreated} from './service.ts'



let menus: IMenu[];

const getMenu = ({ response }: { response: any }) => { 
    response.body = getMenusCreated(); //TODO: pendiente de comprobar que funcione bien
}

const addConditions = async (context: any) => {
    const formData = await context.request.body() as IReceivedConditions;
    formMealsMenu(formData); //TODO: pendiente de comprobar que funcione bien
    context.response.body = { message: 'OK' };
    context.response.status = 200;
}



export { getMenu, addConditions }