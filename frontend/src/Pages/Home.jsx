import { Box, Button } from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../Components/Filter";
import { TableData } from "../Components/TableData";
import { getUser } from "../Redux/User/action";
import { useCSVDownloader } from "react-papaparse";

export const Home = () => {
  const dispatch = useDispatch();
  const { CSVDownloader } = useCSVDownloader();
  const users = useSelector((state) => state.UserReducer.data);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(users);

  return (
    <>
      <Filter />

      <Box w={"20%"} textAlign={"center"} m={"10px auto"}>
        <CSVDownloader
          filename={"result"}
          bom={true}
          config={{
            delimiter: ",",
          }}
          data={users}
        >
          <Button mt={"10px"} w={"full"} colorScheme={"blue"}>
            Download CSV File
          </Button>
        </CSVDownloader>
      </Box>

      <TableData />
    </>
  );
};
