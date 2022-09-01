import Header from '../../layout/headers/header';
import HeroSlider from './hero-slider';
import Banner from '../common/banner/banner';
import Products from '../common/product/trending-products';
import ProductOffer from '../common/product/sale-off';
import SubscribeArea from '../common/subscribe-area';
import Footer from '../../layout/footers/footer';

const index = () => {
  
  return (
    <>
      <Header />
      <main className="box-white grey-bg pt-50">
        <div className="container">
          <div className='box-white-inner'>
            <div className="row">
              <div className='col-xl-12'>
                <HeroSlider/>
                <Banner h4={true} />
                <Products h4={true} />
                <ProductOffer h4={true} />
                <SubscribeArea h4={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;