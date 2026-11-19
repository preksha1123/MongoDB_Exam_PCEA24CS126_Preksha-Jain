// Task 6: Hide the compound index from the query planner.

use("movieDB");

db.movies.hideIndex("genre_1_rating_-1");

print("Indexes after hiding:");
printjson(db.movies.getIndexes());

// Unhide the index when required.
db.movies.unhideIndex("genre_1_rating_-1");

print("Indexes after unhiding:");
printjson(db.movies.getIndexes());
