import { Router } from "express"

import { CidadesController } from "../controllers";


const router = Router();

router.get('/cidades', 
    CidadesController.getallValidation,CidadesController.getAll);

router.post('/cidades', 
    CidadesController.createValidation,CidadesController.create);

router.get('/cidades/:id', 
    CidadesController.getByIdValidation,CidadesController.getById);

router.put('/cidades/:id', 
    CidadesController.updateByIdValidation,CidadesController.updateById); 

router.delete('/cidades/:id', 
    CidadesController.deletedValidation,CidadesController.deleteById);


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
