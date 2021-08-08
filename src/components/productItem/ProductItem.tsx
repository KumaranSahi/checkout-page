import { ProductItemType } from "../../reducer/product.types";
import {
  VStack,
  Image,
  Text,
  Tag,
  Avatar,
  TagLabel,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import logo from "../../data/images/Logo with background.png";
import { useHistory } from "react-router";
import { useProductContext } from "../../reducer/ProductContext";

export const ProductItem = ({
  id,
  brand,
  fastDelivery,
  image,
  price,
  title,
  inCart,
  hasDiscount,
  discount,
}: ProductItemType) => {
  const { push } = useHistory();
  const { dispatch, products } = useProductContext();

  const goToCart = () => push("/cart");

  const addToCart = (productId: number) => {
    const product = products.find(({ id }) => id === productId);
    dispatch({
      type: "ADD_TO_CART",
      payload: product!,
    });
  };

  const calculateDiscount = (price: number, discount: number) => {
    const finalPrice = price - price * (discount / 100);
    return finalPrice;
  };

  return (
    <VStack alignItems="flex-start" width="20rem" height="35rem" padding="2">
      <Image src={image} width="100%" height="65%" />
      <HStack justifyContent="space-between" height="2">
        <Text color="teal" fontWeight="bold">
          {brand}
        </Text>
        {fastDelivery && (
          <Tag size="lg" colorScheme="teal" borderRadius="full">
            <Avatar src={logo} size="xs" name="Fast Delivery" ml={-1} mr={2} />
            <TagLabel>Fast Delivery</TagLabel>
          </Tag>
        )}
      </HStack>
      <Text>{title.slice(0, 20)}...</Text>
      <HStack justifyContent="space-between" width="100%">
        {hasDiscount ? (
          <Box>
            <Text
              fontWeight="bold"
              flex="4"
              textAlign="left"
              color="gray"
              textDecoration="line-through"
              display="inline"
            >
              Rs. {price.toLocaleString()}
            </Text>
            <Text
              color="teal"
              fontWeight="bold"
              fontSize="xl"
              flex="4"
              textAlign="left"
              display="inline"
            >
              Rs. {calculateDiscount(price, discount!).toLocaleString()} (
              {discount})% OFF
            </Text>
          </Box>
        ) : (
          <Text
            color="teal"
            fontWeight="bold"
            fontSize="xl"
            flex="4"
            textAlign="left"
          >
            Rs. {price.toLocaleString()}
          </Text>
        )}
      </HStack>
      {inCart ? (
        <Button width="100%" colorScheme="teal" onClick={goToCart}>
          Go to cart
        </Button>
      ) : (
        <Button width="100%" colorScheme="teal" onClick={() => addToCart(id)}>
          Add to cart
        </Button>
      )}
    </VStack>
  );
};
