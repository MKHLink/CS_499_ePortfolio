import React, {  } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';

function Portfolio() {
  return (
    <main>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1}} spacing={4} style={{marginTop:'20px',marginBottom:'40px', marginRight:'20px',marginLeft:'10px'}}>
          <div>
            <p style={{fontFamily:'inherit',fontSize:'25px', color:'white',textAlign:'center', marginBottom:'10px'}}>
              Software design and engineering 
            </p>
            <SimpleGrid columns={{ base: 2, md: 1, lg: 2, sm:1}} spacing={2}>
            <Card style={{ overflow: 'hidden' }} variant='outline'>
              <CardBody>
                <Heading size='md'>Original Build</Heading>
                <Text py='3'>Find Your Pet</Text>
                <Text py='2'>A website users can utilize to find available pets in their surrounding area based on zip code</Text>
                <Text py='2'>Made with: HTML,CSS,JavaScript </Text>
              </CardBody>
              <CardFooter>
                <span>
                  <a style={{ fontSize: 'large' }} className="links" href="https://github.com/MKHLink/Find_Your_Pet" target="_blank" rel="noreferrer">GitHub</a>
                  <br></br>
                  <a style={{ fontSize: 'large' }} className="links" href="https://mkhlink.github.io/Find_Your_Pet/" target="_blank" rel="noreferrer">Deployed Application</a>
                </span>
              </CardFooter>
            </Card>

            <Card style={{ overflow: 'hidden' }} variant='outline'>
              <CardBody>
                <Heading size='md'>Enhanced Build</Heading>
                <Text py='3'>Find Your Pet 2.0</Text>
                <Text py='2'>This build includes my enhancemet to the original artifact</Text>
                <Text py='2'>Made with: Next.JS, CSS </Text>
              </CardBody>
              <CardFooter>
                <span>
                  <a style={{ fontSize: 'large' }} className="links" href="https://github.com/MKHLink/Find_your_pet-2.0" target="_blank" rel="noreferrer">GitHub</a>
                  <br></br>
                  <a style={{ fontSize: 'large' }} className="links" href="https://find-your-pet-2-0-g9s1cgpnn-mkhlinks-projects.vercel.app/" target="_blank" rel="noreferrer">Deployed Application</a>
                </span>
              </CardFooter>
            </Card>
            </SimpleGrid>
          </div>

          <div>
          <p style={{fontFamily:'inherit',fontSize:'25px', color:'white',textAlign:'center', marginBottom:'10px'}}>
            Algorithms and data structure 
            </p>
            <SimpleGrid columns={{ base: 2, md: 1, lg: 2,sm:1}} spacing={2}>
            <Card style={{ overflow: 'hidden' }} variant='outline'>
              <CardBody>
                <Heading size='md'>Original Build</Heading>
                <Text py='3'>Grand Strand Systems Application Backend</Text>
                <Text py='2'>A backend for an appointement scheduling server</Text>
                <Text py='2'>Made with: Java </Text>
              </CardBody>
              <CardFooter>
                <span>
                  <a style={{ fontSize: 'large' }} className="links" href="https://github.com/MKHLink/Grand_Strand_Systems_Application/tree/feature/O(n)" target="_blank" rel="noreferrer">GitHub</a>
                </span>
              </CardFooter>
            </Card>

            <Card style={{ overflow: 'hidden' }} variant='outline'>
              <CardBody>
                <Heading size='md'>Enhanced Build</Heading>
                <Text py='3'>Grand Strand Systems Application Backend</Text>
                <Text py='2'>This build includes my enhancemet to the original artifact, improves alogorithm time complexity from Linear to Constant via updates to the data structure</Text>
                <Text py='2'>Made with: Java </Text>
              </CardBody>
              <CardFooter>
                <span>
                  <a style={{ fontSize: 'large' }} className="links" href="https://github.com/MKHLink/Grand_Strand_Systems_Application/tree/feature/n1" target="_blank" rel="noreferrer">GitHub</a>
                </span>
              </CardFooter>
            </Card>
            </SimpleGrid>
          </div>

          <div>
          <p style={{fontFamily:'inherit',fontSize:'25px', color:'white',textAlign:'center', marginBottom:'10px'}}>
          Databases 
            </p>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 1,sm:1}} spacing={2}>
            <Card style={{ overflow: 'hidden' }} variant='outline'>
              <CardBody>
                <Heading size='md'>Original Build made from the ground up</Heading>
                <Text py='3'>Find Your Pet Backend</Text>
                <Text py='2'>A backend server that aims to provide a database and server functionality for the Find Your Pet webpage</Text>
                <Text py='2'>Made with: Java, SpringBoot, PostgreSQL </Text>
              </CardBody>
              <CardFooter>
                <span>
                  <a style={{ fontSize: 'large' }} className="links" href="https://github.com/MKHLink/Find_Your_Pet_Backend" target="_blank" rel="noreferrer">GitHub</a>
                </span>
              </CardFooter>
            </Card>
            </SimpleGrid>
          </div>
      </SimpleGrid>
    </main>
  );
}

export default Portfolio;
