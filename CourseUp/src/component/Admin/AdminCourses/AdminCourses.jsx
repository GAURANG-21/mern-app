import {
  Box,
  Grid,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  TableCaption,
  TableContainer,
  HStack,
  Button,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import PropTypes from "prop-types";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModal from "./CourseModal";

const courses = [
  {
    _id: "2022UG3001",
    title: "REACT COURSE",
    poster: {
      url: "https://ashallendesign.co.uk/images/custom/short-url-logo.png",
    },
    category: "Web Development",
    creator: "Gaurang Agarwal",
    views: 244,
    numOfVideos: 4,
  },
  {
    _id: "2022UG3002",
    title: "MACHINE LEARNING COURSE",
    poster: {
      url: "https://ashallendesign.co.uk/images/custom/short-url-logo.png",
    },
    category: "Machine Learning",
    creator: "Sagnik Taraphdar",
    views: 200,
    numOfVideos: 5,
  },
];

const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = (courseId) => {
    onOpen();
  };

  const deleteButtonHandler = (courseId) => {
    console.log(courseId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId, lectureId);
  };

  const addLectureButtonHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          my={"16"}
          textAlign={["center", "left"]}
        >
          Courses
        </Heading>
        <TableContainer>
          <Table variant={"simple"}>
            <TableCaption>All Available Courses in the Database!</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lecture</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item, index) => (
                <Row
                  item={item}
                  key={index}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={courses[0]._id}
          courseTitle="React Course"
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureButtonHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
        <Image src={`${item.poster.url}`} />
      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.creator}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={"outline"}
            color={"purple.500"}
          >
            View Lecture
          </Button>
          <Button onClick={() => deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

Row.propTypes = {
  item: PropTypes.object,
  courseDetailsHandler: PropTypes.func,
  deleteButtonHandler: PropTypes.func,
};
