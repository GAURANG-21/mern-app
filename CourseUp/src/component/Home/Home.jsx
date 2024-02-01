import {
  Box,
  Text,
  Button,
  Image,
  Stack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack>
      {/* <Box
        display={"flex"}
        flexDir={["column", "row"]}
        alignItems={"center"}
        gap={"1vw"}
        h={"100vh"}
        py={"20"}
      >
        <Box
          h={"20vh"}
          w={"100%"}
          display="flex"
          flexDir="column"
          justifyContent={"center"}
          alignItems={["center", "flex-end"]}
          gap={"1"}
        >
          <Text fontSize={["9vw", "5vw"]}>Learn from the Experts!!</Text>
          <Text fontSize={["4vw", "2vw"]}>
            Find valuable content at reasonable price
          </Text>
          <Link to="/courses">
            <Button className="button" colorScheme="yellow" size={["sm", "md"]}>
              Yellow
            </Button>
          </Link>
        </Box>
      </Box> */}

      <HStack
        display={"flex"}
        flexDirection={["column", "row"]}
        justifyContent={["center", "flex-end"]}
        alignItems={"center"}
        px={["2%", "5%", "8%"]}
        h={"100vh"}
      >
        <div style={{ px: ["0px", "2rem", "4rem"] }}>
          <Heading
            fontSize={["8vw", "5vw", "3.5vw"]}
            textAlign={"center"}
            flexWrap={"nowrap"}
          >
            Learn from the Experts!!
          </Heading>
          <Text fontSize={["3.8vw", "2.4vw", "2vw"]} textAlign={"center"}>
            Find valuable content at a reasonable price
          </Text>
          <Link
            to="/courses"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5px",
            }}
          >
            <Button bgGradient={"linear(to-r, pink.400, yellow.400)"}>
              Explore Now
            </Button>
          </Link>
          {/* <Link to="/courses" style={{display:"inline-block"}}>
          <button>Explore Now</button>
          </Link> */}
        </div>
        <Image
          className="image"
          src="/src/assets/images/Studying.jpg"
          fallbackSrc="https://via.placeholder.com/150"
          h={["40%", "50%", "60%"]}
          w={["70%", "50%", "30%"]}
        ></Image>
      </HStack>

      <Box
        bgGradient={"linear(to-r, pink.400, yellow.400)"}
        h={["22vh", "30vh", "30vh"]}
        mb={["2", "5"]}
      >
        <Heading
          textAlign={"center"}
          fontFamily={"cursive"}
          color={"blackAlpha.900"}
          fontSize={["2em", "4em"]}
        >
          OUR BRANDS
        </Heading>
        <HStack
          className="brandsBanner"
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div
        style={{
          position: "relative",
          paddingBottom: "40.25%",
          height: 0,
          overflow: "hidden",
          maxWidth: "80%",
          marginLeft: "17%",
        }}
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
            position: "absolute",
            top: 0,
            left: 0,
            width: "80%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </Stack>
  );
};

export default Home;
