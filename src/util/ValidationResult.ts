export type ValidationResult =
  | { isValid: true }
  | { isValid: false; message: string };
