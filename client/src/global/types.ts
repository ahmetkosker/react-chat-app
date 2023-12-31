export { };

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface InputProps {
    value?: string;
    handleChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    register?: any;
    error?: any;
    placeholder: string;
    type?: string;
  }

  type RegisterForm = {
    email: string;
    username: string;
    password: string;
    gender: string;
  };

  type LoginForm = {
    email: string;
    password: string;
  };
}
