import { Heading, Text, HStack, Stack, Box } from "@chakra-ui/react";
import { DiGit } from "react-icons/di";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <Stack
      bgGradient={"linear(to-r, pink.400, yellow.400)"}
      h={["22vh","17vh", "18vh"]}
      spacing={2}
      display={"flex"}
      flexDirection={["column", "row"]}
      justifyContent={["center", "space-between"]}
      align={"start"}
      marginTop={"8vh"}
      paddingX={["2", "2", "20"]}
    >
      <Box
        display={"flex"}
        flexDirection={["column"]}
        flexWrap={"wrap"}
        width={"100%"}
        paddingY={["0", "5", "4vh"]}
        color={"blackAlpha.900"}
      >
        <Heading>All Rights Reserved</Heading>
        <Text>@Gaurang Agarwal</Text>
      </Box>
      <HStack
        spacing={["2", "10"]}
        justifyContent={["space-evenly","center"]}
        alignItems={["space-evenly", "center"]}
        color={"black"}
        fontSize={["60","60", "90"]}
        py={["0", "8", "3"]}
      >
        <a
          href="https://github.com/GAURANG-21/"
          target={"_blank"}
          rel="noreferrer"
        >
          <DiGit />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurang-agarwal-519794257/"
          target={"_blank"}
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a
          href="https://www.instagram.com/gaurang._.21/"
          target={"_blank"}
          rel="noreferrer"
        >
          <TiSocialInstagramCircular />
        </a>
      </HStack>
    </Stack>
  );
};

export default Footer;
