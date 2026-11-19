// Task 3: Compare compound index field orders.
// Create the alternate index.

use("movieDB");

db.movies.createIndex(
  { rating: 1, genre: 1 },
  { name: "rating_1_genre_1" }
);

// Force the alternate index for comparison.
db.movies.find({
  genre: "Drama",
  rating: { $gte: 8 }
})
.hint("rating_1_genre_1")
.explain("executionStats");

// Force the genre-first index for comparison.
db.movies.find({
  genre: "Drama",
  rating: { $gte: 8 }
})
.hint("genre_1_rating_-1")
.explain("executionStats");

// Compare totalKeysExamined, totalDocsExamined, nReturned and execution stages.
// Exact values depend on data, MongoDB version and query planner.
