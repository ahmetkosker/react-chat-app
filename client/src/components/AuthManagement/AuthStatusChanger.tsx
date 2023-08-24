const AuthStatusChanger = ({ setVariant }: { setVariant: any }) => {
  return (
    <section className="flex justify-evenly w-1/2 text-white">
      <div onClick={() => setVariant("SIGNIN")}>Sign in</div>
      <div onClick={() => setVariant("REGISTER")}>Register</div>
    </section>
  );
};

export default AuthStatusChanger;
