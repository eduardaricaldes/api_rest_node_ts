import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cidades - Get by id",() => {

    it('Consultar id da cidade', async() => {
        const idUsuario = 1234
        const response =  await testServer.get(`/cidades/${idUsuario}`)
        expect(response.statusCode).toEqual(StatusCodes.OK)
        expect(response.body.id).toBe(idUsuario)
    });

     it('Deve retornar 400 quando id nao for numerico', async() => {
        const response =  await testServer.get('/cidades/abc')
        expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST)
        expect(response.body).toHaveProperty('errors.params.id');
    });

    it('Se id for igual a 123 deve retornar not found', async() => {
        const response =  await testServer.get('/cidades/123')
        expect(response.statusCode).toBe(StatusCodes.NOT_FOUND)
    });

});