import useGlobalContext from "../../../hooks/use-context";
import ProductModal from "../modal/product-modal";
import ProductGrid from "./product-grid";
import ProductList from "./product-list";
import ShopSidebar from "./shop-sidebar"

const ShopProduct = ({ shop_right }) => {
  const { items,handleSelectChange } = useGlobalContext()
  return (
    <>
      <section className="shop__area pt-100 pb-100 shop_products">
        <div className="container">
          <div className="row">
            {!shop_right && <div className="col-xl-3 col-lg-3 col-md-4">
              <ShopSidebar />
            </div>}
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="shop__content-area">
                <div className="shop__header d-sm-flex justify-content-between align-items-center mb-40">
                  <div className="shop__header-left">
                    <div className="show-text">
                      <span>! Compra ahora, no dejes pasar estos precios¡</span>
                    </div>
                  </div>
                  <div className="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">
                    <div className="sort-wrapper mr-30 pr-25 p-relative">
                      <select onChange={handleSelectChange}>
                        <option defaultValue="1">Recomendados</option>
                        <option defaultValue="2">Productos Nuevos</option>
                        <option defaultValue="3">Destacados</option>
                        <option defaultValue="4">Precio</option>
                      </select>
                    </div>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-grid-tab" data-bs-toggle="pill" href="#pills-grid" role="tab" aria-controls="pills-grid" aria-selected="true"><i className="fas fa-th"></i></a>
                      </li>
                    
                    </ul>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                    <div className="row custom-row-10">
                      <ProductGrid itemsPerPage={12} items={items} />
                    </div>
                  </div>


                  <div className="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">
                    <ProductList itemsPerPage={5} items={items} />
                  </div>
                </div>

              </div>
            </div>

            {shop_right && <div className="col-xl-3 col-lg-3 col-md-4">
              <ShopSidebar />
            </div>}

          </div>
        </div>
      </section>


      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}
    </>
  );
};

export default ShopProduct;