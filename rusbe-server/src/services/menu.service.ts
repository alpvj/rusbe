import Router from 'express';
import {MenuApi} from './menuAPI.service';

const menuService = Router();
const api = new MenuApi();

menuService.get('/menu/food',async(req,res)=>{
    res.send(api.getDailyMenu());
})

export default menuService