# HeritageVault Firebase schema

This project is prepared for Firebase Authentication + Cloud Firestore. The schema is intentionally vault-scoped so family archives remain isolated and auditable.

## Collections

### `users/{uid}`

`displayName`, `email`, `photoURL`, `createdAt`, `lastSeenAt`, `defaultVaultId`

### `vaults/{vaultId}`

`name`, `description`, `ownerId`, `memberIds[]`, `coverImageUrl`, `createdAt`, `updatedAt`

### `vaults/{vaultId}/memories/{memoryId}`

`title`, `description`, `type` (`photo | video | audio | document | letter`), `assetUrl`, `thumbnailUrl`, `year`, `dateLabel`, `location`, `familyMemberIds[]`, `tags[]`, `archived`, `createdBy`, `createdAt`, `updatedAt`

Binary files should live in Firebase Storage; Firestore stores their URLs and metadata.

### `vaults/{vaultId}/familyMembers/{memberId}`

`fullName`, `relationship`, `birthYear`, `deathYear`, `portraitUrl`, `notes`, `createdAt`, `updatedAt`

### `vaults/{vaultId}/stories/{storyId}`

`title`, `excerpt`, `body`, `memoryIds[]`, `status` (`draft | published`), `createdBy`, `createdAt`, `updatedAt`

### `vaults/{vaultId}/activity/{activityId}`

`actorId`, `type`, `targetId`, `message`, `createdAt`

## Provisioning

1. Create a Firebase project and enable Authentication (email/password, Google, and Apple as needed).
2. Create a Web app and add its Firebase configuration to the client integration.
3. Install or run the Firebase CLI from this directory.
4. Run `firebase use <project-id>` and then `firebase deploy --only firestore,hosting`.

The repository already contains `firebase.json`, `firestore.rules`, and `firestore.indexes.json` for deployment.

The corresponding TypeScript contracts live in `src/types/firestore.ts`. Use these interfaces when reading or writing documents so client-side data matches the Firestore rules and indexes.
