import axios from "axios";

const createOrderOperation = (order) => async (dispatch, getState) => {
  if (getState().auth.idToken) {
    await axios.post(
      `https://bootcamp5-default-rtdb.firebaseio.com/historyOrders/${
        getState().auth.localId
      }.json`,
      order,
      {
        params: {
          auth: getState().auth.idToken,
        },
      }
    );
  }

  const response2 = await axios.post(
    `https://bootcamp5-default-rtdb.firebaseio.com/orders.json`,
    order
  );
};



export { createOrderOperation };
