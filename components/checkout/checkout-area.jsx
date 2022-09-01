import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cartProducts } from '../../redux/features/cart-slice';

const countries = ['Lima', 'Lima Provincias']
const payment_accordion = [
 
]

const CheckoutArea = () => {
 
  const cartItems = useSelector(cartProducts);
  const { total } = useCartInfo();
  return (
    <>
      <section className="checkout-area pb-70">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Dirección de entrega</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>Provincia <span className="required">*</span></label>
                        <select>
                          {countries.map((country, index) => (
                            <option key={index} defaultValue={index}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <InputBox col='col-md-6' label={'Nombres'} placeholder="Nombres" />
                    <InputBox col='col-md-6' label={'Apellidos'} placeholder="Apellidos" />
                    <InputBox label={'Distrito'} placeholder="Distrito" />
                    <InputBox label={'Dirección'} placeholder="Dirección" />
                    <InputBox required={false} placeholder="Referencia" />

                    <InputBox col='col-md-6' type='email' label={'Email'} placeholder="Email" />
                    <InputBox col='col-md-6' label={'Teléfono'} placeholder="Teléfono" />

                    
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Resumen</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Producto</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index} className="cart_item">
                            <td className="product-name">
                              {item.title} <strong className="product-quantity"> × {item.quantity}</strong>
                            </td>
                            <td className="product-total">
                              <span className="amount">${item.price}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td><span className="amount">${total}</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Total Orden</th>
                          <td><strong><span className="amount">${total}</span></strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="accordion" id="accordionExample">
                      {payment_accordion.map((item, index) => (
                        <div key={index} className="card">
                          <div className="card-header" id={item.id}>
                            <h5 className="mb-0">
                              <button className={`btn-link ${item.show ? '' : 'collapsed'}`}
                                type="button" data-bs-toggle="collapse"
                                data-bs-target={`#${item.target}`} aria-expanded="true"
                                aria-controls={`${item.target}`}>
                                {item.title}
                              </button>
                            </h5>
                          </div>

                          <div id={`${item.target}`} className={`collapse ${item.show ? 'show' : ''}`}
                            aria-labelledby={item.id} data-bs-parent="#accordionExample">
                            <div className="card-body">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="order-button-payment mt-20">
                      <button type="submit" className="os-btn os-btn-black">Ir a pagar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckoutArea;

const InputBox = ({ col = 'col-md-12', required = true, label, type = 'text', placeholder }) => {
  return (
    <div className={col}>
      <div className="checkout-form-list">
        {label && <label>{label} {required && <span className="required">*</span>}</label>}
        <input required={required} type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}