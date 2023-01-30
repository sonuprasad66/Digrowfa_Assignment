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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/User/action";

export const TableData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer.data);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(users);

  return (
    <>
      <Box
        w={"70%"}
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
            <Tbody>
              {users.length > 0 &&
                users?.map((item) => (
                  <>
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.dob}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.country}</Td>
                      <Td>
                        <Button colorScheme={"green"}>Edit</Button>
                      </Td>
                      <Td>
                        <Button colorScheme={"red"}>Delete</Button>
                      </Td>
                    </Tr>
                  </>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
