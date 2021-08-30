import { uiSliceActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const sendCartData = (cart) => {
  return async (dipatchFn) => {
    const sendData = async () => {
      const response = await fetch(
        "https://react-http-55fae-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("Error sending data!");
      }
    };
    try {
      dipatchFn(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      await sendData();

      dipatchFn(
        uiSliceActions.showNotification({
          status: "success",
          title: "Successful",
          message: "Succesfully Sent Data!",
        })
      );
    } catch (error) {
      dipatchFn(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error occurred",
          message: "Error occurred in sending the data!",
        })
      );
    }
  };
};

export const receiveCartData = () => {
  return async (dispatchFn) => {
    const receiveData = async () => {
      const response = await fetch(
        "https://react-http-55fae-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Error receiving data!");
      }
      const data = await response.json();
      return data;
    };

    try {
        const cartDatafromFetch = await receiveData();
        dispatchFn(cartActions.replaceCart({
          items: cartDatafromFetch.items || [],
          totalQuantity: cartDatafromFetch.totalQuantity
      }));
        
      } catch (error) {
        dispatchFn(
          uiSliceActions.showNotification({
            status: "error",
            title: "Error occurred",
            message: "Error occurred in fetching the data!",
          })
        );
      }
  };
};
