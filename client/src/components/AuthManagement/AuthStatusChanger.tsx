const AuthStatusChanger = ({
  variant,
  setVariant,
}: {
  variant: String;
  setVariant: any;
}) => {
  return (
    <section className="flex justify-evenly w-1/2 text-white relative">
      <div
        className={`h-0.5 bg-cyan-500 absolute top-6 transition-all ${
          variant === "SIGNIN" ? "w-[52px] left-[132px]" : "w-16 left-[317px]"
        }`}
      ></div>
      <div
        className="hover:opacity-60 transition-opacity cursor-pointer"
        onClick={() => setVariant("SIGNIN")}
      >
        Sign in
      </div>
      <div
        className="hover:opacity-60 transition-opacity cursor-pointer"
        onClick={() => setVariant("REGISTER")}
      >
        Register
      </div>
    </section>
  );
};

export default AuthStatusChanger;
