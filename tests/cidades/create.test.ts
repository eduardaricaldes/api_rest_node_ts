import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cidades - Create",() => {

    it('Criar registro', async() => {
      const testUm =  await testServer
        .post("/cidades")
        .send({
            nome:"Manaus"
        });
        
        expect(testUm.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof testUm.body).toEqual("number")

    });

     it('nao pode nome curto', async() => {
      const x =  await testServer
        .post("/cidades")
        .send({
            nome:"Ca"
        });
        
        expect(x.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(x.body).toHaveProperty("errors.body.nome")

    });
});