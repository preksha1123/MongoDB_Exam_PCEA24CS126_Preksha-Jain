// Task 5: Create a multikey index on the cast array field.
// MongoDB automatically makes it a multikey index because cast is an array.

use("movieDB");

db.movies.createIndex(
  { cast: 1 },
  { name: "cast_1" }
);

// Find movies that include Asha in the cast array.
db.movies.find({ cast: "Asha" }).explain("executionStats");

// Display matching movie documents.
printjson(db.movies.find({ cast: "Asha" }).toArray());
