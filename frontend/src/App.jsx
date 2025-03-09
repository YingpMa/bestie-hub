import { Global } from "@emotion/react";
import { Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

// 如果你需要区分开发/生产 API，保留下面这段
export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [users, setUsers] = useState([]);

  // 根据浅色 / 深色模式，自动切换文字颜色
  const textColor = useColorModeValue("#FF7F50", "pink.500");

  return (
    <>
      {/* 1) 全局引入谷歌字体 */}
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          body {
            font-family: 'Lora', serif;
          }
        `}
      />

      <Stack minH={"100vh"}>
        {/* 2) Navbar 保持不变 */}
        <Navbar setUsers={setUsers} />

        {/* 3) 中心容器 */}
        <Container maxW={"1200px"} my={4}>
          <Text
            fontSize={{ base: "3xl", md: "40px" }}
            fontWeight="bold"
            letterSpacing="2px"
            textTransform="uppercase"
            textAlign="center"
            mb={12}
            fontFamily="Roboto, sans-serif"
            color={textColor}
            mt={10}
            textDecorationLine="underline" // 指定下划线
            textDecorationColor={textColor} // 下划线颜色和文字相同
            textUnderlineOffset="10px" // 与文字保持一定距离（可选）
            textDecorationThickness="3px" // 下划线粗细（可选）
          >
            Circle of Friends
          </Text>

          <UserGrid users={users} setUsers={setUsers} />
        </Container>
      </Stack>
    </>
  );
}

export default App;
