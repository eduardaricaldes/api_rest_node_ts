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
        expect(typeof testUm.body).toBe("object")

    });

     
});