



// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   Stack,
//   Heading,
//   Flex,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { CheckCircleIcon } from '@chakra-ui/icons';
// import Sidebar from '../Sidebar/Sidebar';

// const Coupon = () => {
//   const [generated, setGenerated] = useState([]);
//   const [length, setLength] = useState(5); // State for coupon length
//   const [count, setCount] = useState(5); // State for number of codes
//   const [possible, setPossible] = useState(
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//   );
//   const [showThumbsUp, setShowThumbsUp] = useState(false);

//   const generateCodes = () => {
//     const codes = [];
//     for (let i = 0; i < count; i++) {
//       codes.push(generateCode());
//     }
//     setGenerated(codes);
//     setShowThumbsUp(true); // Show thumbs-up animation on generating new codes
//     setTimeout(() => {
//       setShowThumbsUp(false); // Hide thumbs-up animation after 2 seconds
//     }, 2000);
//   };

//   const generateCode = () => {
//     let text = "";
//     for (let i = 0; i < length; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   };

//   const handleGenerate = (e) => {
//     e.preventDefault();
//     generateCodes();
//   };

//   const scratchCoupon = (index) => {
//     const newGenerated = [...generated];
//     newGenerated[index] = "You get an extra 20% discount!";
//     setGenerated(newGenerated);
//   };

//   return (
//     <Box maxW="lg" mx="auto" mt="8" p="6" bg={useColorModeValue("white", "gray.800")} shadow="lg" borderRadius="lg">
//       <Flex direction="column" align="center">
//         <Heading as="h1" size="xl" mb="6" textAlign="center">
//           Coupon Generator
//         </Heading>
//         <form onSubmit={handleGenerate} style={{ width: "100%" }}>
//           <Stack spacing="4">
//             <FormControl>
//               <FormLabel>How long should each code be?</FormLabel>
//               <Input
//                 type="number"
//                 min="2"
//                 placeholder="Length of each code"
//                 value={length}
//                 onChange={(e) => setLength(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>How many codes do you want?</FormLabel>
//               <Input
//                 type="number"
//                 min="1"
//                 placeholder="Number of codes"
//                 value={count}
//                 onChange={(e) => setCount(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Possible characters</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Possible characters"
//                 defaultValue={possible}
//                 onChange={(e) => setPossible(e.target.value)}
//               />
//             </FormControl>
//             <Button colorScheme="blue" type="submit" w="full" mt="4">
//               Generate
//             </Button>
//           </Stack>
//         </form>
//         <Stack spacing="4" mt="8" w="full">
//           <AnimatePresence>
//             {showThumbsUp && (
//               <motion.div
//                 key="thumbs-up"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.5 }}
//                 transition={{ duration: 0.5 }}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   fontSize: '4rem',
//                 }}
//               >
//                 <CheckCircleIcon color="green.500" />
//               </motion.div>
//             )}
//           </AnimatePresence>
//           {generated.map((coupon, index) => (
//             <Box
//               key={index}
//               borderWidth="1px"
//               borderRadius="lg"
//               p="4"
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               bg={useColorModeValue("gray.50", "gray.700")}
//             >
//               <Text fontSize="lg" fontWeight="bold">
//                 {coupon}
//               </Text>
//               <Button colorScheme="teal" onClick={() => scratchCoupon(index)}>
//                 Scratch
//               </Button>
//             </Box>
//           ))}
//         </Stack>
//       </Flex>
//     </Box>
//   );
// };

// export default Coupon;


import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Sidebar from '../Sidebar/Sidebar';

const Coupon = () => {
  const [generated, setGenerated] = useState([]);
  const [length, setLength] = useState(5); // State for coupon length
  const [count, setCount] = useState(5); // State for number of codes
  const [possible, setPossible] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  );
  const [showThumbsUp, setShowThumbsUp] = useState(false);

  const generateCodes = () => {
    const codes = [];
    for (let i = 0; i < count; i++) {
      codes.push(generateCode());
    }
    setGenerated(codes);
    setShowThumbsUp(true); // Show thumbs-up animation on generating new codes
    setTimeout(() => {
      setShowThumbsUp(false); // Hide thumbs-up animation after 2 seconds
    }, 2000);
  };

  const generateCode = () => {
    let text = "";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generateCodes();
  };

  const scratchCoupon = (index) => {
    const newGenerated = [...generated];
    newGenerated[index] = "You get an extra 20% discount!";
    setGenerated(newGenerated);
  };

  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Flex flex={1} direction="column" align="center" justify="center" p={6} bg={useColorModeValue("white", "gray.800")} shadow="lg" borderRadius="lg" minH="100vh">
        <Box maxW="lg" w="full" p="6" bg={useColorModeValue("white", "gray.800")} shadow="lg" borderRadius="lg">
          <Flex direction="column" align="center">
            <Heading as="h1" size="xl" mb="6" textAlign="center">
              Coupon Generator
            </Heading>
            <form onSubmit={handleGenerate} style={{ width: "100%" }}>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>How long should each code be?</FormLabel>
                  <Input
                    type="number"
                    min="2"
                    placeholder="Length of each code"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>How many codes do you want?</FormLabel>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Number of codes"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Possible characters</FormLabel>
                  <Input
                    type="text"
                    placeholder="Possible characters"
                    defaultValue={possible}
                    onChange={(e) => setPossible(e.target.value)}
                  />
                </FormControl>
                <Flex justify="center" mt={4}>
                  <Button size="sm" colorScheme="blue" type="submit">
                    Generate
                  </Button>
                </Flex>
              </Stack>
            </form>
            <Stack spacing="4" mt="8" w="full">
              <AnimatePresence>
                {showThumbsUp && (
                  <motion.div
                    key="thumbs-up"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '4rem',
                    }}
                  >
                    <CheckCircleIcon color="green.500" />
                  </motion.div>
                )}
              </AnimatePresence>
              {generated.map((coupon, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bg={useColorModeValue("gray.50", "gray.700")}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    {coupon}
                  </Text>
                  <Button colorScheme="teal" onClick={() => scratchCoupon(index)}>
                    Scratch
                  </Button>
                </Box>
              ))}
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Coupon;
