import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "red.400",
};

const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(reader.result);
    };
  };

  return (
    <Container
      h={["130vh", "118vh", "118vh", "105vh"]}
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
        Sign Up Now !
      </Heading>
      <Box display={"flex"} justifyContent={"center"} m={"7"}>
        <Avatar src={imagePrev} size={"2xl"} />
      </Box>
      <form action="">
        <VStack justifyContent={"start"}>
          <label htmlFor="username">Username</label>
          <Input
            required
            style={{ borderColor: "black" }}
            type="text"
            id="username"
            placeholder="aaa"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            marginBottom={"3vh"}
          />
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
          <label htmlFor="image">Choose Avatar</label>
          <Input
            accept="image/*"
            required
            type="file"
            id="image"
            focusBorderColor="blackAlpha.400"
            css={fileUploadStyle}
            onChange={changeImageHandler}
          />
          <VStack py={"4"} spacing={4} width={"100%"}>
            <Button type="submit" colorScheme="pink">
              Sign Up
            </Button>
            <Box>
              Already Signed In?{" "}
              <Link to="/login">
                <Button variant={"link"} size={"md"}>
                  Login
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

export default Register;
