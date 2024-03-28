import { Grid, Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: "1",
      title: "Title 1",
      description: "This is video 1",
      video: {
        url: "video1",
      },
    },
    {
      _id: "2",
      title: "Title 2",
      description: "This is video 2",
      video: {
        url: "video2",
      },
    },
    {
      _id: "3",
      title: "Title 3",
      description: "This is video 3",
      video: {
        url: "video3",
      },
    },
    {
      _id: "4",
      title: "Title 4",
      description: "This is video 4",
      video: {
        url: "video4",
      },
    },
  ];

  return (
    <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]} gap={["0", "3"]}>
      <Box>
        <div
          style={{
            position: "relative",
            paddingBottom: "40.25%",
            height: 0,
            overflow: "hidden",
            // maxWidth: "80%",
            // marginLeft: "17%",?\
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
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <Heading>{`#${lectures[lectureNumber]._id} ${lectures[lectureNumber].title}`}</Heading>
        <Heading>Description</Heading>
        <Text>{`${lectures[lectureNumber].description}`}</Text>
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <Button
            key={element._id}
            onClick={() => setLectureNumber(index)}
            style={{ width: "100%", borderBottom: "1px solid rgba(0,0,0,0.3)" }}
          >
            <Text>{`#${element._id} ${element.title}`}</Text>
          </Button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
