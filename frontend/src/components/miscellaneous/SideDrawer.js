import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider
} from "@chakra-ui/react";
import Drop from "../icons/Drop";
import Bell from "../icons/Bell";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user } = ChatState();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
        <Button variant="ghost">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <Text display={{ base: "none", md: "flex" }} px="3">
            Search User
          </Text>
        </Button>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="Work sans">
        Talk-A-Bit
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <Bell fontSize="2xl" />
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<Drop />}>
            <Avatar
              size="sm"
              cursor="pointer"
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My profile</MenuItem>
            </ProfileModal>
            <MenuDivider />
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
