import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <Container py={"10"} minH={"74vh"}>
      <Heading
        textTransform={"uppercase"}
        textAlign={["center", "left"]}
        my={"8"}
      >
        Change password
      </Heading>
      <form>
        <VStack spacing={"8"}>
          <Input
            required
            value={password}
            placeholder="Enter old password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="yellow.500"
          />
          <Input
            required
            value={newPassword}
            placeholder="Enter new password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
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

export default ChangePassword;
