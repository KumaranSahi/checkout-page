import { Box } from "@chakra-ui/react";
import { ProductItem } from "../../components";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useProductContext } from "../../reducer/ProductContext";

export const ProductsaPage = () => {
  const { products } = useProductContext();
  return (
    <Box>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        padding="2"
      >
        {products &&
          products.map((product) => (
            <ListItem key={product.id} margin="1">
              <ProductItem {...product} />
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};
