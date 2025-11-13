import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cidades - Update by id ",() => {

    it('atualizar id e nome valido', async() => {
      const resp =  await testServer
        .put("/cidades/1234")
        .send({
            nome:"Manaus"
        });
        
        expect(resp.statusCode).toEqual(StatusCodes.OK);
        expect(resp.body.message).toEqual("Manaus updated successfully")

    });

    it('Deve retornar 400 quando o campo estiver ausente', async() => {
      const idUsuario = 1234
      const resp =  await testServer
      .put(`/cidades/${idUsuario}`).send({nome:""});
        
        expect(resp.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    });

    it('Deve retornar 404 quando a rota nao existir ', async() => {
        const idUsuario = 1234
      const resp =  await testServer
      .put(`/xpto/${idUsuario}`).send({nome:""});
        
        expect(resp.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });

    it('Deve retornar 400 quando for passado ID nao for numerico', async() => {
      const resp =  await testServer
      .put(`/cidades/abc`).send({nome:"Florianopolis"});
        
        expect(resp.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(resp.body.errors.params.id).toEqual('Formato digitado é invalido');

    });

     it('Deve retornar 404 quando o item nao for encontrado', async() => {
      const resp =  await testServer
      .put(`/cidades/123`).send({nome:"Florianopolis"});
        
        expect(resp.statusCode).toEqual(StatusCodes.NOT_FOUND);

    });
  
});