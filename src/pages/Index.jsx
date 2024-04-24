// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Button, Image, Container, Heading, VStack } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="#33FDFF" p={4} color="white">
        <VStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTcxMzk4ODI5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Real Estate Professional" boxSize="150px" borderRadius="full" />
          <Heading as="h1" size="xl" fontWeight="bold">
            We Buy Houses
          </Heading>
          <Text fontSize="xl" fontFamily="Helvetica">
            We'll connect you with a local real estate professional to buy your home quickly and hassle-free. You could have your house sold in days, regardless of the condition or your financial situation. We'll send our investor to come to view your home and give you a no-obligation cash offer.
          </Text>
          <Button rightIcon={<FaPhoneAlt />} colorScheme="teal" variant="solid">
            Contact Us Now
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
