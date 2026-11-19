// Task 6: Disaster recovery notes.
//
// 1. Accidental collection deletion: restore from a valid backup.
// 2. Primary server failure: replica set can elect an eligible secondary.
// 3. Database corruption: restore from a verified backup.
// 4. Hardware failure: recover using a healthy replica member or backup.
// 5. Accidental data modification: restore backup and, where applicable,
//    use point-in-time recovery / oplog replay.
//
// Good backup practices:
// - Schedule regular backups.
// - Keep copies in separate secure locations.
// - Test restoration regularly.
// - Protect backup files with appropriate access controls.
