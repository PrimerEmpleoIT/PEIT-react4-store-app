import { NewData } from '@/Helpers'
import { Box, Container } from '@chakra-ui/react'
import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { StarRating } from '..'

const styles = {
  card: {
    fontSize: '14px',
    fontFamily: 'Poppins',
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  stockOn: {
    fontSize: '12px',
    marginLeft: '15px',
    color: 'rgb(128, 202, 118)',
  },
  stockOff: {
    fontSize: '12px',
    marginLeft: '15px',
    color: 'rgb(212, 93, 89)',
  },
}

export default function NewProducts() {
  const onlyWidth = useWindowWidth()

  let [slides, setSlides] = useState(6)
  let slidesToShow = Math.round(innerWidth / 240)
  if (slidesToShow !== slides && slidesToShow < 7 && slidesToShow >= 1) {
    setSlides(slidesToShow)
  }

  useEffect(() => {
    slides = slidesToShow
  }, [onlyWidth])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 5,
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '22px', padding: '20px', fontWeight: 'bold' }}>
          New Products
        </span>
        <u
          style={{
            marginTop: '30px',
            fontSize: '12px',
            textAling: 'right',
            color: 'blue',

            cursor: 'pointer',
          }}
        >
          see all new products
        </u>
      </div>

      <Slider {...settings}>
        {NewData.map((data) => {
          const { id, Stock, img, Reviews, Description, OldPrice, Price } = data

          return (
            <Container key={id}>
              <Box style={styles.card}>
                <h4 style={styles.stockOn}>{Stock}</h4>
                <img src={img} alt='img-product' />
                <StarRating />
                <p>{Description}</p>
                <del> $ {OldPrice.toFixed(2)}</del>
                <h2 style={styles.price}> $ {Price.toFixed(2)}</h2>
              </Box>
            </Container>
          )
        })}
      </Slider>
    </>
  )
}
