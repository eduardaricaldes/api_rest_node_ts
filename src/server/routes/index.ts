import { Router } from "express"
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.post('/teste', (req, res)=> {

    console.log(req)
    return res.status(StatusCodes.CREATED).json(req.body);
});


router.get('/teste', (req, res)=> {
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
