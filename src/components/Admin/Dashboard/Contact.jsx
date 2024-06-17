// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   Input,
//   IconButton,
//   StackDivider,
//   FormControl,
//   FormLabel,
//   Flex,
// } from '@chakra-ui/react';
// import { MdAdd, MdDelete } from 'react-icons/md';
// import Sidebar from '../Sidebar/Sidebar';

// const Contact = () => {
//   const [contacts, setContacts] = useState([
//     { type: 'Phone', value: '+1234567890' },
//     { type: 'Email', value: 'example@example.com' },
//   ]);
//   const [newContactType, setNewContactType] = useState('');
//   const [newContactValue, setNewContactValue] = useState('');

//   const addContact = () => {
//     if (newContactType && newContactValue) {
//       setContacts([
//         ...contacts,
//         { type: newContactType, value: newContactValue },
//       ]);
//       setNewContactType('');
//       setNewContactValue('');
//     }
//   };

//   const deleteContact = (index) => {
//     const updatedContacts = [...contacts];
//     updatedContacts.splice(index, 1);
//     setContacts(updatedContacts);
//   };

//   return (
//     <Box p={4}>
//     <Flex>
//       <Box mr={8}>
//         {/* Assuming Sidebar component */}
//         <Sidebar />
//       </Box>
//       <Box flex={1} ml={4}>
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Contact Information
//         </Text>
  
//         {/* Default Contacts */}
//         <VStack spacing={4} align="flex-start" divider={<StackDivider />} mb={4}>
//           {contacts.map((contact, index) => (
//             <HStack key={index} spacing={4}>
//               <Text fontWeight="bold">{contact.type}:</Text>
//               <Text>{contact.value}</Text>
//               <IconButton
//                 icon={<MdDelete />}
//                 aria-label="Delete Contact"
//                 onClick={() => deleteContact(index)}
//                 variant="ghost"
//                 colorScheme="red"
//               />
//             </HStack>
//           ))}
//         </VStack>
  
//         {/* Add New Contact Section */}
//         <FormControl>
//           <FormLabel>Add New Contact:</FormLabel>
//           <HStack spacing={4}>
//             <Input
//               placeholder="Type (e.g., Phone, Email)"
//               value={newContactType}
//               onChange={(e) => setNewContactType(e.target.value)}
//               w={500}
//             />
//             <Input
//               placeholder="Value (e.g., +1234567890, example@example.com)"
//               value={newContactValue}
//               onChange={(e) => setNewContactValue(e.target.value)}
//             />
//             <Button
//               leftIcon={<MdAdd />}
//               colorScheme="blue"
//               onClick={addContact}
//               w="150px"
//             >
//               Add
//             </Button>
//           </HStack>
//         </FormControl>
//       </Box>
//     </Flex>
//   </Box>
  
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  IconButton,
  StackDivider,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdAdd, MdDelete } from 'react-icons/md';
import Sidebar from '../Sidebar/Sidebar';

const Contact = () => {
  const [contacts, setContacts] = useState([
    { type: 'Phone', value: '+1234567890' },
    { type: 'Email', value: 'example@example.com' },
  ]);
  const [newContactType, setNewContactType] = useState('');
  const [newContactValue, setNewContactValue] = useState('');

  const addContact = () => {
    if (newContactType && newContactValue) {
      setContacts([
        ...contacts,
        { type: newContactType, value: newContactValue },
      ]);
      setNewContactType('');
      setNewContactValue('');
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <Box p={4} bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Flex>
        <Box mr={8}>
          {/* Assuming Sidebar component */}
          <Sidebar />
        </Box>
        <Box flex={1} ml={4} p={6} bg={useColorModeValue('white', 'gray.800')} shadow="lg" borderRadius="lg">
          <Heading as="h1" size="xl" mb={6} textAlign="center">
            Contact Information
          </Heading>
          
          {/* Default Contacts */}
          <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />} mb={6}>
            {contacts.map((contact, index) => (
              <HStack key={index} spacing={4} justify="space-between">
                <Box>
                  <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('gray.700', 'white')}>
                    {contact.type}:
                  </Text>
                  <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
                    {contact.value}
                  </Text>
                </Box>
                <IconButton
                  icon={<MdDelete />}
                  aria-label="Delete Contact"
                  onClick={() => deleteContact(index)}
                  variant="outline"
                  colorScheme="red"
                  size="sm"
                />
              </HStack>
            ))}
          </VStack>

          {/* Add New Contact Section */}
          <FormControl>
            <FormLabel fontSize="lg" fontWeight="bold">
              Add New Contact
            </FormLabel>
            <HStack spacing={4}>
              <Input
                placeholder="Type (e.g., Phone, Email)"
                value={newContactType}
                onChange={(e) => setNewContactType(e.target.value)}
                bg={useColorModeValue('white', 'gray.700')}
                w="30%"
              />
              <Input
                placeholder="Value (e.g., +1234567890, example@example.com)"
                value={newContactValue}
                onChange={(e) => setNewContactValue(e.target.value)}
                bg={useColorModeValue('white', 'gray.700')}
                w="50%"
              />
              <Button
                leftIcon={<MdAdd />}
                colorScheme="blue"
                onClick={addContact}
                w="20%"
              >
                Add
              </Button>
            </HStack>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
