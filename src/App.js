import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <Grid gap={4}>
          <GridItem>
            <Header />
          </GridItem>
          <GridItem>
            <Main />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
