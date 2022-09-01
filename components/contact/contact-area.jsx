import ContactForm from "../common/form/contact-form";


const contactInfo = [
  {
    icon: 'fal fa-map-marker-alt',
    title: 'Dirección:',
    subtitle: 'Calle Cesar Vallejo 105 dpto 503'
  },
  {
    icon: 'fal fa-envelope-open-text',
    title: 'Email:',
    subtitle: 'rgaraym@benkio.com.pe'
  },
  {
    icon: 'fal fa-phone-alt',
    title: 'Teléfono:',
    subtitle: '(+51) 991166765'
  },
]

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact__info">
                <h3>¿Tienes dudas? Encuéntranos aquí</h3>
                <ul className="mb-55">
                  {contactInfo.map(item => (
                    <li key={item.title} className="d-flex mb-35">
                      <div className="contact__info-icon mr-20">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact__info-content">
                        <h6>{item.title}</h6>
                        <span>{item.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>¡Adquiere todo lo que necesitas para tu hogar a los mejores precios!</p>

                <div className="contact__social">
                  <ul>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact__form">
                <h3>Contáctanos</h3>
            
                <ContactForm/>
                
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

