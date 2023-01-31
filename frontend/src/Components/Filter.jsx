import React, { useEffect } from "react";
import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByCountry,
  getUser,
  searchUser,
  sortByDob,
} from "../Redux/User/action";

export const Filter = () => {
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchUser(search));
  };

  const handleFilter = (data) => {
    dispatch(filterByCountry(data));
  };

  const handleSort = (data) => {
    dispatch(sortByDob(data));
  };

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
          <Input
            w={"400px"}
            placeholder="Search By Name or Address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button colorScheme={"blue"} onClick={handleSearch}>
            Search
          </Button>
        </Flex>
        <Box>
          <Select
            placeholder="Filter By Country"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </Select>
        </Box>
        <Box>
          <Select
            placeholder="Sort By DOB"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="asc">Assending</option>
            <option value="desc">Desending</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};
