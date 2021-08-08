import "./App.css";
import { Navbar, FilterDrawer } from "./components";
import { ProductsaPage } from "./pages";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const openDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <div className="App">
      <Navbar openDrawer={openDrawer} />
      <FilterDrawer isOpen={open} onClose={openDrawer} />
      <Box marginTop="4rem">
        <ProductsaPage />
      </Box>
    </div>
  );
}

export default App;
