// Task 7: Create the compound index again.
// If the identical index already exists with the same options,
// MongoDB generally reuses it rather than creating a duplicate.

use("movieDB");

db.movies.createIndex(
  { genre: 1, rating: -1 },
  { name: "genre_1_rating_-1" }
);

printjson(db.movies.getIndexes());
