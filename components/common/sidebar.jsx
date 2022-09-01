import React, { useState } from 'react';
import Link from 'next/link';
import useGlobalContext from '../../hooks/use-context';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [productPages, setProductPages] = useState(false);
 

  const handleMenuDropDown = (page) => {
    if (page === 'home') {
      setHome(!home)
      setShop(false)
      setProductPages(false)
  

    }

    if (page === 'shop') {
      setHome(false)
      setShop(!shop)
      setProductPages(false)

    }

    if (page === 'product-pages') {
      setHome(false)
      setShop(false)
      setProductPages(!productPages)
 
    }

    if (page === 'other-pages') {
      setHome(false)
      setShop(false)
 
    
    }

  }

  return (
    <>
      <section className={`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`}>
        <div className="extra__info-inner">
          <div className="extra__info-close text-end" onClick={() => setShowSidebar(false)}>
            <a href="#" className="extra__info-close-btn"><i className="fal fa-times"></i></a>
          </div>

       
          <nav className="side-mobile-menu d-block d-lg-none mm-menu">
            <ul>
              <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('home')}>Inicio</a >
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                  <li><Link href="/">Inicio</Link></li>
           
                </ul>
              </li>

              <li className={`menu-item-has-children has-droupdown ${shop ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('shop')}>Ver Tienda</a>
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${shop ? 'active' : ''}`}>
                  <li><Link href="/shop">Ver categorias</Link></li>
          
                </ul>
              </li>


              <li> <Link href="/contact">Contacto</Link> </li>

            </ul>
          </nav>

        </div>
      </section>
      <div onClick={() => setShowSidebar(false)}
        className={`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`}>
      </div>
    </>
  );
};

export default Sidebar;