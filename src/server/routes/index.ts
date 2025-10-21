import { Router } from "express"

import { CidadesController } from "../controllers";


const router = Router();

router.post('/cidades', CidadesController.create);


router.get('/', (req, res)=> {
    console.log(req.body);

    return res.json('kadu guei');
}); 

export {router}








// res.json - para tratar melhor o que e passado para o front

/**
 * params para passar um parametro para rota (/:id)
 * router.post('/teste/:id', (req, res)=> {

    return res.send(req.params.id);
});
 */

// outra forma e utilizar do query (?)
/**
 * router.post('/teste/?teste=123', (req, res)=> {

    return res.send(req.query.teste);
});

geralmente passamos na url
 */

//cookies
/**
 * 
 */
