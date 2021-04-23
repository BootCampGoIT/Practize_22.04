import axios from "axios";
import { register } from "./authActions";

const registrationOperation = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUJOqAci2L6mIY6_RhmCni9GIZmXQvr7E`,
      { ...user, returnSecureToken: true }
    );
    console.log(response);
    dispatch(register(response.data));
  } catch (error) {}
};

const loginOperation = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUJOqAci2L6mIY6_RhmCni9GIZmXQvr7E`,
      { ...user, returnSecureToken: true }
    );
    console.log(response);
    dispatch(register(response.data));
  } catch (error) {}
};

export { registrationOperation, loginOperation };
