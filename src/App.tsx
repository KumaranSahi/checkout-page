import "./App.css";
import { Navbar } from "./components";
import { ProductsaPage, CartsPage } from "./pages";
import { Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
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
