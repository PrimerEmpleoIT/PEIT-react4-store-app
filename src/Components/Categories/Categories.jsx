import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/Store/features/Products/index";
import { storeProducts } from "./../../Helpers/storeProducts";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Categorie from "./Categorie";
function Categories() {
  const { loading, data, error } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(storeProducts));
  }, []);

  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        data.map((info) => (
          <Stack mb={5}>
            <Categorie {...info} key={info.id} />
          </Stack>
        ))
      )}
    </>
  );
}

export default Categories;
