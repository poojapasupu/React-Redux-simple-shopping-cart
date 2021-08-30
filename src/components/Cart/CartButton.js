import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiSliceActions} from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatchFn = useDispatch();
  const totalQuantity = useSelector((state)=>(state.cartReducer.totalQuantity));

  const clickHandler = () => {
    dispatchFn(uiSliceActions.toggleCart());

  };

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
  <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
