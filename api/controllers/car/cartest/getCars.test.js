const request = require("supertest");
const fs = require("fs");
const app = require("../../../../app.js");

describe("Cars", () => {
    jest.setTimeout(20000)

  test("GET / --> get 10 Cars", async () => {
    const { body } = await request(app)
      .get("/cars")
      .query({ page: "1" })
      .expect("Content-Type", /json/)
      .expect(200);
    expect(body).toEqual({
        "success": true,
        "data": {
          "cars": [
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab148",
              "make": "BMW",
              "model": "2 Series M",
              "release_date": 2011,
              "Engine HP": "335",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Factory Tuner,Luxury,High-Performance",
              "size": "Compact",
              "style": "Coupe",
              "highway MPG": "26",
              "city mpg": "19",
              "Popularity": "3916",
              "price": 46135,
              "updatedAt": "2022-11-04T07:51:36.779Z"
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab149",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2011,
              "Engine HP": "300",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,Performance",
              "size": "Compact",
              "style": "Convertible",
              "highway MPG": "28",
              "city mpg": "19",
              "Popularity": "3916",
              "price": 40650
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14a",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2011,
              "Engine HP": "300",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,High-Performance",
              "size": "Compact",
              "style": "Coupe",
              "highway MPG": "28",
              "city mpg": "20",
              "Popularity": "3916",
              "price": 36350
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14b",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2011,
              "Engine HP": "230",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,Performance",
              "size": "Compact",
              "style": "Coupe",
              "highway MPG": "28",
              "city mpg": "18",
              "Popularity": "3916",
              "price": 29450
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14c",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2011,
              "Engine HP": "230",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury",
              "size": "Compact",
              "style": "Convertible",
              "highway MPG": "28",
              "city mpg": "18",
              "Popularity": "3916",
              "price": 34500
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14d",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2012,
              "Engine HP": "230",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,Performance",
              "size": "Compact",
              "style": "Coupe",
              "highway MPG": "28",
              "city mpg": "18",
              "Popularity": "3916",
              "price": 31200
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14e",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2012,
              "Engine HP": "300",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,Performance",
              "size": "Compact",
              "style": "Convertible",
              "highway MPG": "26",
              "city mpg": "17",
              "Popularity": "3916",
              "price": 44100
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab14f",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2012,
              "Engine HP": "300",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury,High-Performance",
              "size": "Compact",
              "style": "Coupe",
              "highway MPG": "28",
              "city mpg": "20",
              "Popularity": "3916",
              "price": 39300
            },
            {
              "page": "1",
              "isDeleted": false,
              "_id": "6363f8c54c97b2df43eab150",
              "make": "BMW",
              "model": "1 Series",
              "release_date": 2012,
              "Engine HP": "230",
              "transmission_type": "MANUAL",
              "Number of Doors": "2",
              "Market Category": "Luxury",
              "size": "Compact",
              "style": "Convertible",
              "highway MPG": "28",
              "city mpg": "18",
              "Popularity": "3916",
              "price": 36900
            }
          ],
          "page": 1,
          "total": 9
        },
        "message": "Found list of cars success"
      });
  });

  test("GET / --> get cars not found", async () => {
    const { body } = await request(app)
      .get("/cars")
      .query({ make: "vinphat" })
      .expect("Content-Type", /json/)
      .expect(200);
    expect(body).toEqual({
        "success": true,
        "data": {
          "cars": [],
          "page": null,
          "total": 0
        },
        "message": "Found list of cars success"
      });
  });
});