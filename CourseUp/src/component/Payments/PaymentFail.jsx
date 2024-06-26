import { Container, Heading, VStack, Button } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <Container h={"90vh"}>
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
        <RiErrorWarningFill size={"5rem"} />
        <Heading my={"8"} textAlign={"center"} textTransform={"uppercase"}>
          Payment failed!
        </Heading>
        <Link to={"/subscribe"}>
          <Button variant={"ghost"}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
