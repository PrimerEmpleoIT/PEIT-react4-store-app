import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
function Categorie(info) {
  const { name, products, id } = info;
  const [filter, setFilter] = useState(products);
  const handleFilter = (e) => {
    const buttonValue = e.target.innerText;
    const filter = products.filter((p) => p.specs === buttonValue);
    setFilter(filter);
  };

  return (
    <Flex justify="center" gap={3}>
      <Flex direction="column" justify="center">
        <Text maxW="235px">{name}</Text>
      </Flex>

      <Flex direction="column">
        <Flex direction="row">
          {products.map((p) => (
            <Button onClick={(e) => handleFilter(e)} key={p.id}>
              {p.specs}
            </Button>
          ))}
        </Flex>

        {/* products cards */}

        <Flex>
          {filter.map((p) => (
            <Flex direction="column" maxW="235px" key={p.id}>
              <Image src={p.images} />
              <Text>{p.title}</Text>
              <Text>
                {parseInt(p.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Categorie;
