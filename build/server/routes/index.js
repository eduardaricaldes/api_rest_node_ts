"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/cidades', controllers_1.CidadesController.getallValidation, controllers_1.CidadesController.getAll);
router.post('/cidades', controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create);
router.get('/cidades/:id', controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById);
router.put('/cidades/:id', controllers_1.CidadesController.updateByIdValidation, controllers_1.CidadesController.updateById);
router.delete('/cidades/:id', controllers_1.CidadesController.deletedValidation, controllers_1.CidadesController.deleteById);
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
//# sourceMappingURL=index.js.map