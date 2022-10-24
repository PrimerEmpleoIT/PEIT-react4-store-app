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

    cursor: 'pointer',
  },
  price: {
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
  },
}

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

export default function NewProducts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  }
  return (
    <>
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
        </u>
      </div>

      <Slider {...settings}>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOn}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
            <StarRating />
            <p>{producto1.Description}</p>
            <del> $ {producto1.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto1.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOff}>{producto2.Stock}</h4>
            <img src='Monitor.jpg' alt='' />
            <StarRating />
            <p>{producto2.Description}</p>
            <del> $ {producto2.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto2.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOn}>{producto3.Stock}</h4>
            <img src='Notebook.jpg' alt='' />
            <StarRating />
            <p>{producto3.Description}</p>
            <del> $ {producto3.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto3.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOn}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
            <StarRating />
            <p>{producto1.Description}</p>
            <del> $ {producto1.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto1.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOff}>{producto2.Stock}</h4>
            <img src='Monitor.jpg' alt='' />
            <StarRating />
            <p>{producto2.Description}</p>
            <del> $ {producto2.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto2.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOn}>{producto3.Stock}</h4>
            <img src='Notebook.jpg' alt='' />
            <StarRating />
            <p>{producto3.Description}</p>
            <del> $ {producto3.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> $ {producto3.Price.toFixed(2)}</h2>
          </div>
        </div>
        <div>
          <div style={styles.card}>
            <h4 style={styles.stockOff}>{producto1.Stock}</h4>
            <img src='Gabinete.jpg' alt='' />
            <StarRating />
            <p>{producto1.Description}</p>
            <del> $ {producto1.OldPrice.toFixed(2)}</del>
            <h2 style={styles.price}> {producto3.Price.toFixed(2)}</h2>
          </div>
        </div>
      </Slider>
    </>
  )
}
