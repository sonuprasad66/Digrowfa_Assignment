import React from "react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Flex
        p={5}
        justifyContent={"space-around"}
        alignItems={"center"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Heading
          color={"blue.500"}
          fontFamily={"Helvetica"}
          fontWeight={800}
          letterSpacing={0.5}
          as={NavLink}
          to="/"
        >
          Digrowfa
        </Heading>

        <Flex gap={1}>
          <Button
            data-testid="home"
            as={NavLink}
            to="/"
            px={7}
            borderRadius={"3xl"}
          >
            Add User
          </Button>
          <Button
            data-testid="home"
            as={NavLink}
            to="/home"
            px={7}
            borderRadius={"3xl"}
          >
            User Data
          </Button>
          <Button
            as={NavLink}
            to="/uploadcsv"
            px={7}
            colorScheme={"blue"}
            borderRadius={"3xl"}
            leftIcon={<AttachmentIcon />}
          >
            upload csv
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
