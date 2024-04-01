import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Grid,
  Box,
  Heading,
  Stack,
  Text,
  Button,
  VStack,
  Input,
} from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useState } from "react";
import { fileUploadCss } from "./../../Auth/Register";

const CourseModal = ({
  isOpen,
  onClose,
  id,
  courseTitle,
  deleteLectureButtonHandler,
  addLectureButtonHandler,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();
  const [videoPrev, setVideoPrev] = useState();

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={"full"}
      onClose={handleClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {courseTitle}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody p={"16"}>
          <Grid templateColumns={["1fr", "3fr 1fr"]}>
            <Box px={["0", "16"]}>
              <Box my={"5"}>
                <Heading>{courseTitle}</Heading>
                <Heading size={"sm"} opacity={"0.4"}>{`#${id}`}</Heading>
              </Box>
              <Heading size={"lg"}>Lectures</Heading>
              {lectures.map((item, i) => (
                <VideoCard
                  key={i}
                  title="React Intro"
                  description="Introduction Lecture of React"
                  num={i + 1}
                  lectureId="Lelaflecture"
                  courseId={id}
                  deleteButtonHandler={deleteLectureButtonHandler}
                />
              ))}
            </Box>
            <Box>
              <form
                onSubmit={(e) =>
                  addLectureButtonHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={"4"}>
                  <Heading textTransform={"uppercase"} size={"md"}>
                    Add Lecture
                  </Heading>
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Input
                    required
                    type="file"
                    focusBorderColor="purple.300"
                    accept="video/mp4"
                    w={"full"}
                    css={{
                      "&::file-selector-button": {
                        ...fileUploadCss,
                        color: "purple.300",
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}

                  <Button w={"full"} colorScheme="purple" type="submit">
                    Upload{" "}
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={["column", "row"]}
      my="8"
      borderRadius={"lg"}
      boxShadow={"0 0 10px rgba(107, 70, 193, 0.5)"}
      justifyContent={["flex-start", "space-between"]}
      p={["4", "8"]}
      bg={"purple.300"}
    >
      <Box>
        <Heading size={"sm"}>{`#{num} ${title}`}</Heading>
        <Text>{description}</Text>
      </Box>
      <Button
        color={"purple.600"}
        onClick={() => deleteButtonHandler(courseId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  num: PropTypes.number,
  lectureId: PropTypes.number,
  courseId: PropTypes.number,
  deleteButtonHandler: PropTypes.func,
};

CourseModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.number,
  courseTitle: PropTypes.string,
  deleteLectureButtonHandler: PropTypes.func,
  addLectureButtonHandler: PropTypes.func,
  lectures: PropTypes.array,
};
