// Q2 - Backup and Restore
// Task 1: Take a full replica-set backup.
//
// IMPORTANT:
// mongodump is a command-line utility, NOT a mongosh JavaScript function.
// Run the following command in Windows PowerShell / CMD, not inside mongosh.
//
// mongodump --host "rs0/localhost:27017,localhost:27018,localhost:27019" --readPreference=secondary --oplog --out "C:\\backups\\ticket_full"
//
// Replace replica-set name, hosts, ports, authentication options and path
// with the values configured on your own system.
//
// This file is kept as .js to document the practical step in the repository.
