import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatchFn = useDispatch();

  const onAdd = (item) => {
    dispatchFn(cartActions.addItemstoCart(item));
  };
  const onSub = (id) => {
    dispatchFn(cartActions.removeItemsfromCart(id));
  };


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
        <button onClick={onSub.bind(null,id)}>-</button>
          <button onClick={onAdd.bind(null,{id,title,price})}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
