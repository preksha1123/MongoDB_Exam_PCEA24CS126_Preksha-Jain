// Task 3: Simulate accidental collection deletion.
// Run this file in mongosh. WARNING: this permanently drops the collection
// in the connected database. Use only the practical/test database.

use("ticketDB");

print("Collection dropped:", db.bookings.drop());
print("Documents after drop:", db.bookings.countDocuments());
