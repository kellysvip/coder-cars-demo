const request = require("supertest");
const app = require("../../../../app");
const { Car } = require("../../../../models/Car");
const mongoose = require("mongoose");


describe("Cars", () => {
    jest.setTimeout(20000)

    let listOfFound
  beforeAll(() => {
    
     listOfFound = [{
        "page": "2",
        "isDeleted": false,
        "_id": "6363f8c54c97b2df43eab15b",
        "make": "Audi",
        "model": "100",
        "release_date": 1992,
        "Engine HP": "172",
        "transmission_type": "AUTOMATIC",
        "Number of Doors": "4",
        "Market Category": "Luxury",
        "size": "Midsize",
        "style": "Wagon",
        "highway MPG": "20",
        "city mpg": "16",
        "Popularity": "3105",
        "price": 2000
      }]
  });
  

  test("DELETE / --> delete a pokemon", async () => {
    const { body } = await request(app).delete(`/cars/${listOfFound[listOfFound.length-1]._id}`).send({
    }).expect(200);

    expect(body).toEqual({
        "success": true,
        "data": {
          "data": {
            "_id": listOfFound[listOfFound.length-1]._id,
            "make": listOfFound[listOfFound.length-1].make,
            "model": listOfFound[listOfFound.length-1].model,
            "release_date": listOfFound[listOfFound.length-1].release_date,
            "transmission_type": listOfFound[listOfFound.length-1].transmission_type,
            "size": listOfFound[listOfFound.length-1].size,
            "style": listOfFound[listOfFound.length-1].style,
            "price": listOfFound[listOfFound.length-1].price,
            "isDeleted": listOfFound[listOfFound.length-1].isDeleted,
            "createdAt": listOfFound[listOfFound.length-1].createdAt,
            "updatedAt": listOfFound[listOfFound.length-1].updatedAt,
            "__v": 0
          }
        },
        "message": "Delete Car success"
      });
  });
});