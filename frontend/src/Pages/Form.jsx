import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/User/action";

export const Form = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const isLoading = useSelector((state) => state.UserReducer.isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(data)).then((res) => {
      console.log(res);
      if (res.payload.status == "success") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/home");
      } else {
        toast({
          title: res.payload.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
    // .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        w={"30%"}
        p={5}
        m={"50px auto"}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Heading size={"50px"} textAlign={"center"}>
            Add User
          </Heading>
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
            {isLoading ? (
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
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};
