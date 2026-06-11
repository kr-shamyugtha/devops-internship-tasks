const request = require("supertest");
const app = require("../app");

describe("Cafe Menu API", () => {

  test("GET /api/starters should return starters menu", async () => {
    const response = await request(app).get("/api/starters");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("GET /api/drinks should return drinks menu", async () => {
    const response = await request(app).get("/api/drinks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});
