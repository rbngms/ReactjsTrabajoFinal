import Breadcrumb from '../components/common/breadcrumb';
import SEO from '../components/seo';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Error Page'} />
      <Header />
      <main>
        <Breadcrumb img="/assets/img/page-title/page-title-2.jpg" title={'Pagina no encontrada'} subtitle={'404 Error'} />
        <section className="error__area pt-60 pb-100">
          <div className="container">
            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div className="error__content text-center">
                <div className="error__number">
          
                </div>
                <span>Error 404</span>
                <h2>Pagina no encontrada</h2>
              
                
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </Wrapper>
  );
};

export default ErrorPage;