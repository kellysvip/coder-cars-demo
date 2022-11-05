const request = require("supertest");
const app = require("../../../../app.js");


describe("Cars", () => {
    jest.setTimeout(20000)
    test("POST /cars --> create a cars", async () => {
      const { body } = await request(app)
        .post("/cars")
        .send({
            "make": "Plymouth",
            "model": "Colt",
            "release_date": 2002,
            "transmission_type": "MANUAL",
            "size": "Compact",
            "style": "Coupe",
            "price": 23000
        })
        .expect(500);
    });
  
    test("POST /cars --> create a car fail", async () => {
      const { body } = await request(app)
        .post("/cars")
        .send({
            "model": "Colt",
            "release_date": 2002,
            "transmission_type": "MANUAL",
            "size": "Compact",
            "style": "Coupe",
            "price": 23000
        })
        .expect(500);
    });

    test("POST /cars --> create a cars", async () => {
        const { body } = await request(app)
          .post("/cars")
          .send({
            "make": "Plymouth",
            "model": "Colt",
            "release_date": 2002,
            "transmission_type": "MANUAL",
            "size": "Compact",
            "style": "Coupe",
            "price": 23000, 
            "hello": 3000
        })
          .expect(200);
        expect(body).toEqual({
          "success": true,
          "data": {
            "created": {
              "make": "Plymouth",
              "model": "Colt",
              "release_date": 2002,
              "transmission_type": "MANUAL",
              "size": "Compact",
              "style": "Coupe",
              "price": 23000,
              "isDeleted": false,
              "_id": expect.any(String),
              "createdAt":  expect.any(String),
              "updatedAt":  expect.any(String),
              "__v": 0
            }
          },
          "message": "Create Car Success"
        });
      });

  
});