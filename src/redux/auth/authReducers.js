import { LOGOUT, REGISTER } from "./authActions";

const initialState = {
  idToken: "",
  email: "",
  refreshToken: "",
  localId: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
