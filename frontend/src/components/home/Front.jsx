import React from 'react'
import { Box, Button, Hide, Image, Show, Text } from '@chakra-ui/react'

const Front = () => {
  return (
    <Box
      pl={["48px"]}
      pr={["70px"]}
      bg={"##E5F8FE"}
      display={"flex"}
      gap={"30px"}
    >
      <Box textAlign={["center", "start"]}>
        <Hide below="500px">
          <Button
            mt={2}
            fontSize={"36px"}
            bg={"#E5F8FE"}
            color={"##D2F4FF"}
            w={"197px"}
            h={"67px"}
            borderRadius={"44px"}
          >
            Visit
          </Button>
        </Hide>
        <Box
          h={"243px"}
          mt={"48px"}
          lineHeight={["44px", "44px", "44px", "89.6px"]}
          fontWeight={700}
          fontSize={["32px", "32px", "32px", "64px"]}
        >
          The Exotic <Text color={"#3282AD"}>Lakshadweep</Text> Islands
        </Box>
        <Button
          mt={["-100px", "-100px", "-100px", "80px"]}
          mb={"30px"}
          color={"#3282AD"}
          bg={"transparent"}
          border="2px solid #3282AD"
          w={"174px"}
          h={"64px"}
          borderRadius={"5px"}
          p={"16px, 32px, 16px, 32px"}
          gap={"10px"}
        >
          Discover Now
        </Button>
      </Box>

      <Hide below="900px">
        <Box position={"relative"}>
          <Image
            w={"421px"}
            position={"absolute"}
            right={10}
            borderRadius={"40%"}
            src="https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1682899200&Signature=iUxTzXO8P-WUZIaVAgX4yX7LkxhcJM9Wxr-Ii513VCGvTq0KRIaFiwTd-VFung8DxdZd2Q6VItoGskIyscQMrVS8KismRRogCLvdCJlCvcZC9un1z9hUOB~15MUCduLfMVrSnT39mw4ewdjVh7imZmpGYiq6nfXO6QpTi~OzQoRnz3ggQNgqSZQEKJF1s7Th5le0JgtmoKiPEV-F8-MpxhZw90UjGh7COlGlxV-N~cOxpESsUMDimobPFg9C-bGY2MYAF3EEgBu1ksASgDb~3jIfMLs0T1vAacG9Ia8hYdO7LgQsDP4Q59bQiQILY-i56852noYK3jIu9lyiJ19G7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="girl"
          />
          <Image
            w={"871px"}
            mt={"-150px"}
            src="https://s3-alpha-sig.figma.com/img/4e4e/4703/132ed55bc459e6a9f7ab5c5436481101?Expires=1682899200&Signature=dh3nLgG6eQhLQonOqLjKmWXow84mymnoqkYfWhyq4NdGNSsx1vdHOne8jX~ir2qF2Lksi3S4-lJKeBN~m5HCADQxOaKVd49sTyhi6GhfEPYASmI5~5X4VTkV7EptBe7zKwr58wp5yTmW9mn6FneeAGFrLilPk6ON2QRYaqNnTU3~1Hxl8KjX-yvM4rm5zg9gjwQmufGT-OCVl4syu6qR1YaiEUDjGDnV9OFY1xGc6Hi74vTav6rB2qejDFntYMD5hbTP0IPzxRRZdFTm8wn~XLcrlAXDjGidwEkEcW5y0FddGkNfpcc9V5cwEP0qMM00PP1KxxgNsY5yOct6T-cxKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="globe"
          />
          <Box
            position={"absolute"}
            top={"300px"}
            left={"200px"}
            p={2}
            bg={"white"}
          >
            <Image
              w={"155px"}
              h={"81px"}
              src="https://s3-alpha-sig.figma.com/img/6df1/3489/b22a168b1020522dd75c4efc49c605bd?Expires=1682899200&Signature=FSGiz9vMiFIabM7NM3Kev6MKvsjPQUIKSI8oHBwfPnyM~aysyGOXHZx57srFNhNhizeRo-nzh7VPbtX-3tlI86TmY3w1H8F2Nnk2CIm~~~45jg04yN6wEn5-jxt8AA2wGwBW3xWx4F1aDV-WksL6r3BGY4hIemqzDRbbMWWIIw3Zk3CGh4NI0cndIvq9Rj52QULTUQIUm9uvwrOfF8uOKevrE1O4KVIdOcONaOPWZWlHGRxQ0K6lg9Ed9VgWEQAdH0uFicph73~dDEKFyPTZJgnwNf6eJCnuwcbTDEIZWFYxG-Uk84C2zEPbxJgmoaUal7QKlp8HRh~BzEC3DxoT4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="img3"
            />
            <Text fontWeight={"extrabold"}>Explore Labuan Bajo</Text>
            <Text color={"gray"}>NTT, Indonesua</Text>
          </Box>
        </Box>
      </Hide>
      <Hide below="500px">
        <Show below="900px">
          <image
            w={"421px"}
            position={"absolute"}
            right={10}
            borderRadius={"40%"}
            src="https://s3-alpha-sig.figma.com/img/0eb0/31a9/f8b1bdcde5d171ec2f78a229623adb7f?Expires=1682899200&Signature=OBSAaSXytt84X6AxYluDkACHQTCHmnEDfwVdAGqNws48cbCBqp4-YCC3ih9WBKqlABhmHViFsWPn4-Hbe~wzKd2MBaBA2dmjBNs0rUtMEtEaoScwLaP4TYSvz9LIeVc9IB1qQRDS~jsb0kmL0ItjrJrujawFU~GF9GLaF6F3mA9cptkMkM7-4MdoalEwiJTUYo7Uwl5JIubuPx3xNYiDzXyZnUt3b7dVH1JvyfTeGyh2c5AqsjQyQ2axfzliVM0SLzB5eo0rtxDyXW98~6FqDAQUCZn5KwHRpVZ-SEivJhHmpopGigkgG7oVx0d7HEejqfMzfZbGaZ6bKovsFtu8Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="girl"
          />
        </Show>
      </Hide>
    </Box>
  );
}

export default Front