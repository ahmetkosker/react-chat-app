export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface InputProps {
    value: string;
    onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
  }
}
