import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';

import { cartProducts, cart_product, clear_cart, decrease_quantity, remove_cart_product }
  from '../../redux/features/cart-slice';

const CartArea = () => {
  const cartItems = useSelector(cartProducts);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  const handleChange = () => {};
  const handleSubmit = e => e.preventDefault();
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cartItems.length === 0 &&
                <div className='text-center'>
                  <h3>Tu carrito esta vació</h3>
                  <button className="os-btn os-btn-2 mt-30">Volver a la tienda</button>
                </div>
              }
              {cartItems.length > 0 && <form onSubmit={handleSubmit}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Imagen</th>
                        <th className="cart-product-name">Producto</th>
                        <th className="product-price">Precio unitario</th>
                        <th className="product-quantity">Cantidad</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <Link href={`/product-details/${item.id}`}>
                              <a>
                                <img src={item.img} alt="" />
                              </a>
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href={`/product-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </td>
                          <td className="product-price"><span className="amount">${item.price}</span></td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input type="text" onChange={handleChange} value={item.quantity} />
                              <div onClick={() => dispatch(decrease_quantity(item))} className="dec qtybutton">-</div>
                              <div onClick={() => dispatch(cart_product(item))} className="inc qtybutton">+</div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">${item.quantity * item.price}</span>
                          </td>
                          <td onClick={() => dispatch(remove_cart_product(item))} className="product-remove">
                            <button ><i className="fa fa-times"></i></button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input required id="coupon_code" className="input-text" name="coupon_code"
                          placeholder="Codigo de cupon" type="text" />
                        <button className="os-btn os-btn-black" name="apply_coupon" type="submit">Aplicar cupón</button>
                      </div>
                      <div className="coupon2">
                        <button onClick={() => dispatch(clear_cart())} className="os-btn os-btn-black" 
                        name="update_cart" type="button">Limpiar carrito</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ms-auto">
                    <div className="cart-page-total">
                      <h2>Total Carrito</h2>
                      <ul className="mb-20">
                        <li>Subtotal <span>${total}</span></li>
                        <li>Total <span>${total}</span></li>
                      </ul>
                      <Link href={'/checkout'}>
                        <a className="os-btn">Ir a Pagar</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;