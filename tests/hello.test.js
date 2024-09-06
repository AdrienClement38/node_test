const request = require("supertest");
const app = require("../src/hello");

describe("GET /hello/:name", () => {
  test("Response should be Welcome with the name", async () => {
    const response = await request(app).get("/hello/Adrien");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello, Adrien!");
  });

  test("Response should be Welcome with another name", async () => {
    const response = await request(app).get("/hello/John");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello, John!");
  });

  test("Response should handle empty name", async () => {
    const response = await request(app).get("/hello/");
    expect(response.statusCode).toBe(404);
  });

  test("Response should handle missing name", async () => {
    const response = await request(app).get("/hello");
    expect(response.statusCode).toBe(404);
  });
});




describe("GET /goodbye/:name", () => {
  test("Response should be goodbye with the name", async () => {
    const response = await request(app).get("/goodbye/Adrien");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Goodbye, Adrien!");
  });

  test("Response should be goodbye with another name", async () => {
    const response = await request(app).get("/goodbye/John");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Goodbye, John!");
  });

  test("Response should handle empty name", async () => {
    const response = await request(app).get("/goodbye/");
    expect(response.statusCode).toBe(404);
  });

  test("Response should handle missing name", async () => {
    const response = await request(app).get("/goodbye");
    expect(response.statusCode).toBe(404);
  });
});
