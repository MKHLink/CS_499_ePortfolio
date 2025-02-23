import React,{useEffect, useState} from "react";
import { SimpleGrid,Text,Box } from '@chakra-ui/react'

//holds the profile picture and a shor self summery
function About(){

  const [avatarUrl, setAvatarUrl] = useState('');
  const [userInfo, setUserInfo] = useState('');

  useEffect(()=>{
    fetch(`https://api.github.com/users/MKHLink`)
    .then(response => response.json())
    .then(data=>{
      setAvatarUrl(data.avatar_url);
      setUserInfo({
        name: data.name,
        bio: data.bio
      });
    })
    .catch(error=>console.log(error));
  },[]);

    return(
       <main className="about" >
        <SimpleGrid columns={2} spacing={2}>
          <img src={avatarUrl} style={{width:"50%"}}  alt="profile-pic"/>
          <p>
            {userInfo.name}
            <br/>
            {userInfo.bio}
            </p>
        </SimpleGrid>
        <Box p="4" maxW="800px">
        <SimpleGrid columns={1} spacing={4}>
          <Text fontSize="xl" textAlign="justify">
          I attended Southern New Hampshire University and enrolled in the robust and rigorous Computer Science program. My time there was transformative as a professional software developer, allowing me to hone my technical skills, develop and strengthen deep computer science fundamentals and be collaborative with my peers. Completing various coursework and developing this ePortfolio have helped me showcase my strengths, professional values and display the value I bring to a team. The artifacts in this ePortfolio display my range of expertise in the field of computer science. The Find Your Pet application highlights my proficiency in developing front end applications and UI design skills, while the Grand Strand System Application demonstrates my attention to detail when selecting the proper data structures for an application and being mindful of run-time complexities when creating algorithms. The Find Your Pet Backend application illustrates my ability to build robust, scalable and secure backend systems from scratch with well designed databases. Together these artifacts aim to provide a highlight of my strengths as a software developer and my expertise in solving technical problems.
          </Text>
          <Text fontSize="xl" textAlign="justify">
          One of my most memorable experiences was working on the Find Your Pet website with peers in a collaborative environment. I worked closely with other developers to design the user interface and implement functionality features with HTML, CSS and JavaScript. During my capstone course, I enhanced this application using Next.js, demonstrating my ability to adopt cutting edge technologies and my ability to grasp new frameworks. This enhancement highlights my commitment to developing clean, modular codes which significantly improve scalability and maintainability. 
          </Text>
          <Text fontSize="xl" textAlign="justify">
          This ePortfolio also displays my understanding of data structures and algorithms, as I worked on projects like the Grand Strand System Application. Initially, ArrayLists were being used for data storage and retrieval, which at times would lead to inefficient CRUD operations. My enhancement work on this application involved refactoring the codebase to use HashMaps instead, which drastically improved the time complexity of the algorithms from O(n) to O(1). This experience has made me understand the importance of selecting the right data structures, so applications are well optimized and performant. 
          </Text>
          <Text fontSize="xl" textAlign="justify">
          As I progressed through the program at SNHU, database design and working with database query languages has been an integral part of my development as a professional. Developing the back-end server application for the Find Your Pet application form ground-up has been transformative, and it has reinforced my skills and ability to design and develop relational databases with following the Model-View-Controller architecture. By implementing Object-Relational Mapping and Data Transfer Objects, I ensure my backend followed industry best practices and I was able to use my professional experience from my job to utilize SpringBoot as my chosen framework to further demonstrate my expertise. 
          </Text>
          <Text fontSize="xl" textAlign="justify">
          My role as a Full Stack Developer at FedEx combined with the valuable experience at SNHU greatly enhanced my ability to collaborate and work closely with peers in a team environment. Through projects like ‘Find Your Pet’ and my day-to-day work at FedEx, it helped me reinforce my ability to communicate with stakeholders through documentation, technical discussions and live demonstrations of projects. These experiences taught me the importance of good documentation and effective communication. Furthermore, my experience in professional setting has solidified my ability to convey technical solutions and procedures to both technical and non-technical audiences. 
          </Text>
          <Text fontSize="xl" textAlign="justify">
          Security has also been a cornerstone of my work and learning. In all my enhancements, I addressed critical security flaws in the applications by removing hardcoded API keys with environment variables, mitigating vulnerabilities. In the backend application, I implemented password hashing and data validators ensuring data privacy and integrity. My commitment to application security also stems from my professional work where I am responsible for maintaining best practices for secure CI/CD pipelines and conduct integration and unit testing using JUnit and Mockito.
          </Text>
          <Text fontSize="xl" textAlign="justify">
	          As I move forward in my career, getting my bachelor’s degree from SNHU has provided me with priceless knowledge and experience, which will help me make meaningful contributions to the field of computer science. It further solidified my passion for software development and this ePortfolio serves as a testament to my growth as a developer and my commitment to continuous learning. 
          </Text>
          <br></br>
        </SimpleGrid>
      </Box>
       </main>
    );
}

export default About;

