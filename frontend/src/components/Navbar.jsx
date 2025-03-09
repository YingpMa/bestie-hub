import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  // 颜色主题
  const bg = useColorModeValue("#E3F6CE", "#1a1a2e"); // 浅色: 绿色, 深色: 深蓝紫色
  const textColor = useColorModeValue("#FF7F50", "#FF69B4"); // 浅色: 橙色, 深色: 粉色
  const buttonBg = useColorModeValue("#FF7F50", "#FF69B4"); // 按钮颜色切换
  const buttonHover = useColorModeValue("#ff6333", "#ff1493"); // 按钮 hover 效果
  const hoverBar = useColorModeValue("#FF7F50", "#FF69B4"); // 下划线颜色
  const fontFamily = "Pacifico, cursive"; // 更优雅的字体

  return (
    <Box
      as="nav"
      bg={bg}
      mt={3}
      py={3}
      px={6}
      borderRadius="16px"
      maxW="1200px"
      width="90%"
      mx="auto"
      transition="all 0.3s ease"
    >
      <Flex width="100%" px={6} align="center" justify="space-between">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          fontFamily={fontFamily}
          color={textColor}
          position="relative"
          _hover={{
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "100%",
              height: "2px",
              bg: hoverBar,
            },
          }}
        >
          Bestie Hub 🍃
        </Text>

        <Flex align="center" gap={3}>
          <Button
            onClick={toggleColorMode}
            bg={buttonBg}
            color="white"
            _hover={{ bg: buttonHover }}
            transition="all 0.3s ease"
          >
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
          <CreateUserModal setUsers={setUsers} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
