import {
  Container,
  Stack,
  VStack,
  HStack,
  Input,
  Text,
  Heading,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useState } from "react";
import PropTypes from "prop-types";

const Profile = () => {
  const user = {
    name: "Gaurang Agarwal",
    email: "gaurang2621@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "normaladmin",
    subscription: {
      status: "active",
    },
    playlist: [
      {
        course: "Playlist 1",
        poster: "Poster 1",
      },
    ],
  };

  const removeFromPlaylistHandler = (id) => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={"90vh"} px={["0", "40"]} py="20">
      <Heading m={["8", "6"]} textTransform={"uppercase"}>
        Profile
      </Heading>
      <Stack direction={["column", "row"]} gap={["2", "8"]}>
        <VStack alignItems={["center"]}>
          <Avatar boxSize={"48"} alignSelf={"center"} />
          <Button colorScheme="yellow" variant={"ghost"} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack alignItems={"flex-start"}>
          <HStack>
            <Text as="b">Name: </Text>
            <Text>{user.name}</Text>
          </HStack>
          <HStack>
            <Text as="b">E-mail: </Text>
            <Text>{user.email}</Text>
          </HStack>
          <HStack>
            <Text as="b">Since: </Text>
            <Text>{user.createdAt.split("T")[0]}</Text>
          </HStack>
          {user.role !== "admin" && (
            <HStack>
              <Text>Subscription: </Text>
              {user.subscription.status != "active" ? (
                <Link to={"/subscribe"}>
                  <Button colorScheme="yellow">Subscribe Now</Button>
                </Link>
              ) : (
                <Button colorScheme="yellow" variant={"ghost"}>
                  Cancel Subscription
                </Button>
              )}
            </HStack>
          )}

          <Stack direction={["row"]} alignItems={"center"}>
            <Link to="/updateprofile">
              <Button colorScheme="yellow">Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button colorScheme="yellow">Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size={"md"} my="8">
        Playlist
      </Heading>
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          p="4"
        >
          {user.playlist.map((element) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize="full"
                objectFit={"contain"}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/:${element.course}`}>
                  <Button colorScheme="yellow">Watch Now</Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  const changeImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(reader.result);
    };
  };

  const closeHandler = () => {
    onClose();
    setImage("");
    setImagePrev("");
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <VStack spacing={"8"}>
                {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                <Input type="file" onChange={changeImage} />
                <Button w={"full"} colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ChangePhotoBox.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
  changeImageSubmitHandler: PropTypes.func,
};
