/**
 * Classic firebase Observer + first time DB population
 */
// this.unsubscribeFromAuth = auth.onAuthStateChanged(
//   async (userAuth) => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);
//       userRef.onSnapshot((snapshot) => {
//         setCurrentUser({
//           id: snapshot.id,
//           ...snapshot.data(),
//         });
//       });
//     } else {
//       setCurrentUser(null);
//     }
//     /**
//      * Adds data to firebase (should be used only manually)
//      */
//     // addCollectionAndDocuments(
//     //   "collections",
//     //   collectionsPreview.map(({ title, items }) => ({ title, items }))
//     // );
//   },
//   (error) => console.error(error)
// );
