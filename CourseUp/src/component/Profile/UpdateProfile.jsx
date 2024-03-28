import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container py={"10"} minH={"74vh"}>
      <Heading
        textTransform={"uppercase"}
        textAlign={["center", "left"]}
        my={"8"}
      >
        Change profile
      </Heading>
      <form>
        <VStack spacing={"8"}>
          <Input
            value={name}
            placeholder="Enter name"
            type="password"
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            placeholder="Enter email"
            type="password"
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Button
            width={"full"}
            colorScheme="yellow"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Change password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
