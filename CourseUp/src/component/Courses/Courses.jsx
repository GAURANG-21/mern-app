import {
  Container,
  Heading,
  VStack,
  Input,
  HStack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "DSA",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  return (
    <Container
      paddingY={"10vh"}
      backgroundColor={"red.200"}
      maxW={"container.sm"}
      minH={"95vh"}
    >
      <VStack backgroundColor={"yellow.200"}>
        <Heading textTransform={"uppercase"}>All Courses</Heading>
        <Input
          placeholder="Search your course here"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <div
          style={
            {
              // Ensure the div takes the full width
            }
          }
        >
          <div>
            {categories.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  setCategory(item);
                }}
              >
                <Text>{item}</Text>
              </Button>
            ))}
          </div>
        </div>
      </VStack>
    </Container>
  );
};

export default Courses;
