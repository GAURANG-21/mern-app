import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState();

  return (
    <Container py={"20"} height={"82vh"}>
      <form action="">
        <Heading
          my="16"
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        >
          Forgot Password
        </Heading>
      </form>
      <VStack spacing={8}>
        <Input
          required
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="abc@gmail.com"
          type="email"
          focusBorderColor="yellow.500"
        />
        <Button type="submit" w={"80%"} colorScheme={"yellow"}>
          Send Reset Link
        </Button>
      </VStack>
    </Container>
  );
};

export default ForgetPassword;
