import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { ToDoItem } from "./components/ToDoItem";
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
            <ToDoItem />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
