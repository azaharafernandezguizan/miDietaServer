import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getMenu, addConditions } from './controller.ts'

const router = new Router()
router.get('/menu', getMenu)
      .post('/conditions', addConditions)



export default router