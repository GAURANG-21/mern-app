import { Button, VStack, HStack } from "@chakra-ui/react";
import ColorModeSwitcher from "../../ColorModeSwitcher";
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkButton = ({ url = "/", title = "Home" }) => {
  return (
    <Link to={url}>
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );
};
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: "admin"
  }

  return (
    <>
      <Button
        colorScheme="pink"
        width={"12"}
        height={"12"}
        rounded={"full"}
        position={"fixed"}
        top={"6"}
        left={"6"}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <ColorModeSwitcher />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={"medium"}>CourseUp</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <LinkButton />
              <LinkButton url="/courses" title="Courses" />
              <LinkButton url="/request" title="Request a Course" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About Us" />
            </VStack>
          </DrawerBody>

          <DrawerFooter display={"flex"} justifyContent={"space-evenly"} bottom="2rem">
            {isAuthenticated ? (
              <>
                <VStack>
                    <HStack>
                  <Link to="/profile">
                    <Button>Profile</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/logout">
                    <Button>
                      <RiLogoutBoxLine /> Logout
                    </Button>
                  </Link>
                    </HStack>
                {user && user.role=='admin' && <Link to="/dashboard">
                    <Button variant={"ghost"}><RiDashboardFill/>Dashboard</Button>
                </Link>}
                </VStack>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <p>OR</p>
                <Link to="/register">
                  <Button>Resiger</Button>
                </Link>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

LinkButton.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
