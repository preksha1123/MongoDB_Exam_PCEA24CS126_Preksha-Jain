// Task 5: Verify the restored collection.
// Run this file in mongosh after mongorestore has completed.

use("ticketDB");

print("Restored document count:");
print(db.bookings.countDocuments());

print("Restored booking documents:");
printjson(db.bookings.find().toArray());
