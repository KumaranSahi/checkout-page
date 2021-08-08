import "./App.css";
import { Navbar, FilterDrawer } from "./components";
import { ProductsaPage, CartsPage } from "./pages";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/cart" component={CartsPage} />
          <Route path="/" component={ProductsaPage} />
        </Switch>
      </Box>
    </div>
  );
}

export default App;
