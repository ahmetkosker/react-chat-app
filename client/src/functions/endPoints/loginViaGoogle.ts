import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../libs/firebaseConfig";
import { toast } from "react-toastify";

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const user = result.user;
            const crt = user.metadata.creationTime
            if (crt) {
                const rr = new Date(crt);
                console.log(rr);
                const targetDate = new Date(rr);
                const now = new Date();

                const timeDifference: number = now.getTime() - targetDate.getTime();

                const secondDifference: number = timeDifference / 1000;

                console.log(secondDifference)


                if (secondDifference < 2) {
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
                                platform: "GOOGLE"
                            }),
                        }
                    ).then((res) => res.json())
                        .then((res) => {
                            console.log(res)
                        })
                        .catch((error: any) => {
                            console.log(error)
                        });
                }
            } else {
                console.log("");
            }

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