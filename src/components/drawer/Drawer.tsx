import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const FilterDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (arg0: boolean) => void;
}) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={() => onClose(false)}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
