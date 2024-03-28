import { Button, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiAddCircleFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack
      spacing={"8"}
      p="16"
      boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}
    >
      <LinkButton
        url="dashboard"
        Icon={RiDashboardFill}
        text="Dashboard"
        check={location.pathname === "/admin/dashboard"}
      />
      <LinkButton
        url="createcourse"
        Icon={RiAddCircleFill}
        text="Create Course"
        check={location.pathname === "/admin/createcourse"}
      />
      <LinkButton
        url="courses"
        Icon={RiEyeFill}
        text="Courses"
        check={location.pathname === "/admin/courses"}
      />
      <LinkButton
        url="users"
        Icon={RiUser3Fill}
        text="Users"
        check={location.pathname === "/admin/users"}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, check }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={"larger"}
        variant={"ghost"}
        colorScheme={check ? "purple" : ""}
      >
        <Icon style={{ margin: "4px" }} />
        {text}
      </Button>
    </Link>
  );
}

LinkButton.propTypes = {
  url: PropTypes.string,
  Icon: PropTypes.element,
  text: PropTypes.string,
  check: PropTypes.bool,
};
