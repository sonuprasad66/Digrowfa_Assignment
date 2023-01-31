import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../Redux/User/action";

export const EditData = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(updateUser({ id: id, data: data }))
      .then((res) => {
        dispatch(getUser());
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button colorScheme={"green"} onClick={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Update User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              w={"90%"}
              p={5}
              m={" auto"}
              rounded={5}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Enter name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={handleChange}
                  />

                  <FormLabel>Enter Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                  />

                  <FormLabel>Enter DOB</FormLabel>
                  <Input
                    type="date"
                    placeholder="Enter DOB"
                    name="dob"
                    onChange={handleChange}
                  />

                  <FormLabel>Enter Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChange}
                  />

                  <Select
                    placeholder="Select Country"
                    mt={3}
                    name="country"
                    onChange={handleChange}
                  >
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                  </Select>
                </FormControl>

                <Button type="submit" w={"full"} mt={3} colorScheme={"blue"}>
                  {/* {isLoading ? (
              <>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              </>
            ) : (
              "Add User"
            )} */}
                  Update
                </Button>
              </form>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
