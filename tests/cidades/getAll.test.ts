import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cidades - Get all ",() => {

    it('deve aceitar sem query (defauts page = 1, limit=10', async() => {
      const resp =  await testServer
        .get("/cidades")  
        expect(resp.statusCode).toEqual(StatusCodes.ACCEPTED);
        expect(resp.body.page).toEqual(1);
        expect(resp.body.limit).toEqual(10);
        expect(resp.body.filter).toEqual("");
    });

    it('deve rejeitar parametros extras nao permitidos', async() => {
      const expectedNotAllowedKeys = ["sort", "xpto"];
      const resp =  await testServer
        .get("/cidades?sort=asc&xpto=123&page=12")  
        expect(resp.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(resp.body.errors.query).toEqual(`${expectedNotAllowedKeys.join(",")} não permitidos`);
    });

    it('deve buscar todos os registros', async() => {
      const resp =  await testServer
        .post("/cidades").send({nome:"Floripa"});

        expect(resp.statusCode).toEqual(StatusCodes.CREATED)

      const respBuscar = await ( testServer.get("/cidades").send());


        expect (Number(respBuscar.header['x-total-count'])).toBeGreaterThan(0);
        expect(respBuscar.statusCode).toEqual(StatusCodes.ACCEPTED);
        expect(respBuscar.body.cities.length).toBeGreaterThan(0);
    });
 
});
 
