import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Container h={["60vh", "62vh"]} mt={["12vh", "10vh"]} pt={"10px"}>
      <Heading textAlign={"center"} my={"20px"}>
        Welcome
      </Heading>
      <VStack boxShadow={"dark-lg"}>
        <Box
          bgColor={"yellow.400"}
          w={"full"}
          style={{ borderRadius: "5px 5px 0 0" }}
        >
          <Text textAlign={["center", "left"]} p={"10px"} h={"7vh"}>
            Pro Pack- ₹399
          </Text>
        </Box>
        <Text pt={"10%"} fontSize={"small"} textAlign={"center"}>
          Join pro pack and get access to all content.
        </Text>
        <Heading> ₹399 only</Heading>
        <Button variant={"ghost"} w={"90%"} bgColor={"yellow.400"} mt={"5%"}>
          Buy Now
        </Button>
        <VStack width={"100%"}>
          <Box
            bgColor={"blackAlpha.500"}
            style={{ borderRadius: "0 0 5px 5px" }}
            width={"100%"}
            mt={"10px"}
            p={"5px"}
            h={["9vh", "7vh"]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Heading
              size={"sm"}
              textTransform={"uppercase"}
              fontWeight={"15vh"}
            >
              100% Refund at cancellation
            </Heading>
            <Text fontSize={"xs"}>*Terms and Conditions applied</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Subscribe;
