const request = require("supertest");
const app = require("../../../../app");

describe("Cars", () => {
    jest.setTimeout(20000)
  test("PUT /cars --> update a cars", async () => {
    const { body } = await request(app)
      .put(`/cars/6363f8c54c97b2df43eab15c`)
      .send({
        "price": 3000,
        "style": "Coupe",
        "size": "Compact",
        "transmission_type": "MANUAL",
        "release_date": 2021,
        "model": "2 Series",
        "make": "BMW"
      })
      .expect(500);

  });
  test("PUT /cars --> update a cars", async () => {
    const { body } = await request(app)
      .put(`/cars/6363f8c54c97b2df43eab15c`)
      .send({
        "price": 3000,
        "style": "Coupe",
        "size": "Compact",
        "transmission_type": "MANUAL",
        "release_date": 2021,
        "model": "2 Series",
        "make": "BMW"
      })
      .expect(200);

    expect(body).toEqual({
        "success": true,
        "data": {
          "updated": {
            "page": "3",
            "isDeleted": false,
            "_id": "6363f8c54c97b2df43eab15c",
            "make": "BMW",
            "model": "2 Series",
            "release_date": 2021,
            "Engine HP": "172",
            "transmission_type": "MANUAL",
            "Number of Doors": "4",
            "Market Category": "Luxury",
            "size": "Compact",
            "style": "Coupe",
            "highway MPG": "24",
            "city mpg": "17",
            "Popularity": "3105",
            "price": 3000,
            "updatedAt": expect.any(String)
          }
        },
        "message": "Update Car success"
      });
  });
});