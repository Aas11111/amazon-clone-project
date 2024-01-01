// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <div className="home__container">
//         <img
//           className="home__image"
//           // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//           // src="https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200"
//           src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_SX1500_FMjpg_.jpeg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="home__row-1">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Philips Quick Juicer 800 Watts - HR1863/20"
            price={135.0}
            rating={4}
            image="https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/catalog/brandstore/philips/259-2022_02_07-p993.jpg "
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 12 128 GB, Black"
            price={662.99}
            rating={5}
            image="https://www.reliancedigital.in/medias/Apple-Iphone12-Mobilephones-491901533-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MjMyNnxpbWFnZS9qcGVnfGltYWdlcy9oOTkvaGIzLzk4NjM4MzUzODU4ODYuanBnfDMyOWY0NzkyNjMwNjE0ZWQ1OWQzNjViNTQ4NWQ2Mjc2YWYzMDhmZmM4YWZiYTdkNDRkZTY2NzMwZmYwOWI4MDE"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
