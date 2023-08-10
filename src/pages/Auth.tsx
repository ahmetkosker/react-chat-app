import Register from "../components/AuthManagement/Register";

const Auth = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#353536] via-[#3C4D5A] to-[#353536]">
      <section className="max-w-5xl h-full mx-auto flex justify-center items-center">
        <Register />
      </section>
    </div>
  );
};

export default Auth;
