import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cidades - Delete by id ",() => {

    it('Deve retornar 204 se o id foi excluido com sucesso', async() => {
      const idDelete = 12345  

      const test =  await testServer .post("/cidades")
        .send({
            nome:"Manaus"
        });expect(test.statusCode).toEqual(StatusCodes.CREATED);

      const resp =  await testServer
      .delete(`/cidades/${idDelete}`)
        expect(resp.statusCode).toEqual(StatusCodes.NO_CONTENT);
        expect(resp.body).toEqual({})
        expect(resp.text).toEqual('')

    });

    it('Deve retornar 400 se o id for incorreto', async() => {
      const resp =  await testServer
        .delete(`/cidades/abc`)
        
        expect(resp.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(resp.body.errors.params.id).toEqual('Formato digitado é invalido')

    });

      it('Deve retornar 404 se tentar deletar id inexistente', async() => {
      const resp =  await testServer
        .delete(`/cidades/1234`)
        
        expect(resp.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(resp.text).toEqual('')
    });
});


it(" apagar registro por ID ", async () => {

    const postResp = await testServer.post("/cidades").send({
      nome: "Manaus",
    });
    expect(postResp.statusCode).toEqual(StatusCodes.CREATED);

    const createdId = postResp.body.id
    const deletResp = (await testServer.delete(`/cidades/${createdId}`).send());
    expect(deletResp.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });