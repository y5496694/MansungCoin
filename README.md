# MansungCoin

This project is a simple economy simulation for students. All data is stored in Firebase.

## Running Locally

1. Install dependencies (optional for tests):
   ```
npm install
```
   If you cannot access the npm registry, you may skip this step and run only the static HTML.
2. Open `index.html` in a browser. The app expects Firebase to be reachable.
   **Important:** replace the sample `firebaseConfig` object in `index.html` with
   your own Firebase project credentials. The app now warns if the default
   configuration is still present.

## Login Troubleshooting

If login fails with a network error, ensure your internet connection is available. A warning will also appear if the Firebase configuration was not replaced, which can cause `auth/invalid-api-key` errors during login.

## Store Feature

Teachers can add new products via the **상점** page. When no items exist, a helpful message is shown explaining how to add items. Ensure your user has the role `teacher` in Firestore to see the `+ 상품 추가` button.

## Firestore Index Setup

The admin page's **선행 승인 관리** section queries across all users' `deeds` collections
filtered by `status` and sorted by `date`. Firestore requires a composite index
for this query. Create it from the Firebase console under **Firestore
Database → Indexes** with the following settings:

```
Collection Group: deeds
Fields: status (Ascending), date (Ascending)
```

Once the index is built, reloading the admin page will display the pending deeds
correctly.

## Admin Access Permissions

Even with the index in place, the teacher account must have permission to read
all students' `deeds` documents. Check your Firestore security rules so that a
user whose `role` field is `teacher` can read from the `deeds` collection group.
If this permission is missing, the admin page will show a "permission-denied"
error when loading the approval list.
