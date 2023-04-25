const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const paswordRegExp = /^(?=.*[a-zA-Z])(?=.*\d).+$/;


export const isValidEmail = (email: string): boolean => emailRegExp.test(email);
export const isValidPassword = (password: string): boolean => paswordRegExp.test(password);
