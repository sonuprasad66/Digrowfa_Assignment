import {
  Box,
  FormLabel,
  Input,
  Text,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export const UploadCSV = () => {
  return (
    <>
      <Box
        w={"60%"}
        p={5}
        m={"50px auto"}
        // display="flex"
        // justifyContent={"center"}
        // alignItems={"center"}
        // border={"1px solid red"}
        textAlign={"center"}
      >
        <Heading>import invoice.csv</Heading>
        <Text
          pb={4}
          w={700}
          fontWeight={500}
          align={"center"}
          letterSpacing={0.2}
          color={"blackAlpha.700"}
        >
          Upload a .csv file, File should have id, name, mobile_number, address
          and value.
        </Text>
        <FormControl
          w={"xs"}
          p={4}
          borderRadius={"md"}
          boxShadow={"md"}
          border={"1px solid"}
          borderColor={"blackAlpha.50"}
          isRequired
        >
          <FormLabel>File</FormLabel>
          <Input py={1} mb={2} type="file" border={"2px solid"} />
        </FormControl>
      </Box>
    </>
  );
};
