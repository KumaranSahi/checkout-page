import { UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { useProductContext } from "../../reducer/ProductContext";

export const CartsPage = () => {
  const { cart } = useProductContext();

  return (
    <Box>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        padding="2"
      >
        {cart &&
          cart.map((product) => (
            <ListItem key={product.id} margin="1">
              {/* <ProductItem {...product} /> */}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};
