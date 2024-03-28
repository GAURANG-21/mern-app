import {
  Box,
  Grid,
  Text,
  HStack,
  Heading,
  Stack,
  Progress,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

const DataBox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={["full", "20%"]}
    boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
    padding={"8"}
    borderRadius={"lg"}
  >
    <Text textAlign={["center", "left"]}>{title}</Text>
    <HStack spacing={"6"}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {qty}
      </Text>
      <HStack>
        <Text>{qtyPercentage}%</Text>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={"0.6"}>Since last month</Text>
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={["0", "20"]}>
    <Heading size={"sm"} mb="2">
      {title}
    </Heading>
    <HStack w={"full"} alignItems={"center"}>
      <Text>{profit ? `0%` : `-${value}%`}</Text>
      <Progress w={"full"} value={profit ? value : 0} colorScheme="purple" />
      <Text>{`${value > 100 ? value : 100}%`}</Text>
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box boxSize={"border-box"} py="16" px={["4", "0"]}>
        <Text opacity={"0.5"} textAlign={"center"}>
          Last change was on {String(new Date()).split("G")[0]}
        </Text>
        <Heading ml={["0", "16"]} mb={["16"]} textAlign={["center", "left"]}>
          Dashboard
        </Heading>
        <Stack
          direction={["column", "row"]}
          justifyContent={"space-evenly"}
          minH={"24"}
        >
          <DataBox
            title={"Views"}
            qty={123}
            qtyPercentage={23}
            profit={"true"}
          />
          <DataBox title={"Users"} qty={23} qtyPercentage={78} profit={false} />
          <DataBox
            title={"Subscription"}
            qty={12}
            qtyPercentage={30}
            profit={false}
          />
        </Stack>

        <Box
          m={["0", "16"]}
          borderRadius={"lg"}
          p={["0", "16"]}
          mt={["4", "16"]}
          boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
        >
          <Heading
            size={"md"}
            textAlign={["center", "left"]}
            pt={["8", "0"]}
            ml={["0", "16"]}
          >
            Views Graph
          </Heading>
          {/*Line Graph*/}
        </Box>

        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p="4">
            <Heading
              size={"md"}
              textAlign={["center", "left"]}
              my="8"
              ml={["0", "16"]}
            >
              Progress Bar
            </Heading>
            <Box>
              <Bar title="Views" value="30" profit={true} />
              <Bar title="Users" value="78" profit={true} />
              <Bar title="Subscription" value="20" profit={false} />
            </Box>
          </Box>
          <Box p={["0", "16"]} boxSizing="border-box" py={"4"}>
            <Heading textAlign={"center"} size={"md"} mb={"4"}>
              Users{" "}
            </Heading>
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
