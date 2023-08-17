import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({user, handleFunction}) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      size="sm"
      backgroundColor="#F6635C"
      color="white"
      cursor="no-drop"
      onClick={handleFunction}
    >
      {user.name}
    </Box>
  );
};

export default UserBadgeItem;
