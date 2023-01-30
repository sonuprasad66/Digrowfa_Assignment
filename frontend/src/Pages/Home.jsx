import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";
import { TableData } from "../Components/TableData";

export const Home = () => {
  return (
    <>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        p={5}
        mt={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Flex gap={2}>
          <Input w={"400px"} placeholder="Search By Name or Address" />
          <Button colorScheme={"blue"}>Search</Button>
        </Flex>
        <Box>
          <Select placeholder="Filter By Country">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Sort By DOB">
            <option value="Assending">Assending</option>
            <option value="Desending">Desending</option>
          </Select>
        </Box>
      </Flex>

      <Box w={"100%"} textAlign={"center"} mt={5}>
        <Button colorScheme={"blue"}>Download CSV File</Button>
      </Box>

      <TableData />
    </>
  );
};
