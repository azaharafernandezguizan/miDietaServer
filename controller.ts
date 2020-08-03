import {IMenu, IReceivedConditions} from './models.ts';
import {formMealsMenu, getMenusCreated} from './service.ts'



let menus: IMenu[];

const getMenu = ({ response }: { response: any }) => { 
    response.body = getMenusCreated(); 
}

const addConditions = async ({ request, response} 
    : {request: any, response:any}) =>{
        const body = await request.body();

        if (!request.hasBody) {
            response.status = 400
            response.body = {
                success: false,
                message: 'KO'
            }
        } else {
            const result = request.body({ type: "json" });
            const conditions = await result.value as IReceivedConditions;
         
            formMealsMenu(conditions);

            response.status = 201
            response.body = {
                success: true,
                message: 'OK'
            }
        }
        
}



export { getMenu, addConditions }