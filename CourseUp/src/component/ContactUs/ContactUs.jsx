import {
  Container,
  VStack,
  Heading,
  Input,
  Textarea,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [message, setMessage] = useState("");

  return (
    <Container
      h={["75vh", "70vh", "65vh"]}
      marginTop={"28"}
      boxShadow="dark-lg"
      rounded="10%"
      p={"8"}
    >
      <VStack>
        <Heading>Contact Us</Heading>
        <form>
          <label htmlFor="name">Name</label>
          <Input placeholder="Abc" id="name" focusBorderColor="yellow" />
          <label htmlFor="email">Email Address</label>
          <Input
            placeholder="abc@gmail.com"
            id="email"
            focusBorderColor="yellow"
          />
          <Text>Message</Text>
          <Textarea
            value={message}
            placeholder={"Enter your message...."}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></Textarea>
        </form>
        <Button type="submit" colorScheme="yellow" my={"3"}>
          Send Mail
        </Button>
        <Box>
          Request for a course?{" "}
          <Link to="/requestUs">
            <Button variant={"link"}>Request</Button> Now!
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default ContactUs;
