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

     it('nao pode nome curto', async() => {
      const x =  await testServer
        .post("/cidades")
        .send({
            nome:"Ca"
        });
        
        expect(x.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(x.body).toHaveProperty("errors.body.nome")

    });


     it('deve retornar o nome passado corretamente', async() => {
      const resp = await testServer
        .post("/cidades")
        .send({
            nome:"Duda"
        });

        const expectedResponse = {
            message: "Duda-1 created successfully"
        }
        
        expect(resp.statusCode).toEqual(StatusCodes.CREATED);

        expect(resp.body).not.toEqual(expectedResponse)

    });
});