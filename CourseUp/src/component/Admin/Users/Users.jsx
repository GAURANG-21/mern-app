import {
  Box,
  Grid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { RiDeleteBin7Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const users = [
  {
    _id: "2022UG3001",
    name: "Gaurang Agarwal",
    email: "gaurang.2022ug3001@gmail.com",
    role: "Admin",
    subscription: {
      status: "Active",
    },
  },
  {
    _id: "2022UG3002",
    name: "Sagnik Taraphdar",
    email: "sagnik.2022ug3002@gmail.com",
    role: "User",
    subscription: {
      status: "Not Active",
    },
  },
];

const updateHandler = (userId) => {
  console.log(userId);
};

const deleteButtonHandler = (userId) => {
  console.log(userId);
};

const User = () => {
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          my={"16"}
          textAlign={["center", "left"]}
        >
          All Users
        </Heading>
        <TableContainer>
          <Table variant={"simple"}>
            <TableCaption>All Available Users in the Database!</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>NAME</Th>
                <Th>EMAIL</Th>
                <Th>ROLE</Th>
                <Th>SUBSCRIPTION</Th>
                <Th isNumeric>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((item, index) => (
                <Row key={index} items={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default User;

function Row({ items }) {
  return (
    <Tr>
      <Td>{items._id}</Td>
      <Td>{items.name}</Td>
      <Td>{items.email}</Td>
      <Td>{items.role}</Td>
      <Td>{items.subscription.status}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"purple.500"}
            onClick={() => updateHandler(items._id)}
          >
            Change Role
          </Button>
          <Button
            color={"purple.600"}
            onClick={() => deleteButtonHandler(items._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

Row.propTypes = {
  items: PropTypes.object,
};
