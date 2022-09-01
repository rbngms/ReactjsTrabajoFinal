
import ProductCategories from '../filtering/product-categories';
import ProductFeature from '../filtering/product-feature';
import ProductPrice from '../filtering/product-price';


const ShopSidebar = () => {
  return (
    <>
      <div className="shop__sidebar">
        <ProductCategories/>
        <ProductPrice/>

        <ProductFeature/>
      </div>
    </>
  );
};

export default ShopSidebar;