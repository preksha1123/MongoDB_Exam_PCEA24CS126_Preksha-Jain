// Task 2: Verify backup files.
//
// Run these commands in Windows PowerShell, NOT mongosh:
//
// Get-ChildItem C:\\backups\\ticket_full -Recurse
// Test-Path C:\\backups\\ticket_full\\ticketDB\\bookings.bson
// Get-Item C:\\backups\\ticket_full\\ticketDB\\bookings.bson
//
// Expected: the backup folder should contain the database folder,
// the collection BSON file and metadata file. With --oplog, oplog.bson
// should also be present at the backup root.
