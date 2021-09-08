import supertest from "supertest";
import makeServer from "./server.js";
import * as db from "./db.js";

jest.mock("./db.js");

const app = makeServer();

describe("server", () => {
  it("exists", () => {
    expect(typeof app).toBe("function");
  });
  it("has an endpoint for listing products", async () => {
    db.listProducts.mockReturnValue([{}]);
    await supertest(app)
      .get("/api/products")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
        expect(db.listProducts).toHaveBeenCalledTimes(1);
      });
  });
  it.todo("has an endpoint for adding a product");
  it.todo("has an endpoint for editing a product");
  it.todo("has an endpoint for deleting a product");
  it.todo("has an endpoint for processing payments");
});
