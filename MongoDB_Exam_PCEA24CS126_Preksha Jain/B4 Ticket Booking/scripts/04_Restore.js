// Task 4: Restore the bookings collection from the backup.
//
// IMPORTANT:
// mongorestore is a command-line utility, NOT a mongosh JavaScript function.
// Run this command in Windows PowerShell / CMD:
//
// mongorestore --nsInclude="ticketDB.bookings" --dir="C:\\backups\\ticket_full"
//
// If the collection already exists and you intend to replace it, review
// mongorestore's --drop option carefully before using it.
