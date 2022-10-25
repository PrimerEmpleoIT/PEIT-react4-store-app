import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
import { NewData } from "../../Helpers/NewData";
import { useWindowWidth } from "@react-hook/window-size";
import { Box, Container } from "@chakra-ui/react";
import { FaBluetooth } from "react-icons/fa";
import "./NewProducts.css";

const styles = {
  card: {
    fontSize: "14px",
    fontFamily: "Poppins",
    padding: 0,
    margin: 0,
    backgroundColor: "#fff",
    borderRadius: "3px",
    cursor: "pointer",
  },
  price: {
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
  },
};

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
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 5,
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "22px", padding: "22px", fontWeight: "bold" }}>
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
        </u>
      </div>

      <Slider {...settings}>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOn}>{NewData[0].Stock}</h4>
            <img src={NewData[0].img} alt="" />
            <StarRating />
            <p>{NewData[0].Description}</p>
            <del> $ {NewData[0].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[0].Price.toFixed(2)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOff}>{NewData[1].Stock}</h4>
            <img src={NewData[1].img} alt="" />
            <StarRating />
            <p>{NewData[1].Description}</p>
            <del> $ {NewData[1].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[1].Price.toFixed(2)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOn}>{NewData[2].Stock}</h4>
            <img src={NewData[2].img} alt="" />
            <StarRating />
            <p>{NewData[2].Description}</p>
            <del> $ {NewData[2].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[2].Price.toFixed(2)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOn}>{NewData[3].Stock}</h4>
            <img src={NewData[3].img} alt="" />
            <StarRating />
            <p>{NewData[3].Description}</p>
            <del> $ {NewData[3].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[3].Price.toFixed(3)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOff}>{NewData[4].Stock}</h4>
            <img src={NewData[4].img} alt="" />
            <StarRating />
            <p>{NewData[4].Description}</p>
            <del> $ {NewData[4].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[4].Price.toFixed(2)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOn}>{NewData[5].Stock}</h4>
            <img src={NewData[5].img} alt="" />
            <StarRating />
            <p>{NewData[5].Description}</p>
            <del> $ {NewData[5].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[5].Price.toFixed(2)}</h2>
          </Box>
        </Container>
        <Container>
          <Box style={styles.card}>
            <h4 style={styles.stockOff}>{NewData[1].Stock}</h4>
            <img src={NewData[0].img} alt="" />
            <StarRating />
            <p>{NewData[0].Description}</p>
            <del> $ {NewData[0].OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {NewData[0].Price.toFixed(2)}</h2>
          </Box>
        </Container>
      </Slider>
    </>
  );
}
