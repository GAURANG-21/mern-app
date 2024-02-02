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

const RequestUs = () => {
  const [message, setMessage] = useState("");

  return (
    <Container
      h={"60vh"}
      marginTop={"28"}
      boxShadow="dark-lg"
      rounded="10%"
      p={"8"}
    >
      <VStack>
        <Heading>Request New Course</Heading>
        <form>
          <label htmlFor="name">Name</label>
          <Input placeholder="Abc" id="name" focusBorderColor="yellow" />
          <label htmlFor="email">Email Address</label>
          <Input
            placeholder="abc@gmail.com"
            id="email"
            focusBorderColor="yellow"
          />
          <Text>Course</Text>
          <Textarea
            value={message}
            placeholder={"What do you want in the course?"}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></Textarea>
        </form>
        <Button type="submit" colorScheme="yellow" my={"3"}>
          Send Mail
        </Button>
        <Box>
          See available Courses!{" "}
          <Link to="/contactUs">
            <Button variant={"link"}>Click</Button> Now!
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default RequestUs;
