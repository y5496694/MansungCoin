# MansungCoin

This project is a simple economy simulation for students. All data is stored in Firebase.

## Running Locally

1. Install dependencies (optional for tests):
   ```
npm install
```
   If you cannot access the npm registry, you may skip this step and run only the static HTML.
2. Open `index.html` in a browser. The app expects Firebase to be reachable. You should replace the Firebase configuration in `index.html` with your own project settings.

## Login Troubleshooting

If login fails with a network error, ensure your internet connection is available. The app now displays a clearer message for `auth/network-request-failed` errors.

## Store Feature

Teachers can add new products via the **상점** page. When no items exist, a helpful message is shown explaining how to add items. Ensure your user has the role `teacher` in Firestore to see the `+ 상품 추가` button.
