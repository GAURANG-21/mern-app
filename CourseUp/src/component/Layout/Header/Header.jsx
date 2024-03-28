import { Button, VStack, HStack } from "@chakra-ui/react";
import ColorModeSwitcher from "../../../ColorModeSwitcher";
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

const LinkButton = ({ url = "/", title = "Home", onClose }) => {
  return (
    <Link to={url}>
      <Button variant={"ghost"} onClick={onClose}>
        {title}
      </Button>
    </Link>
  );
};
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: "admin",
  };

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
              <LinkButton onClose={onClose} />
              <LinkButton url="/courses" title="Courses" onClose={onClose} />
              <LinkButton
                url="/requestUs"
                title="Request a Course"
                onClose={onClose}
              />
              <LinkButton url="/contactUs" title="Contact Us" onClose={onClose} />
              <LinkButton url="/about" title="About Us" onClose={onClose} />
            </VStack>
          </DrawerBody>

          <DrawerFooter
            display={"flex"}
            justifyContent={"space-evenly"}
            bottom="2rem"
          >
            {isAuthenticated ? (
              <>
                <VStack>
                  <HStack>
                    <Link to="/profile" onClick={onClose}>
                      <Button>Profile</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/logout" onClick={onClose}>
                      <Button>
                        <RiLogoutBoxLine /> Logout
                      </Button>
                    </Link>
                  </HStack>
                  {user && user.role == "admin" && (
                    <Link to="/dashboard" onClick={onClose}>
                      <Button variant={"ghost"}>
                        <RiDashboardFill />
                        Dashboard
                      </Button>
                    </Link>
                  )}
                </VStack>
              </>
            ) : (
              <>
                <Link to="/login" onClick={onClose}>
                  <Button>Login</Button>
                </Link>
                <p>OR</p>
                <Link to="/register" onClick={onClose}>
                  <Button>Register</Button>
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
  onClose: PropTypes.func,
};

export default Header;
