import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/EBD/June/2x_EBD_Hero_3_PC._CB633813928_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            title="Miss Chase"
            price="₹834 "
            image="https://m.media-amazon.com/images/I/81ZvKvcS4LL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          ></Product>
          <Product
            title="Anand Sarees "
            price="₹199 "
            image="https://m.media-amazon.com/images/I/91QvOiq5nUL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          ></Product>
          <Product
            title="Harpa Women's Maxi Skater Dress"
            price="₹449 "
            image="https://m.media-amazon.com/images/I/810BJZQQf6L._AC_UL480_FMwebp_QL65_.jpg"
            rating={2}
          ></Product>
          <Product
            title="Women's Jacquard Georgette Saree with Blouse"
            price="₹599"
            image="https://m.media-amazon.com/images/I/81h7PuLq-yL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          ></Product>
        </div>
        <div className="home_row">
          <Product
            title="Amazon Brand - Anarva"
            price="₹1,169"
            image="https://m.media-amazon.com/images/I/71tfQzMogAL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          ></Product>
          <Product
            title="Avantika Fashion"
            price="₹649"
            image="https://m.media-amazon.com/images/I/61FDQKjxH+L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          ></Product>
          <Product
            title="Regolith Designer Sarees"
            price="₹559"
            image="https://m.media-amazon.com/images/I/91njmlSKiCL._AC_UL480_FMwebp_QL65_.jpg"
            rating={2}
          ></Product>
        </div>
        <div className="home_row">
          <Product
            title="Women's Cotton Blend Satin Woven Border Designer Madhubani Printed"
            price="₹378"
            image="https://m.media-amazon.com/images/I/81Lwz9gb6JL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
