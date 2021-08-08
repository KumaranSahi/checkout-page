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
import { useProductContext } from "../../reducer/ProductContext";

export const CartItem = ({
  id,
  brand,
  fastDelivery,
  image,
  price,
  title,
  quantity,
  inSaveForLater,
  hasDiscount,
  discount,
}: ProductItemType) => {
  const { dispatch } = useProductContext();

  const calculateDiscount = (price: number, discount: number) => {
    const finalPrice = price - price * (discount / 100);
    return finalPrice;
  };

  return (
    <VStack alignItems="flex-start" width="20rem" height="30rem" padding="2">
      <Image src={image} width="100%" height="50%" />
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
      <HStack>
        <Button
          onClick={() =>
            dispatch({
              type: "DECREASE_QUANTITY",
              payload: id,
            })
          }
          disabled={quantity === 0}
        >
          -
        </Button>
        <Text>{quantity}</Text>
        <Button
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              payload: id,
            })
          }
        >
          +
        </Button>
      </HStack>
      {inSaveForLater ? (
        <Button
          width="100%"
          colorScheme="teal"
          onClick={() => {
            dispatch({
              type: "REMOVE_SAVE_FOR_LATER",
              payload: id,
            });
          }}
        >
          Move to cart
        </Button>
      ) : (
        <Button
          width="100%"
          colorScheme="teal"
          onClick={() => {
            dispatch({
              type: "ADD_TO_SAVE_FOR_LATER",
              payload: id,
            });
          }}
        >
          Save for later
        </Button>
      )}
      {!inSaveForLater && (
        <Button
          width="100%"
          variant="ghost"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: id,
            })
          }
        >
          Remove from cart
        </Button>
      )}
    </VStack>
  );
};
