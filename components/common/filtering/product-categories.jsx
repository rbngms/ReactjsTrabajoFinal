import React from 'react';
import { useDispatch } from 'react-redux';
import useGlobalContext from '../../../hooks/use-context';
import { category_product } from '../../../redux/features/product-slice';


const categoryData = [
  {
    title:'Aseo',
  },
  {
    title:'Muebles',
  },
  {
    title:"Electrohogar",
  },
  {
    title:"Aire Libre",
  },
  {
    title:"Decoracion",
  },
  {
    title:"Obra Gruesa",
  },
  {
    title:"Organizacion",
  },
  {
    title:"Baños",
  },
  {
    title:"Herramientas",
  },
  
]

const ProductCategories = () => {
  const {handleCategoryChange,categoryActive} = useGlobalContext();

  return (
    <>
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-title mb-25">
          <h3>Categoria de Productos</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="categories">
            <div className='categories__list'>
              <ul>
                {categoryData.map((category,index) => (
                  <li className={categoryActive === category.title ? 'active' : ''} 
                  onClick={()=> handleCategoryChange(category.title)} key={index}>
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;