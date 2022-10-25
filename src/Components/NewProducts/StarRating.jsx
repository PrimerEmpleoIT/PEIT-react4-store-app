import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function StarRating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={12}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <div style={{ fontSize: "11px", marginLeft: "10px", color: "#ccc" }}>
        Reviews ( {currentValue} )
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",

    alignItems: "center",
    padding: "10px 5px 8px 0px",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default StarRating;
