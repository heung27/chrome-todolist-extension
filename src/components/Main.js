import { Checkbox } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from "react";

let nextId1 = 0;
let nextId2 = 0;
let nextId3 = 0;

export const Main = () => {
  const [ toDoInput, setToDoInput ] = useState('');

  const [ toDoItems, setToDoItems ] = useState([]);
  const [ inProgressItems, setInProgressItems ] = useState([]);
  const [ doneItems, setDoneItems ] = useState([]);

  const handleChange = e => {
    setToDoInput(e.target.value);
  };

  const handleAddToDo = e => {
    if (e.key === 'Enter') {
      setToDoItems([
        ...toDoItems,
        {
          id: nextId1++,
          text: toDoInput,
          state: 0
        }
      ]);
      setToDoInput('');
    }
  };

  const handleAddInProgress = e => {
    setInProgressItems([
      ...inProgressItems,
      {
        id: nextId2++,
        text: e.target.value,
        state: 1
      }
    ]);
    setToDoItems(toDoItems.filter(item => item.id != e.target.id));
  };

  const handleAddDone = e => {
    setDoneItems([
      ...doneItems,
      {
        id: nextId3++,
        text: e.target.value,
        state: 2
      }
    ]);
    setInProgressItems(inProgressItems.filter(item => item.id != e.target.id));
  };

  const handleAddInProgressFromDone = e => {
    setInProgressItems([
      ...inProgressItems,
      {
        id: nextId2++,
        text: e.target.value,
        state: 1
      }
    ]);
    setDoneItems(doneItems.filter(item => item.id != e.target.id));
  };

  const handleRemoveToDo = e => {
    setToDoItems(toDoItems.filter(item => item.id != e.target.id));
  };

  const handleRemoveInProgress = e => {
    setInProgressItems(inProgressItems.filter(item => item.id != e.target.id));
  };

  const handleRemoveDone = e => {
    setDoneItems(doneItems.filter(item => item.id != e.target.id));
  };

  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<AddIcon color='gray.300' />}
        />
        <Input 
          type='text' 
          autoComplete="off"
          variant="filled" 
          placeholder='할 일을 입력하세요.' 
          backgroundColor={"blackAlpha.100"}
          value={toDoInput}
          onChange={handleChange}
          onKeyPress={handleAddToDo}
        />
      </InputGroup>

      <Heading as='h6' size='sx' mt='4'>
        <ChevronDownIcon boxSize={5}></ChevronDownIcon>
        To Do
      </Heading>
      <Container px={1}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          mt={1}
          spacing={0}
          align="stretch"
        >
          {toDoItems.map(item => (
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.text}
              py={2} 
              px={3}
              // bgColor={"gray.100"}
              onChange={handleAddInProgress}
            >
              <Grid
                templateColumns='repeat(14, 1fr)'
                gap={2}
              >
                <GridItem colSpan={13}>
                  {item.text}
                </GridItem>
                <GridItem colSpan={1}>
                  <SmallCloseIcon 
                    className="delete-icon"
                    key={item.id}
                    id={item.id}
                    viewBox='0 3 14 14'
                    onClick={handleRemoveToDo}
                    display="none"
                  />
                </GridItem>
                </Grid>
            </Checkbox>
          ))}
        </VStack>
      </Container>

      <Heading as='h6' size='sx' mt='4'>
        <ChevronDownIcon boxSize={5}></ChevronDownIcon>
        In Progress
      </Heading>
      <Container px={1}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          mt={1}
          spacing={0}
          align="stretch"
        >
          {inProgressItems.map(item => (
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.text}
              py={2} 
              px={3}
              isIndeterminate
              colorScheme="linkedin" 
              defaultChecked
              onChange={handleAddDone}
            >
              <Grid
                templateColumns='repeat(14, 1fr)'
                gap={2}
              >
                <GridItem colSpan={13}>
                  {item.text}
                </GridItem>
                <GridItem colSpan={1}>
                  <SmallCloseIcon 
                    className="delete-icon"
                    key={item.id}
                    id={item.id}
                    viewBox='0 2.5 16 16'
                    onClick={handleRemoveInProgress}
                    display="none"
                  />
                </GridItem>
                </Grid>
            </Checkbox>
          ))}
        </VStack>
      </Container>

      <Heading as='h6' size='sx' mt='4'>
        <ChevronDownIcon boxSize={5}></ChevronDownIcon>
        Done
      </Heading>
      <Container px={1}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          mt={1}
          spacing={0}
          align="stretch"
        >
          {doneItems.map(item => (
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.text}
              py={2} 
              px={3}
              colorScheme="gray"
              defaultChecked
              onChange={handleAddInProgressFromDone}
            >
              <Grid
                templateColumns='repeat(14, 1fr)'
                gap={2}
              >
                <GridItem colSpan={13}>
                  {item.text}
                </GridItem>
                <GridItem colSpan={1}>
                  <SmallCloseIcon 
                    className="delete-icon"
                    key={item.id}
                    id={item.id}
                    viewBox='0 2.5 16 16'
                    onClick={handleRemoveDone}
                    display="none"
                  />
                </GridItem>
                </Grid>
            </Checkbox>
          ))}
        </VStack>
      </Container>
    </div>
  );
};
