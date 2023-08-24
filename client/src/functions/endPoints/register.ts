import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../libs/firebaseConfig";
import { Slide, toast } from "react-toastify";

export default function registerFunc({
  email,
  username,
  password,
  gender
}: RegisterForm): void {
  const id = toast.loading("Please wait...");

  // Create user with email and password using firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      // Initialize user's displayName and photoURL when user is created
      await updateProfile(user, {
        displayName: username,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then(() => {
          // Register user in database
          fetch(
            "https://us-central1-react-chat-app-ebc9d.cloudfunctions.net/app/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                UID: user.uid,
                email: user.email,
                username: user.displayName,
                password: password,
                gender: gender,
              }),
            }
          )
            .then((res) => res.json())
            .then((res) => {
              toast.update(id, {
                render: res.message,
                type: "success",
                isLoading: false,
                transition: Slide,
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
              });
            })
            .catch((error) => {
              toast.update(id, {
                render: error.message,
                type: "error",
                isLoading: false,
                transition: Slide,
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
              });
            });
        })
        .catch((error) => {
          toast.error(error);
        });
    })
    .catch((error) => {
      error.code === "auth/email-already-in-use"
        ? toast.update(id, {
          render: "Email is already in use",
          type: "error",
          isLoading: false,
          transition: Slide,
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
        })
        : toast.update(id, {
          render: "Something went wrong creating user",
          type: "error",
          isLoading: false,
          transition: Slide,
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
        });
    });
}
