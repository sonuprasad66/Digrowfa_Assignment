import React, { useState } from "react";
import Papa from "papaparse";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const UploadCSV = () => {
  const [data, seTdata] = useState([]);
  const [heads, setHeads] = useState([]);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        seTdata(results.data);
        let x = results.data;
        const columns = Object.keys(x[0]);
        setHeads(columns);
      },
    });
  };
  console.log(data);

  return (
    <Box>
      <Box w={"50%"} m={"auto"} textAlign={"center"}>
        <Heading color={"blue"} m={3}>
          import .CSV File
        </Heading>

        <Text
          pb={4}
          w={700}
          fontWeight={500}
          align={"center"}
          letterSpacing={0.2}
          color={"blackAlpha.700"}
        >
          Upload a .csv file, File should have <br /> id, name, mobile_number,
          address, and values.
        </Text>
      </Box>

      <Box
        m={"auto"}
        p={5}
        w={"30%"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <FormControl isRequired>
          <FormLabel>Upload CSV File</FormLabel>
          <Input type="file" onChange={handleFileSelect} />
        </FormControl>
      </Box>

      <br />

      {data.length > 0 && (
        <Box
          w={"80%"}
          p={5}
          m={"10px auto"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Table>
            <Thead>
              <Tr>
                {heads?.map((cell) => (
                  <Th>{cell}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => (
                <>
                  <Tr>
                    {Object.values(row).map((cell) => (
                      <Td>{cell}</Td>
                    ))}
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};
