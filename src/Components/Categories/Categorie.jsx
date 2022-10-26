import { Flex, Image, Text } from "@chakra-ui/react";
function Categorie(info) {
  const { name, products, id } = info;
  console.log(name, products);
  return (
    <Flex justify="center">
      <Flex>
        <Text maxW="235px">{name}</Text>
      </Flex>
      <Flex gap={3}>
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
  );
}

export default Categorie;
