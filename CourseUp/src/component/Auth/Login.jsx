import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      h={["75vh", "72vh", "70vh", "68vh"]}
      marginTop={["6vh", "10vh"]}
      boxShadow="dark-lg"
      p={["12", "6"]}
      rounded="15%"
    >
      <Heading
        marginBottom={"3vh"}
        fontSize={["2em", "2.5em"]}
        textAlign={"center"}
        pt={["0", "5"]}
      >
        Welcome to CourseUp
      </Heading>
      <form action="">
        <VStack justifyContent={"start"}>
          <label htmlFor="email">Email Address</label>
          <Input
            required
            style={{ borderColor: "black" }}
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            marginBottom={"3vh"}
          />
          <label htmlFor="email">Password</label>
          <Input
            required
            style={{ borderColor: "black" }}
            type="password"
            id="password"
            placeholder="****"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            focusBorderColor="blackAlpha.400"
          />
          <VStack py={"4"} spacing={4} width={"100%"}>
            <Link to="/forgetPassword">
              <Button size={"sm"} variant={"link"}>
                Forget Password
              </Button>
              <br />
            </Link>
            <Button type="submit" colorScheme="pink">
              Login
            </Button>
            <Box>
              New User?{" "}
              <Link to="/register">
                <Button variant={"link"} size={"sm"}>
                  Sign up
                </Button>
              </Link>{" "}
              here
            </Box>
          </VStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
