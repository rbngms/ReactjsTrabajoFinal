const products = [
  {
    id:1,
    trending:true,
    product:[
      {
        id:1,
        img:'/assets/img/shop/product/camasaltarin-01.jfif',
        images:[
          {src:'/assets/img/shop/product/camasaltarin-01.jfif'},
          {src:'/assets/img/shop/product/camasaltarin-02.jfif'},
          {src:'/assets/img/shop/product/camasaltarin-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/camasaltarin-01.jfif',
        category:'Aire Libre',
        title:'Cama Saltarina',
        price:96.00,
        old_price:120.00,
        rating:3,
        desc:'Para que disfrutes en tu jardin',
        weight:10,
        dimension:'62 × 56.3 × 12',
      
      },

      {
        id:2,
        img:'/assets/img/shop/product/ace-01.jfif',
        images:[
          {src:'/assets/img/shop/product/ace-01.jfif'},
          {src:'/assets/img/shop/product/ace-02.jfif'},
          {src:'/assets/img/shop/product/ace-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/ace-01.jfif',
        category:'Aseo',
        title:'Detergente Ace',
        price:10.00,
        old_price:15.00,
        product__sale:['Nuevo'],
        rating:4,
        desc:'Para la limpieza de tu ropa',
        weight:.27,
        dimension:'62 × 68 × 12',
        
      },
    ]
  },

  {
    id:2,
    trending:true,
    product:[
      {
        id:3,
        img:'/assets/img/shop/product/carpa-01.jfif',
        images:[
          {src:'/assets/img/shop/product/carpa-01.jfif'},
          {src:'/assets/img/shop/product/carpa-02.jfif'},
          {src:'/assets/img/shop/product/carpa-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/carpa-01.jfif',
        category:"Aire Libre",
        title:'Carpa Cherokee',
        price:92.00,
        brand:'Sony',
        old_price:112.00,
        rating:3.5,
        product__sale:['Nuevo'],
        desc:'Perfecta para acampar al aire libre',
        weight:8,
        dimension:'62 × 59 × 12',
       
      },

      {
        id:4,
        img:'/assets/img/shop/product/comedor-01.jfif',
        images:[
          {src:'/assets/img/shop/product/comedor-01.jfif'},
          {src:'/assets/img/shop/product/comedor-02.jfif'},
          {src:'/assets/img/shop/product/comedor-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/comedor-01.jfif',
        category:"Muebles",
        title:'Moderno comedor con sillas',
        price:88.00,
        old_price:108.00,
        rating:3,
        desc:'Comedor que viene con sillas',
        weight:.22,
        dimension:'62 × 77 × 12',
        
      },
    ]
  },

  {
    id:3,
    trending:true,
    product:[
      {
        id:5,
        img:'/assets/img/shop/product/condimentero-01.jfif',
        images:[
          {src:'/assets/img/shop/product/condimentero-01.jfif'},
          {src:'/assets/img/shop/product/condimentero-02.jfif'},
          {src:'/assets/img/shop/product/condimentero-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/condimentero-01.jfif',
        category:"Decoracion",
        title:'Condimentero especial',
        price:8.00,
        old_price:12,
        rating:3.8,
        desc:'Moderno condimentero',
        weight:1,
        dimension:'62 × 59 × 12',
        
      },

      {
        id:6,
        img:'/assets/img/shop/product/escalera-01.jfif',
        images:[
          {src:'/assets/img/shop/product/escalera-01.jfif'},
          {src:'/assets/img/shop/product/escalera-02.jfif'},
          {src:'/assets/img/shop/product/escalera-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/escalera-01.jfif',
        category:"Obra Gruesa",
        title:'Escalera 10kg',
        price:77.00,
        old_price:102.00,
        rating:3.7,
        product__sale:['Nuevo'],
        desc:'Moderna escalera para los proyectos de tu hogar',
        weight:15,
        dimension:'62 × 77 × 12',
        
      },
    ]
  },

  {
    id:4,
    trending:true,
    product:[
      {
        id:7,
        img:'/assets/img/shop/product/escritorio-01.jfif',
        images:[
          {src:'/assets/img/shop/product/escritorio-01.jfif'},
          {src:'/assets/img/shop/product/escritorio-02.jfif'},
          {src:'/assets/img/shop/product/escritorio-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/escritorio-01.jfif',
        category:"Muebles",
        title:'Escritorio Gamer con luces LED',
        price:70.00,
        old_price:90.00,
        rating:3.9,
        product__sale:['Nuevo'],
        desc:'Moderno escritorio Gamer',

        weight:.22,
        dimension:'62 × 59 × 12',
        
      },

      {
        id:8,
        img:'/assets/img/shop/product/espejo-01.jfif',
        images:[
          {src:'/assets/img/shop/product/espejo-01.jfif'},
          {src:'/assets/img/shop/product/espejo-02.jfif'},
          {src:'/assets/img/shop/product/espejo-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/espejo-01.jfif',
        category:"Decoracion",
        title:'Espejo Joyero',
        price:75.00,
        old_price:95.00,
        rating:3.4,
        desc:' Espejo con almacenador de joyas incluido',
        weight:.29,
        dimension:'62 × 77 × 12',
        
      },
    ]
  },

  {
    id:5,
    trending:true,
    product:[
      {
        id:9,
        img:'/assets/img/shop/product/espejos-01.jfif',
        images:[
          {src:'/assets/img/shop/product/espejos-01.jfif'},
          {src:'/assets/img/shop/product/espejos-02.jfif'},
          {src:'/assets/img/shop/product/espejos-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/espejos-01.jfif',
        category:"Decoracion",
        title:'Espejo de pie',
        price:68.00,
        old_price:88.00,
        rating:4,
        product__sale:['Nuevo'],
        desc:' Espejo',
        weight:5,
        dimension:'62 × 59 × 12',
       
      },

      {
        id:10,
        img:'/assets/img/shop/product/frazada-01.jfif',
        images:[
          {src:'/assets/img/shop/product/frazada-01.jfif'},
          {src:'/assets/img/shop/product/frazada-02.jfif'},
          {src:'/assets/img/shop/product/frazada-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/frazada-01.jfif',
        category:"Decoracion",
        title:'Frazada polar',
        price:15.00,
        old_price:22.00,
        rating:3.5,
        product__sale:['Nuevo'],
        desc:'Frazada polar',
        weight:.29,
        dimension:'62 × 77 × 12',
        
      },
    ]
  },

  {
    id:6,
    trending:true,
    product:[
      {
        id:11,
        img:'/assets/img/shop/product/freidora-01.jfif',
        images:[
          {src:'/assets/img/shop/product/freidora-01.jfif'},
          {src:'/assets/img/shop/product/freidora-02.jfif'},
          {src:'/assets/img/shop/product/freidora-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/freidora-01.jfif',
        category:"Electrohogar",
        title:'Freidora Oster',
        price:67.00,
        old_price:75.00,
        rating:4,
        desc:'Freidora',
        weight:.22,
        dimension:'62 × 59 × 12',
        
      },

      {
        id:12,
        img:'/assets/img/shop/product/lgtv-01.jfif',
        images:[
          {src:'/assets/img/shop/product/lgtv-01.jfif'},
          {src:'/assets/img/shop/product/lgtv-02.jfif'},
          {src:'/assets/img/shop/product/lgtv-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/lgtv-01.jfif',
        category:"Electrohogar",
        title:'Television Samsung 70°',
        price:355.00,
        old_price:566.00,
        rating:3.5,
        product__sale:['Nuevo'],
        desc:'Smart TV',
        weight:.30,
        dimension:'62 × 77 × 12',
       
      },
    ]
  },

  {
    id:7,
    product:[
      {
        id:13,
        img:'/assets/img/shop/product/mesaplegable-01.jfif',
        images:[
          {src:'/assets/img/shop/product/mesaplegable-01.jfif'},
          {src:'/assets/img/shop/product/mesaplegable-02.jfif'},
          {src:'/assets/img/shop/product/mesaplegable-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/mesaplegable-01.jfif',
        category:"Aire Libre",
        title:'Mesa Plegable',
        price:99.00,
        old_price:112.00,
        rating:4,
        desc:'Mesa Plegable',
        weight:.17,
        dimension:'62 × 59 × 12',
        
      },

      {
        id:14,
        img:'/assets/img/shop/product/organizacion-01.jfif',
        images:[
          {src:'/assets/img/shop/product/organizacion-01.jfif'},
          {src:'/assets/img/shop/product/organizacion-02.jfif'},
          {src:'/assets/img/shop/product/organizacion-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/organizacion-01.jfif',
        category:"Organizacion",
        title:'Cajas organizadoras',
        price:122.00,
        old_price:142.00,
        rating:3.5,
        product__sale:['Nuevo'],
        desc:'Cajas organizadoras',

        weight:.30,
        dimension:'62 × 77 × 12',
        
      },
    ]
  },

  {
    id:8,
    product:[
      {
        id:15,
        img:'/assets/img/shop/product/pilas-01.jfif',
        images:[
          {src:'/assets/img/shop/product/pilas-01.jfif'},
          {src:'/assets/img/shop/product/pilas-02.jfif'},
          {src:'/assets/img/shop/product/pilas-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/pilas-01.jfif',
        category:"Electricidad",
        sm_title:'Products Essentials',
        title:'Pilas AAA',
        price:9.25,
        old_price:15.25,
        rating:4,
        desc:<>Pilas AAA</>,
        weight:.20,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:9,
    product:[
      {
        id:16,
        featured:true,
        img:'/assets/img/shop/product/ropero-01.jfif',
        images:[
          {src:'/assets/img/shop/product/ropero-01.jfif'},
          {src:'/assets/img/shop/product/ropero-02.jfif'},
          {src:'/assets/img/shop/product/ropero-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/ropero-01.jfif',
        category:"Muebles",
        sm_title:'Products Furniture',
        title:'Ropero Caoba 3 puertas',
        price:396.25,
        old_price:450.25,
        rating:4,
        desc:<>Ropero Caoba 3 puertas</>,
        weight:.20,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:10,
    product:[
      {
        id:17,
        big:true,
        img:'/assets/img/shop/product/sanitarios-01.jfif',
        category:"Baños",
        images:[
          {src:'/assets/img/shop/product/sanitarios-01.jfif'},
          {src:'/assets/img/shop/product/sanitarios-02.jfif'},
          {src:'/assets/img/shop/product/sanitarios-03.jfif'},
        ],
        title:<>Inodoro One Piece Hawaii</>,
        price:296.25,
        old_price:350.25,
        rating:4,
        desc:"Ahorrador de agua",

        weight:.18,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:11,
    product:[
      {
        id:18,
        big_3:true,
        img:'/assets/img/shop/product/silla-01.jfif',
        category:"Muebles",
        images:[
          {src:'/assets/img/shop/product/silla-01.jfif'},
          {src:'/assets/img/shop/product/silla-02.jfif'},
          {src:'/assets/img/shop/product/silla-03.jfif'},
        ],
        title:'Silla Gamer con luces LED',
        price:287.25,
        old_price:325.25,
        rating:4,
        desc:"Silla Gamer",
        weight:.18,
        dimension:'59 × 60 × 12',
       
      },
    ]
  },

  {
    id:13,
    product:[
      {
        id:19,
        big_2:true,
        img:'/assets/img/shop/product/sillac-01.jfif',
        category:"Aire Libre",
        images:[
          {src:'/assets/img/shop/product/sillac-01.jfif'},
          {src:'/assets/img/shop/product/sillac-02.jfif'},
          {src:'/assets/img/shop/product/sillac-03.jfif'},
        ],
        title:'Silla Colgante',
        price:167.25,
        old_price:274.25,
        rating:3,
        desc:"Silla Colgante",
        weight:.15,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:14,
    product:[
      {
        id:20,
        f_prd:true,
        new:true,
        feature_prd:true,
        img:'/assets/img/shop/product/sillon-01.jfif',
        images:[
          {src:'/assets/img/shop/product/sillon-01.jfif'},
          {src:'/assets/img/shop/product/sillon-02.jfif'},
          {src:'/assets/img/shop/product/sillon-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/sillon-01.jfif',
        category:"Muebles",
        title:"Sillon para Sala",
        price:85.00,
        old_price:96.00,
        rating:3,
        desc:"Sillon para sala",
        weight:.17,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:15,
    product:[
      {
        id:21,
        f_prd:true,
        new:true,
        feature_prd:true,
        img:'/assets/img/shop/product/taladro-01.jfif',
        category:"Herramientas",
        images:[
          {src:'/assets/img/shop/product/taladro-01.jfif'},
          {src:'/assets/img/shop/product/taladro-02.jfif'},
          {src:'/assets/img/shop/product/taladro-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/taladro-01.jfif',
        title:"Taladro atornillador",
        price:108.00,
        old_price:120.00,
        rating:4,
        desc:"Taladros",
        weight:.9,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:16,
    product:[
      {
        id:22,
        img:'/assets/img/shop/product/terma-01.jfif',
        images:[
          {src:'/assets/img/shop/product/terma-01.jfif'},
          {src:'/assets/img/shop/product/terma-02.jfif'},
          {src:'/assets/img/shop/product/terma-03.jfif'},
        ],
        f_prd_big:true,
        category:"Baños",
        title:"Terma 50L",
        price:129.00,
        old_price:138.00,
        rating:4,
        desc:"Agua Caliente",
        weight:.14,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:17,
    product:[
      {
        id:23,
        img:'/assets/img/shop/product/termo-01.jfif',
        images:[
          {src:'/assets/img/shop/product/termo-01.jfif'},
          {src:'/assets/img/shop/product/termo-02.jfif'},
          {src:'/assets/img/shop/product/termo-03.jfif'},
        ],
        f_prd_big:true,
        category:"Decoracion",
        title:'Termo 2L',
        price:142.00,
        old_price:152.00,
        rating:4,
        desc:"Termo",
        weight:.15,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:18,
    product:[
      {
        id:24,
        f_prd:true,
        feature_prd:true,
        category:"Aire Libre",
        img:'/assets/img/shop/product/toldo-01.jfif',
        images:[
          {src:'/assets/img/shop/product/toldo-01.jfif'},
          {src:'/assets/img/shop/product/toldo-02.jfif'},
          {src:'/assets/img/shop/product/toldo-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/toldo-01.jfif',
        title:"Toldo para Jardin",
        price:98.00,
        rating:4,
        desc:"Toldo para jardin",
        weight:.9,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:19,
    product:[
      {
        id:25,
        f_prd:true,
        feature_prd:true,
        img:'/assets/img/shop/product/trapeadores-01.jfif',
        images:[
          {src:'/assets/img/shop/product/trapeadores-01.jfif'},
          {src:'/assets/img/shop/product/trapeadores-02.jfif'},
          {src:'/assets/img/shop/product/trapeadores-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/trapeadores-01.jfif',
        category:"Aseo",
        title:"Trapeador ",
        price:80.00,
        rating:4,
        desc:"Trapeador",
        weight:.9,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },

  {
    id:20,
    product:[
      {
        id:26,
        f_prd:true,
        feature_prd:true,
        category:"Electrohogar",
        img:'/assets/img/shop/product/tv-01.jfif',
        images:[
          {src:'/assets/img/shop/product/tv-01.jfif'},
          {src:'/assets/img/shop/product/tv-02.jfif'},
          {src:'/assets/img/shop/product/tv-03.jfif'},
        ],
        thumb_img:'/assets/img/shop/product/tv-01.jfif',
        title:"Televisor Nokia 50°",
        price:65.00,
        rating:4,
        desc:"Televisor Smart",
        weight:.9,
        dimension:'59 × 60 × 12',
        
      },
    ]
  },
]


export default products;