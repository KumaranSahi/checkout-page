import {
  UnorderedList,
  ListItem,
  Box,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useProductContext } from "../../reducer/ProductContext";
import { CartItem } from "../../components";

export const CartsPage = () => {
  const { cart, saveForLater } = useProductContext();

  const calculateCost = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  };

  const calculateTotalCostAfterDiscount = () => {
    return cart.reduce((acc, curr) => {
      return curr.hasDiscount
        ? acc +
            (curr.price - (curr.price * curr.discount!) / 100) * curr.quantity
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
        <VStack>
          <Box>
            <Heading>Cart</Heading>
            <Box padding="4" width="100%">
              <Text>
                Total Cost:{" "}
                <Text color="teal" fontSize="xl">
                  Rs.{calculateCost().toLocaleString()}
                </Text>
              </Text>
              <Text>
                Cost After Discounts:
                <Text color="teal" fontSize="xl">
                  {" "}
                  Rs.
                  {calculateTotalCostAfterDiscount().toLocaleString()}
                </Text>
              </Text>
              <Text>
                You Save:
                <Text color="teal" fontSize="xl">
                  Rs.
                  {calculateAmountSaved().toLocaleString()}
                </Text>
              </Text>
            </Box>
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexWrap="wrap"
              padding="2"
              width="100%"
              boxShadow="dark-lg"
            >
              {cart &&
                cart.map((product) => (
                  <ListItem key={product.id} margin="1">
                    <CartItem {...product} />
                  </ListItem>
                ))}
            </UnorderedList>
          </Box>
        </VStack>
      ) : (
        <Heading>No items in cart</Heading>
      )}
      {saveForLater && saveForLater.length > 0 && (
        <Box>
          <Heading>Save For Later</Heading>
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexWrap="wrap"
            padding="2"
            width="100%"
            boxShadow="dark-lg"
          >
            {saveForLater &&
              saveForLater.map((product) => (
                <ListItem key={product.id} margin="1">
                  <CartItem {...product} />
                </ListItem>
              ))}
          </UnorderedList>
        </Box>
      )}
    </Box>
  );
};
