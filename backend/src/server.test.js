import supertest from 'supertest'
import makeServer from './server.js'
const app = makeServer()

describe('server', () => {
    it('exists', () => {
        expect(typeof app).toBe('function')
    })
    it("has an endpoint for listing products", async () => {
        await supertest(app).get("/api/products")
          .expect(200)
          .then((response) => {
            // Check type and length
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(0);
          });
      });
    it.todo('has an endpoint for listing products')
    it.todo('has an endpoint for adding a product')
    it.todo('has an endpoint for editing a product')
    it.todo('has an endpoint for deleting a product')
    it.todo('has an endpoint for processing payments')
})