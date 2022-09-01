import Link from "next/link";
import Slider from "react-slick";


const sliderData = [
  {
    id: 1,
    bgImg: '/assets/img/slider/04/slider011.jpg',
    title: <>Encuentra de todo<br /> Miles de productos</>,
  },
  {
    id: 2,
    bgImg: '/assets/img/slider/slider-2.jpg',
    title: <>Productos novedosos</>,
    subtitle: <>Encuentra lo ultimo en tecnologia</>,
  },
  {
    id: 3,
    bgImg: '/assets/img/slider/slider-3.jpg',
    title: <> Tendencias</>,
    subtitle: <>Encuentra los ultimos productos en tendencia</>,
  },
]

// slick setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  dots: true,
  fade: false,
  arrows: false,
  fade: true,
};


const HeroSlider = () => {
  return (
    <>
      <section className="slider__area slider__area-4 p-relative">
        <Slider className='slider-active' {...settings}>

          {
            sliderData.map((slider, index) => {
              return <div key={index}>
                <div className="single-slider single-slider-2 slider__height-4 d-flex align-items-center"
                  style={{ backgroundImage: `url(${slider.bgImg})`, backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-9 col-sm-11 col-12">
                        <div className="slider__content slider__content-4 p-relative z-index-1">
                          <h2>{slider.title}</h2>
                          <p>{slider.subtitle} </p>
                          <div className="hero-slider-btn">
                            <Link href={`/shop`}>
                              <a className="os-btn os-btn-2">Comprar Ahora</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }

        </Slider>
      </section>
    </>
  );
};

export default HeroSlider;