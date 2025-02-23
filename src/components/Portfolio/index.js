import React, { useState } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';

//holds static projects and their github links, the large text bodies are narratives for the projects and can be hidden at will via buttons
function Portfolio() {
  const [showNarrative, setShowNarrative] = useState(false);
  const [show2ndNarrative, setShow2ndNarrative] = useState(false);
  const [show3rdNarrative, setShow3rdNarrative] = useState(false);
  
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
            <Button style={{width:"100%"}} onClick={() => setShowNarrative(!showNarrative)} mt={4} colorScheme="blue">
              {showNarrative ? "Hide Narrative" : "Show Narrative"}
            </Button>

            {showNarrative && (
              <div style={{ fontSize: 'large',marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
                <Text>
                  The web application <strong>‘Find Your Pet’</strong> allows users to search for adoptable pets in their area using a zip code.
                  Originally created in 2022 with two peers during a coding certification class, it was built using vanilla <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
                </Text>
                <br></br>
                <Text>
                  I included this artifact in my portfolio to showcase my growth as a developer. The application has been rebuilt using the Next.js framework,
                  demonstrating my proficiency with front-end technologies and CSS design principles. A key improvement was securing API keys as environment variables,
                  whereas the original application had hardcoded credentials—a major security risk.
                </Text>
                <br></br>
                <Text>
                My planned course outcomes for this app enhancement were:
                <br></br>
                <ul style={{marginLeft:"20px"}}>
                  <li> Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent,
                     technically sound, and appropriately adapted to specific audiences and contexts.</li>
                     <li>
                     Demonstrate an ability to use well-founded and innovative techniques, skills, 
                     and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.
                     </li>
                </ul>
                <br></br>
                I am pleased to report my enhancements accomplish them both as I have included helpful inline comments that describe every crucial component and function of my app.
                 My decision to use <strong>Next.js</strong> demonstrates my ability to use innovative tools and skills to accomplish industry-specific goals.  
                 I would also like to say that my use of <strong>environmental variables</strong> to incorporate API security also achieves the following outcome:
                Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities,
                 mitigate design flaws, and ensure privacy and enhanced security of data and resources.  
                </Text>
                <br></br>
                <Text>
                  The enhanced application is fully responsive, maintaining functionality across different screen sizes. The experience also emphasized the importance
                  of clean, modular code. In the original version, all CSS was inline, and all logic was in a single script file, making the code difficult to read and maintain.
                  The improved version separates components into files and keeps styling in a dedicated CSS file, enhancing scalability and readability.
                </Text>
                <br></br>
                <Text>
                  One challenge I faced was handling environment variables in a client-side application, as my prior experience had been primarily on the server side.
                  Overcoming this helped me refine my understanding of secure development practices.
                </Text>
              </div>
            )}
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
            <Button style={{width:"100%"}} onClick={() => setShow2ndNarrative(!show2ndNarrative)} mt={4} colorScheme="blue">
              {show2ndNarrative ? "Hide Narrative" : "Show Narrative"}
            </Button>
            {show2ndNarrative && (
              <div style={{ fontSize: 'large', marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
              <Text>
              The <strong>Grand Strand System Application</strong> sets up an API infrastructure for a back-end application. The application would allow admins to create appointments, tasks and users within a system. This app was developed in the CS – 320 Software Testing course at SNHU and its main purpose was to develop good unit tests for codes.
              </Text>
              <br></br>
              <Text>
              This app was selected for the portfolio because it is a great indicator of my understanding of data structures and algorithms. 
              The original implementation used <strong>ArrayLists</strong> in each service to store the instance of objects being created by the system. 
              And during any CRUD operations within the code, loops were being used to iterate through the Lists to get to the desired object based on its id, which was passed as parameters in methods. 
              This approach caused the time complexity of the algorithm to be <strong>linear, O(n)</strong>, as the runtime of the code would increase with the size of the list. 
              This would cause a system wide lag in case of a huge data set, as every operation would require the loop to iterate over a huge data set to get to the desired object. 
              The enhancement replaced the <strong>List</strong> with <strong>Maps</strong>, which stored the object and its ID as key, value pairs. This lets me refactor the code to remove the dependency of loops and use map specific methods to get to the desired object based on the id parameter in the method. 
              The time complexity of the new algorithm is <strong>constant, O(1)</strong>, which means the operation will take the same amount of time regardless of the size of data set.
              </Text>
              <br></br>
              <Text>
              The desired outcomes of this enhancement were met due to the improved algorithm and industry standard test coverage:
                <ul style={{marginLeft:"20px"}}>
                  <li>Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices.</li>
                     <li>
                     Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.
                     </li>
                </ul>
              </Text>
              <br></br>
              <Text>
              My approach to enhancing the artifact was commenting out the existing code and using that as reference when implementing the new data structure. Updating the unit tests was a bit challenging as the new implementation broke a lot of tests. I had to introduce a few more unit tests as the new codes made the coverage fall below 80%. Working on this enhancement, I realized the importance of keeping time complexity in mind when developing code, and how vital it is to implement the right data structure for the task developers aim to accomplish via the code.
              </Text>
            </div>
            )}
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
            <Button onClick={() => setShow3rdNarrative(!show3rdNarrative)} mt={4} colorScheme="blue">
              {show3rdNarrative ? "Hide Narrative" : "Show Narrative"}
            </Button>
            {show3rdNarrative && (
              <div style={{ fontSize: 'large', marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
              <Text>
              The <strong>FindYourPet_BACKEND</strong> is a <strong>Spring Boot</strong> application that provides server-side functionality to the Find Your Pet website. This application was created as a part of the Databases category for the CS 499 course at SNHU.
              </Text>
              <br></br>
              <Text>
              This artifact is included in my ePortfolio because it demonstrates my ability to design databases and create a back-end server with <strong>API endpoints</strong> that allows for 
              <strong>CREATE, READ, UPDATE, DELETE</strong> operations via <strong>http protocol</strong>. It showcases my understanding of system design patterns and good API design. 
              This Spring Boot application creates two tables in a <strong>PostgreSQL</strong> database and stores user and animal information. It follows the three-layer architecture, <strong>Model-View-Controller</strong>, and follows industry standard coding practices such as password hashing, 
              using <strong>Object Relational Mapping</strong> via <strong>Data Transfer Objects</strong> and inline comments to make the code readable.
               This application was developed from scratch and does not have a prior artifact to improve upon. Compared to my previous backend work, the improvements I would like to showcase 
               are good documentation of code via inline comments and good method and variable names that follows camel casing. 
              </Text>
              <br></br>
              <Text>
              The desired outcomes of this enhancement were met:
                <ul style={{marginLeft:"20px"}}>
                  <li>Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science.</li>
                     <li>
                     	Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources.
                     </li>
                     <li>
                     Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts.
                     </li>
                     <li>
                     Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.
                     </li>
                </ul>
              </Text>
              <br></br>
              <Text>
              During the process of developing this artifact, I understood the importance of good relational database design, 
              I also learnt the value <strong>password hashing</strong> brings in terms of security. While developing, I introduced a lot of checkers that validate incoming data which lead me to adopt data validation checkers in all my future projects. Some challenges I faced were relational database design, as I wanted to keep an animal in the database for other users even after one user removed it. 
              I remedied it by allowing users to soft delete an animal from their profile only, and an endpoint that can run periodically, which deletes any animals in the table if they are not being used by any users. I also faced some issues with DTO mapping, as I was using the map struct library to generate boilerplate codes at first, but due to my decision to use BCrypt for password hashing, I had to take a manual approach and inject the hashing methods within my mapper.
              </Text>
            </div>

            )}
            </SimpleGrid>
          </div>
      </SimpleGrid>
    </main>
  );
}

export default Portfolio;

