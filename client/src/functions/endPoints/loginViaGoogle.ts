import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../libs/firebaseConfig";
import { toast } from "react-toastify";

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(() => {
            toast.success("You are in", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
        .catch(() => {
            toast.error("Something went wrong", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
};

export default signInWithGoogle;