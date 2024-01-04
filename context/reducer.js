export const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  picture: "",
  name: "",
  email: "",
  password: "",
};

export const userContextReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:
      console.log(SET_USER_DATA);
      console.log(payload);
      return payload;
      break;
    default:
      return state;
      console.log("default");
  }
};
