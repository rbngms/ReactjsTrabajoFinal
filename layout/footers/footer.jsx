import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img/logo/logo-2.png';

const footerWidget = [
  {
    id: 1,
    title: 'Información',
    footer__links: [
      { list: 'Sobre nosotros' },
      { list: 'Servicio de entrega' },
      { list: 'Terminos y Condiciones' },
    ]
  },
  {
    id: 2,
    title: 'Servicio al cliente',
    footer__links: [
      { list: 'Deja tu opinión' },
      { list: 'Call center' },
      { list: 'Devoluciones' },
      { list: 'Soporte Técnico' },
    ]
  },
]

const Footer = ({ df }) => {
  return (
    <>
      <section className={`footer__area footer-bg ${df ? 'box-m-15' : ''}`}>
        <div className="footer__top pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title mb-25">
                    <Link href="/">
                      <a>
                        <Image src={logo} alt="logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="footer__widget-content">
                    <p> Aprovecha nuestros precios exclusivos en miles de productos. ¿Buscas alguna en específico?  Llámanos</p>
                    <div className="footer__contact">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="fal fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <span>Calle Cesar Vallejo 105 dpto 503</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-envelope-open-text"></i>
                          </div>
                          <div className="text">
                            <span>rgaraym@benkio.com.pe</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-phone-alt"></i>
                          </div>
                          <div className="text">
                            <span>Teléfono: (+51) 991166765</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {footerWidget.map(item => (
                <div key={item.id} className="col-xl-3 col-lg-3 col-md-3 col-12">
                  <div className="footer__widget mb-30">
                    <div className={`footer__widget-title ${item.id === 2 ? 'mb-25' : ''}`}>
                      <h5>{item.title}</h5>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          {item.footer__links.map((link, index) => (
                            <li key={index}><a href="#">{link.list}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="footer__copyright">
                  <p>Copyright © Benkio
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__social f-right">
                  <ul>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;