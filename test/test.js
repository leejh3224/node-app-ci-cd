const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  let server;

  beforeEach(done => {
    const port = process.env.PORT || 3000;

    server = app.listen(port, done);
  });

  afterEach(done => {
    return server && server.close(done);
  });

  it("respond with hello world!", done => {
    request(app)
      .get("/")
      .expect("hey world!", done);
  });
});
