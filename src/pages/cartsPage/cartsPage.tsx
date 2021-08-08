import { UnorderedList, ListItem, Box, Heading } from "@chakra-ui/react";
import { useProductContext } from "../../reducer/ProductContext";
import { CartItem } from "../../components";

export const CartsPage = () => {
  const { cart } = useProductContext();

  return (
    <Box>
      {cart && cart.length > 0 ? (
        <UnorderedList
          listStyleType="none"
          display="flex"
          flexWrap="wrap"
          padding="2"
        >
          {cart &&
            cart.map((product) => (
              <ListItem key={product.id} margin="1">
                <CartItem {...product} />
              </ListItem>
            ))}
        </UnorderedList>
      ) : (
        <Heading>No items in cart</Heading>
      )}
    </Box>
  );
};
