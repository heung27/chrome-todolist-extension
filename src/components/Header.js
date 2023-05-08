import { Heading } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'
import { Image, Box } from '@chakra-ui/react'

export const Header = () => {
  return(
    <Heading size='lg' mt='2'>
      <Grid
        templateColumns='repeat(14, 1fr)'
        gap={6}
      >
        <GridItem colSpan={12}>
          <HamburgerIcon mr={2} viewBox='0 1 24 24'></HamburgerIcon>
            To Do List
        </GridItem>
        <GridItem colSpan={2}>
          <Box pt={1.5}>
            <Image src='/images/calender.png' boxSize='24px'></Image>
          </Box>
        </GridItem>
      </Grid>
    </Heading>
  );
}
