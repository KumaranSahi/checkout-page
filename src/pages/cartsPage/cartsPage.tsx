import {
  UnorderedList,
  ListItem,
  Box,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useProductContext } from "../../reducer/ProductContext";
import { CartItem } from "../../components";

export const CartsPage = () => {
  const { cart } = useProductContext();

  const calculateCost = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  };

  const calculateTotalCostAfterDiscount = () => {
    return cart.reduce((acc, curr) => {
      return curr.hasDiscount
        ? acc +
            (curr.price - ((curr.price * curr.discount!) / 100) * curr.quantity)
        : acc + curr.price * curr.quantity;
    }, 0);
  };

  const calculateAmountSaved = () => {
    return cart.reduce((acc, curr) => {
      return curr.hasDiscount
        ? acc + ((curr.price * curr.discount!) / 100) * curr.quantity
        : acc;
    }, 0);
  };

  return (
    <Box>
      {cart && cart.length > 0 ? (
        <HStack>
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexWrap="wrap"
            padding="2"
            flex="4"
          >
            {cart &&
              cart.map((product) => (
                <ListItem key={product.id} margin="1">
                  <CartItem {...product} />
                </ListItem>
              ))}
          </UnorderedList>
          <Box flex="2" boxShadow="dark-lg" textAlign="left" padding="2">
            <Text>Total Cost: Rs.{calculateCost().toLocaleString()}</Text>
            <Text>
              Cost After Discounts: Rs.
              {calculateTotalCostAfterDiscount().toLocaleString()}
            </Text>
            <Text>You Save: Rs.{calculateAmountSaved().toLocaleString()}</Text>
          </Box>
        </HStack>
      ) : (
        <Heading>No items in cart</Heading>
      )}
    </Box>
  );
};
