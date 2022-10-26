import { Button, Flex, Image, Text } from "@chakra-ui/react";
function Categorie(info) {
  const { name, products, id } = info;
  console.log(products);
  return (
    <Flex justify="center" gap={3}>
      <Flex direction="column" justify="center">
        <Text maxW="235px">{name}</Text>
      </Flex>

      <Flex direction="column">
        <Flex direction="row">
          {products.map((p) => (
            <Button>{p.specs}</Button>
          ))}
        </Flex>

        {/* products cards */}

        <Flex>
          {products.map((p) => (
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
