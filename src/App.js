import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, receiveCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const isCartVisible = useSelector((state) => state.uiReducer.isCartVisible);
  const cart = useSelector((state) => state.cartReducer);
  const notification = useSelector((state) => state.uiReducer.notification);
  const dispatchFn = useDispatch();

  useEffect(() => {
    dispatchFn(receiveCartData());
  }, [dispatchFn]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatchFn(sendCartData(cart));
    }
  }, [cart, dispatchFn]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
