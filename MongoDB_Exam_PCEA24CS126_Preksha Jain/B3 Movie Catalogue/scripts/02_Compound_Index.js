// Task 1: Run the query without an index and inspect execution statistics.
// Expected winning plan commonly contains COLLSCAN before a suitable index exists.

use("movieDB");

db.movies.find({
  genre: "Drama",
  rating: { $gte: 8 }
}).explain("executionStats");

// Task 2: Create a compound index: genre ascending, rating descending.

db.movies.createIndex(
  { genre: 1, rating: -1 },
  { name: "genre_1_rating_-1" }
);

// Run the same query again. The plan can use IXSCAN.
db.movies.find({
  genre: "Drama",
  rating: { $gte: 8 }
}).explain("executionStats");
