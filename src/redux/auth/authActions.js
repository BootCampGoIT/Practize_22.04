export const REGISTER = "@auth/register";
export const LOGOUT = "@auth/logout";

const register = (data) => ({
  type: REGISTER,
  payload: data,
});

const logout = () => ({
  type: LOGOUT,
});

export { register, logout };


