import { Checkbox } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, SmallCloseIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export const ToDoItem = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<AddIcon color='gray.300' />}
        />
        <Input type='text' variant="filled" placeholder='할 일을 입력하세요.' backgroundColor={"blackAlpha.100"} />
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
          <Checkbox 
            py={2} 
            px={3}
          >
            <Grid
              templateColumns='repeat(14, 1fr)'
              gap={2}
            >
              <GridItem colSpan={13}>
                Spring WebFlux 공부하기
              </GridItem>
              <GridItem colSpan={1}>
                {/* <SmallCloseIcon></SmallCloseIcon> */}
              </GridItem>
              </Grid>
          </Checkbox>
          <Checkbox 
            py={2} 
            px={3}
            backgroundColor={"gray.100"}
          >
            <Grid
              templateColumns='repeat(14, 1fr)'
              gap={2}
            >
              <GridItem colSpan={13}>
                운동하기
              </GridItem>
              <GridItem colSpan={1}>
                <SmallCloseIcon viewBox='0 2.5 16 16'></SmallCloseIcon>
              </GridItem>
            </Grid>
          </Checkbox>
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
          <Checkbox 
            py={2} 
            px={3}
            isIndeterminate
            colorScheme="linkedin" 
            defaultChecked
          >
            <Grid
              templateColumns='repeat(14, 1fr)'
              gap={2}
            >
              <GridItem colSpan={13}>
                사이드 프로젝트 개발하기
              </GridItem>
            </Grid>
          </Checkbox>
          <Checkbox 
            py={2} 
            px={3}
            isIndeterminate
            colorScheme="linkedin" 
            defaultChecked
          >
            청소하기
          </Checkbox>
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
          <Checkbox
            py={2}
            px={3}
            colorScheme="gray"
            defaultChecked
          >
            <Text color={"GrayText"}>
              이펙티브 자바 정리하기
            </Text>
          </Checkbox>
        </VStack>
      </Container>
    </div>
  );
};
