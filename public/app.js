document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInwithPopup(provider)

    .then((result) => {
      const user = result.user;
      document.alert(`Hello $(user.displayName)`);
      console.log(user);
    })

    .catch(console.log);
}
