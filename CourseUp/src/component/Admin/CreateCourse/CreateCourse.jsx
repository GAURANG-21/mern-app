import {
  Box,
  Grid,
  Container,
  Input,
  Select,
  Heading,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { fileUploadCss } from "./../../Auth/Register";

const CreateCourses = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [creatorName, setCreatorName] = useState();
  const [image, setImage] = useState();
  const [imagePrev, setImagePrev] = useState();

  const categories = [
    "Artificial Intelligence",
    "DSA",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
      setImagePrev(reader.result);
    };
  };

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box>
        <Container p={"16"}>
          <form>
            <Heading
              textTransform={"uppercase"}
              textAlign={["center", "left"]}
              mb={"8"}
            >
              Create Course
            </Heading>
            <VStack m={"auto"} spacing={"8"}>
              <Input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                focusBorderColor="purple.300"
              />
              <Input
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                focusBorderColor="purple.300"
              />
              <Input
                required
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                placeholder="Creator Name"
                focusBorderColor="purple.300"
              />
              <Select
                placeholder="Web Development"
                focusBorderColor="purple.300"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              {imagePrev && (
                <Image src={imagePrev} boxSize={"64"} objectFit={"contain"} />
              )}
              <Input
                required
                type="file"
                focusBorderColor="purple.300"
                accept="image/*"
                w={'full'}
                css={{
                  "&::file-selector-button": {
                    ...fileUploadCss,
                    color: "purple.300",
                  },
                }}
                onChange={changeImageHandler}
              />
              <Button type="submit" colorScheme="purple" w={"full"}>
                Create
              </Button>
            </VStack>
          </form>
        </Container>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourses;
