<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
import { NewData } from "./NewData";
import { useWindowWidth } from "@react-hook/window-size";

const styles = {
  card: {
    fontSize: "14px",
    fontFamily: "Poppins",
    padding: "0 rem",
    margin: "0.5rem",
    backgroundColor: "#fff",
    borderRadius: "3px",
=======
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import StarRating from './StarRating'

const styles = {
  card: {
    padding: '1rem',
    margin: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '3px',
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx

    cursor: 'pointer',
  },
  price: {
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
    fontSize: "18px",
    fontWeight: "bold",
  },
  stockOn: {
    fontSize: "12px",
    marginLeft: "15px",
    color: "rgb(128, 202, 118)",
  },
  stockOff: {
    fontSize: "12px",
    marginLeft: "15px",
    color: "rgb(212, 93, 89)",
=======
    fontSize: '20px',
    fontWeight: 'bold',
  },
  stockOn: {
    fontSize: '10px',
    marginLeft: '15px',
    color: 'green',
  },
  stockOff: {
    fontSize: '10px',
    marginLeft: '15px',
    color: 'red',
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
  },
}

<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
=======
const producto1 = {
  Stock: 'in stock',
  img: '/gabinete.jpg',
  Reviews: 5,
  Description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
  OldPrice: 499,
  Price: 1200,
}
const producto2 = {
  Stock: 'check availability',
  img: '/Monitor.jpg',
  Reviews: 4,
  Description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
  OldPrice: 499,
  Price: 800,
}
const producto3 = {
  Stock: 'in stock',
  img: '/Notebook.jpg',
  Reviews: 1,
  Description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
  OldPrice: 499,
  Price: 2500,
}

let slides = Math.round(screen.width / 800) + 4

>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
export default function NewProducts() {
  const onlyWidth = useWindowWidth();

  let [slides, setSlides] = useState(6);
  let slidesToShow = Math.round(innerWidth / 240);
  if (slidesToShow !== slides && slidesToShow < 7 && slidesToShow >= 1) {
    setSlides(slidesToShow);
  }

  useEffect(() => {
    slides = slidesToShow;
  }, [onlyWidth]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  }
  return (
    <>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "22px", padding: "20px", fontWeight: "bold" }}>
          New Products
        </span>
        <u
          style={{
            marginTop: "30px",
            fontSize: "12px",
            textAling: "right",
            color: "blue",

            cursor: "pointer",
          }}
        >
          see all new products
=======
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '30px', padding: '20px' }}>New Products:</span>
        <u
          style={{
            textAling: 'right',
            color: 'blue',
            marginRight: '20px',
            cursor: 'pointer',
          }}
        >
          see all new products{' '}
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
        </u>
      </div>

      <Slider {...settings}>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOn}>{NewData[0].Stock}</h4>
            <img src={NewData[0].img} alt="" />
=======
            <h4 style={styles.stockOn}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[0].Description}</p>
            <del> $ {NewData[0].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[0].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOff}>{NewData[1].Stock}</h4>
            <img src={NewData[1].img} alt="" />
=======
            <h4 style={styles.stockOff}>{producto2.Stock}</h4>
            <img src='Monitor.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[1].Description}</p>
            <del> $ {NewData[1].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[1].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOn}>{NewData[2].Stock}</h4>
            <img src={NewData[2].img} alt="" />
=======
            <h4 style={styles.stockOn}>{producto3.Stock}</h4>
            <img src='Notebook.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[2].Description}</p>
            <del> $ {NewData[2].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[2].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOn}>{NewData[3].Stock}</h4>
            <img src={NewData[3].img} alt="" />
=======
            <h4 style={styles.stockOn}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[3].Description}</p>
            <del> $ {NewData[3].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[3].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOff}>{NewData[4].Stock}</h4>
            <img src={NewData[4].img} alt="" />
=======
            <h4 style={styles.stockOff}>{producto2.Stock}</h4>
            <img src='Monitor.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[4].Description}</p>
            <del> $ {NewData[4].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[4].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOn}>{NewData[5].Stock}</h4>
            <img src={NewData[5].img} alt="" />
=======
            <h4 style={styles.stockOn}>{producto3.Stock}</h4>
            <img src='Notebook.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[5].Description}</p>
            <del> $ {NewData[5].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[5].Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
<<<<<<< HEAD:src/Components/Layout/NewProducts/NewProducts.jsx
            <h4 style={styles.stockOff}>{NewData[0].Stock}</h4>
            <img src={NewData[0].img} alt="" />
=======
            <h4 style={styles.stockOff}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
>>>>>>> 2c2b1e9f4c23015d9956c14096a835efad93b141:src/Components/NewProducts/NewProducts.jsx
            <StarRating />
            <p>{NewData[0].Description}</p>
            <del> $ {NewData[0].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[0].Price.toFixed(2)}</h2>
          </div>
        </div>
      </Slider>
    </>
  )
}
