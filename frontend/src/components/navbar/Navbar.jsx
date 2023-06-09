import React from 'react'
import { Box, Button, Hide, Image, Show, Text } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai';
import DrawerNav from './DrawerNav';

const Navbar = () => {
  return (
    <Box bg={"#E5F8FE"}>
      {" "}
      {/* main container */}
      <Hide below="500px">
        <Box
          pl={["48px"]}
          pr={["48px"]}
          pt={"40px"}
          pb={"40px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {" "}
          {/* box containing content */}
          <Box display={"flex"} gap={["80px", "70px"]}>
            <Box>
              {" "}
              {/* box for logo */}
              <Image
                w={"99.35px"}
                h={"56px"}
                src="https://s3-alpha-sig.figma.com/img/80a0/725d/c6fde8d86e0166b58d5ef942d8d55b63?Expires=1682899200&Signature=gNPzeLMZJ--MwWNbEpv4TgpQru00RhtOFHJmpTiDD-MgcM1-sehN2cm9UpPM17mwnqfu~BlLg2tQHHMMvH86-Qjnz1DoyaaJoNPnQxhgEYXZlnn0~Qv3PvJN5uG9nwlhdBh-bwNeseDPpqVavUUbUkiIsdVg~ABHDXLnH8O6BHrwY9VloZ2pq1DVwXTj~Wsm9y5PuBQlp0gfNaYVUBsai5V63K~-k53RwFCTUxel7VmZ-Sh-TOAoRmtRTiiBDjavsfOejJZfksosYGQsJxv431SnyBFciO3C0S2ECXWCQ273ywOYD7S-9KM4L7Cby5H-Xsm37BDUQP3fxdL2Kbx3fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </Box>

            <Hide below="900px">
              {" "}
              {/* hide the box which containing menu when screen shrink to below 900px */}
              <Box
                display={"flex"}
                gap={10}
                alignItems={"center"}
                fontFamily={"sans-serif"}
                lineHeight={"22px"}
                color={"#3A3A3A"}
              >
                <Text cursor={"pointer"}>Find Reservations</Text>
                <Text
                  cursor={"pointer"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  Packages
                  <AiOutlineDown />
                </Text>
                <Text
                  cursor={"pointer"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  About Lakshadweep <AiOutlineDown />
                </Text>
                <Text cursor={"pointer"}>About Us</Text>
                <Text cursor={"pointer"}>Gol</Text>
                <Text cursor={"pointer"}>Support</Text>
              </Box>
            </Hide>
          </Box>
          <Hide below="900px">
            {" "}
            {/* Hide the login/signup button below 900px */}
            <Box display={"flex"} justifyContent={"space-between"}>
              <Button colorScheme="teal" variant="ghost" mr={10}>
                Login
              </Button>
              <Button colorScheme="blue" variant="solid" borderRadius={"20px"}>
                Sign Up
              </Button>
            </Box>
          </Hide>
          <Show below="900px">
            {" "}
            {/* show the drawer below 900px */}
            <Box>
              <Button colorScheme="teal" variant="ghost" mr={10}>
                Login
              </Button>
              <DrawerNav />
            </Box>
          </Show>
        </Box>
      </Hide>
      <Show below="500px">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <DrawerNav />
          </Box>
          <Box>
            {" "}
            {/* box for logo */}
            <Image
              w={"70px"}
              h={"40px"}
              src="https://s3-alpha-sig.figma.com/img/80a0/725d/c6fde8d86e0166b58d5ef942d8d55b63?Expires=1682899200&Signature=gNPzeLMZJ--MwWNbEpv4TgpQru00RhtOFHJmpTiDD-MgcM1-sehN2cm9UpPM17mwnqfu~BlLg2tQHHMMvH86-Qjnz1DoyaaJoNPnQxhgEYXZlnn0~Qv3PvJN5uG9nwlhdBh-bwNeseDPpqVavUUbUkiIsdVg~ABHDXLnH8O6BHrwY9VloZ2pq1DVwXTj~Wsm9y5PuBQlp0gfNaYVUBsai5V63K~-k53RwFCTUxel7VmZ-Sh-TOAoRmtRTiiBDjavsfOejJZfksosYGQsJxv431SnyBFciO3C0S2ECXWCQ273ywOYD7S-9KM4L7Cby5H-Xsm37BDUQP3fxdL2Kbx3fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </Box>
          <Box>
            <Button colorScheme="teal" variant="ghost" mr={10}>
              Login
            </Button>
          </Box>
        </Box>
      </Show>
    </Box>
  );
}

export default Navbar