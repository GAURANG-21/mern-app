import {
  Container,
  Stack,
  Avatar,
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { RiSecurePaymentFill } from "react-icons/ri";
import data from "../../assets/docs/termsAndConditions";

const About = () => {
  return (
    <Container
      maxWidth={"container.lg"}
      boxShadow={"dark-lg"}
      mt="15vh"
      rounded={"2%"}
      p={"10"}
    >
      <Heading textAlign={["center", "left"]} ml={"6"} fontFamily={"body"}>
        About Us
      </Heading>
      <Stack
        direction={["column", "row"]}
        justifyContent={["center", "flex-start"]}
        mb={"4vh"}
        spacing={"30"}
      >
        <VStack mt={"10"}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/124430305?s=400&u=4c5aaff50956949483161a9802c689961613c9e5&v=4"
            boxSize={["40", "48"]}
            boxShadow={"dark-lg"}
          />
          <Text fontFamily={"sans-serif"} opacity={0.8} size={"sm"}>
            Co-founder
          </Text>
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
          <Heading size={["md", "xl"]}>Gaurang Agarwal</Heading>
          <Text textAlign={["center", "left"]} size={["sm", "md"]}>
            I thrive in the realm of web development, fueled by a passion for
            technology, and possess a concise understanding of Data Structures
            and Algorithms (DSA){" "}
          </Text>
        </VStack>
      </Stack>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        mb={"4vh"}
      >
        <Text width={["100%", "72%"]} textAlign={["center", "left"]} pl={"5"}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Button variant={"link"} colorScheme="yellow">
          Checkout Our Plan
        </Button>
      </Stack>
      <Box
        alignContent={"center"}
        position={"relative"}
        left={"4%"}
        mb={"4"}
        h={["40vh", "60vh"]}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/4mHq6Y7JSmg"
          title="Nintendo Switch - OLED Model - Announcement Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            top: 0,
            left: 0,
            width: "95%",
            height: "100%",
          }}
        ></iframe>
      </Box>
      <Box overflow={"scroll"} h={"sm"} mb={"6"}>
        <Text
          letterSpacing={"widest"}
          fontFamily={"heading"}
          textAlign={["center", "left"]}
          my={"6"}
          fontSize={["large", "x-large"]}
        >
          Terms and Conditions
        </Text>
        <p>{data}</p>
        <Heading size={"sm"}>Refund only applicable within 7 days!</Heading>
      </Box>
      <HStack>
        <RiSecurePaymentFill />
        <Text>Payment Is Secured By RazorPay</Text>
      </HStack>
    </Container>
  );
};

export default About;
