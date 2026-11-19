// Task 4: Drop the alternate / poorly ordered index and list remaining indexes.

use("movieDB");

db.movies.dropIndex("rating_1_genre_1");

print("Indexes remaining:");
printjson(db.movies.getIndexes());
