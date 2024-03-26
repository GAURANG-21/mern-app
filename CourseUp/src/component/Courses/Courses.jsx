import {
  Container,
  Heading,
  VStack,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW={"200"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        size={"sm"}
      >
        {title}
      </Heading>

      <Text noOfLines={2}>{description}</Text>

      <HStack>
        <Text textTransform={"uppercase"} fontWeight={"bold"}>
          Creator
        </Text>
        <Text textTransform={"uppercase"} fontFamily={"body"}>
          {creator}
        </Text>
      </HStack>

      <Heading
        textTransform={"uppercase"}
        textAlign={"center"}
        size={"xs"}
      >{`Lectures - ${lectureCount}`}</Heading>
      <Heading
        textTransform={"uppercase"}
        size={"xs"}
      >{`Views - ${views}`}</Heading>

      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={"ghost"}
          colorScheme="yellow"
          onClick={() => {
            addToPlaylistHandler(id);
          }}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const addToPlaylistHandler = () => {
    console.log("Add to Playlist");
  };
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "DSA",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  return (
    <Container>
      <Heading width={"100%"} paddingY={"5"}>
        All Courses
      </Heading>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course..."
        focusBorderColor=""
      />
      <HStack overflowX={"auto"} paddingTop={"8"} paddingBottom={"2"}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
            <Text>{item}</Text>
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <CourseCard
          title={"Sample"}
          description={"Sample1"}
          views={23}
          imageSrc={"Sampple1"}
          id={"Samplee"}
          creator={"New Creator"}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;

CourseCard.propTypes = {
  views: PropTypes.number,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  id: PropTypes.number,
  addToPlaylistHandler: PropTypes.func,
  creator: PropTypes.string,
  description: PropTypes.string,
  lectureCount: PropTypes.number,
};
