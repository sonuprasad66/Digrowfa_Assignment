import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../Redux/User/action";
import { EditData } from "./EditData";

export const TableData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer.data);
  const isLoading = useSelector((state) => state.UserReducer.isLoading);

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
      .then((res) => {
        dispatch(getUser());
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  // console.log(users);

  return (
    <>
      <Box
        w={"80%"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        p={5}
        m={"50px auto"}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>DOB</Th>
                <Th>Address</Th>
                <Th>Country</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            {isLoading ? (
              <Tbody>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"100%"}
                  h={"100%"}
                >
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="lg"
                  />
                </Flex>
              </Tbody>
            ) : (
              <>
                <Tbody>
                  {users.length > 0 &&
                    users?.map((item) => (
                      <>
                        <Tr key={item._id}>
                          <Td>{item.name}</Td>
                          <Td>{item.email}</Td>
                          <Td>{item.dob}</Td>
                          <Td>{item.address}</Td>
                          <Td>{item.country}</Td>
                          <Td>
                            <EditData id={item._id} />
                          </Td>
                          <Td>
                            <Button
                              colorScheme={"red"}
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </Button>
                          </Td>
                        </Tr>
                      </>
                    ))}
                </Tbody>
              </>
            )}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
