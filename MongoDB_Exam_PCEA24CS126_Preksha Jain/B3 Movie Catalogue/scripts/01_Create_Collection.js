// Q1 - Movie Catalogue
// Task 1: Create the movies collection and insert sample documents.
// Run this file in mongosh.

use("movieDB");

db.movies.drop();

db.movies.insertMany([
  { _id: 1, title: "Silent River", genre: "Drama", rating: 8.4, year: 2019, cast: ["Asha", "Ravi"] },
  { _id: 2, title: "Rapid Chase", genre: "Action", rating: 7.2, year: 2020, cast: ["Vikram", "Asha"] },
  { _id: 3, title: "Lost Letters", genre: "Drama", rating: 7.1, year: 2018, cast: ["Meera", "Ravi"] },
  { _id: 4, title: "Iron Gate", genre: "Action", rating: 8.1, year: 2021, cast: ["Karan", "Vikram"] },
  { _id: 5, title: "Morning Song", genre: "Drama", rating: 8.8, year: 2022, cast: ["Ravi", "Asha"] },
  { _id: 6, title: "Laugh Lane", genre: "Comedy", rating: 6.9, year: 2017, cast: ["Meera", "Dev"] },
  { _id: 7, title: "Night Hustle", genre: "Action", rating: 6.5, year: 2019, cast: ["Vikram", "Dev"] },
  { _id: 8, title: "Paper Boats", genre: "Drama", rating: 7.9, year: 2021, cast: ["Asha", "Karan"] }
]);

print("Movies inserted:");
printjson(db.movies.find().toArray());
