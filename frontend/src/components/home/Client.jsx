import React from 'react'
import { Box, Button, Hide, Image, Show, SimpleGrid, Text } from '@chakra-ui/react'
import ClientCard from './ClientCard'

const dataforDesktop = [
  {
    url: "https://s3-alpha-sig.figma.com/img/b1bb/e8ce/206521360041121ab6752229108adf37?Expires=1682899200&Signature=SKZChEpTrBVCDflwwm-xh7gMKv522BB0Iy~mIuuI9JeEyBGq1FsAqWObmyAgw~eC-50ay7VLV-HHxx6s1toclC725IX8yDtheGjeyZMZlEBSj6M2Swm88~~T8aJSa3QLGLUqFOwLPnONKSt2nVmMOpBFQDQOk5C3ihI4p-nXL-dD1Xy6TyLi9lemGq5ydEggo6gzLDIN1x65R99nlz17MrMBLmP9nTqZibLFKIeBCYxTpEWaDdz5v2u7caT9A9GYKSLuvpW5OUa0ua9C74ZuHwmkyKLslX1rkJqByxlZEMx2NxJ033gBL0fLjw0EmOgYM-1FMhFVpqreCYGU0q7n5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Roman Rey",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/329b/d1ca/a6525a07e0f84aaaf871d1a8947ae6cd?Expires=1682899200&Signature=Bs~tK-byFVTcpv518tmnnBj8h5N5Ekx5w5rVgEv3nTDF7cjoknKrMe1SOtIT-i6bZ7BNOQqOMM~~EOuco107k8FasMd~rDKm5XLHKkNJ0S2vIoFua6BkWaUh3Xef~gfxrbKMYUaXrMCMMeOFjR~AAqh6TOgB-kjLcNuVQSpyke~2JZoS0KL~RyBNe5P5BtBkPdTMR11aucHb30QZfo3u9YUnLNZ9EzDOpu9BdJpfMuuSglIwvpCMzCWTyQ9E01ev61IY2a86LnPWKwEPT6beDWi8wNdrL-H2PasCkoMW23QhjJxjl~Gelw5YkhH~YdNAD3JbONxwkvQ7lBvf9M4fog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Alex Tom",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/57bb/d024/40156c2a93848029f90c1d272f769166?Expires=1682899200&Signature=Ma-3dtkTHhcjXETuQM3gKXqgInobkgKiQAFzxS2XCJDkz1lMj29UqDHF3PMeSizHABRChpZSwMrtuA-XCM9sjWhlnB3GJEQyP1tq2UDYDp6PQiz6nRedcEzmSpYdwHEi9Nio74N8GeAou403iGHS7Q1SffNlPHRgb-y9ePmGNTAPD5x1yFXtz1ZfM3GWNGo2-TKPan71hZwDP8hgDLSQfl32lUAoudto9I5P-3DEdQ~qJzKrQX7Z4Y5~b4J6oTmJR2X1exWQwTgEg2p3i-vjcanLgbD~XamDNP31~IKYpZQyl~zt6nkbpL9UgxnWZfG-FXHy4p9KM5rCDM5MtiIIvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Finn Balor",
  },
];

const dataBelowDesktop = [
  {
    url: "https://s3-alpha-sig.figma.com/img/b1bb/e8ce/206521360041121ab6752229108adf37?Expires=1682899200&Signature=SKZChEpTrBVCDflwwm-xh7gMKv522BB0Iy~mIuuI9JeEyBGq1FsAqWObmyAgw~eC-50ay7VLV-HHxx6s1toclC725IX8yDtheGjeyZMZlEBSj6M2Swm88~~T8aJSa3QLGLUqFOwLPnONKSt2nVmMOpBFQDQOk5C3ihI4p-nXL-dD1Xy6TyLi9lemGq5ydEggo6gzLDIN1x65R99nlz17MrMBLmP9nTqZibLFKIeBCYxTpEWaDdz5v2u7caT9A9GYKSLuvpW5OUa0ua9C74ZuHwmkyKLslX1rkJqByxlZEMx2NxJ033gBL0fLjw0EmOgYM-1FMhFVpqreCYGU0q7n5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Roman Rey",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/329b/d1ca/a6525a07e0f84aaaf871d1a8947ae6cd?Expires=1682899200&Signature=Bs~tK-byFVTcpv518tmnnBj8h5N5Ekx5w5rVgEv3nTDF7cjoknKrMe1SOtIT-i6bZ7BNOQqOMM~~EOuco107k8FasMd~rDKm5XLHKkNJ0S2vIoFua6BkWaUh3Xef~gfxrbKMYUaXrMCMMeOFjR~AAqh6TOgB-kjLcNuVQSpyke~2JZoS0KL~RyBNe5P5BtBkPdTMR11aucHb30QZfo3u9YUnLNZ9EzDOpu9BdJpfMuuSglIwvpCMzCWTyQ9E01ev61IY2a86LnPWKwEPT6beDWi8wNdrL-H2PasCkoMW23QhjJxjl~Gelw5YkhH~YdNAD3JbONxwkvQ7lBvf9M4fog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Alex Tom",
  },
];

const Client = () => {
  return (
    <Box
      mt={"100px"}
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
      mb={10}
    >
      <Hide below="500px">
        <Box
          position={"relative"}
          w={"100%"}
          h={["197px", "261px", "261px", "261px"]}
          bg={"#42A7C3"}
          display={"flex"}
          gap={["0%", "0%", "20%", "30%"]}
        >
          <Box w={["40%", "40%", "80%", "30%"]} p={"20px"}>
            <Text
              textAlign={"left"}
              fontSize={["24px", "20px", "24px", "32px"]}
              fontWeight={"bold"}
              color={"white"}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Text textAlign={"left"} fontSize={"14px"} color={"white"} mt={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue.
            </Text>
          </Box>
          <Box>
            <Image
              w={"100%"}
              h={"100%"}
              src="https://s3-alpha-sig.figma.com/img/d4f4/9952/37c462a1c541b7a812220d9a0ad0c7ce?Expires=1682899200&Signature=byzKiGUgDRHDjp2gNpSIBWaNCQHIfVfH-YHk7yT1FKW5SMDI2Rb2ESKuNR-jp3zYI-aMOW-H5Z-K5kZrLAdVwnvbkHs1NBQ-pXv09RI5Lr9UG7sEOmjDpPOic8gufAs3EyaAixTfvh3NwGJGHPIgDg4HC3RqIqPEazZ1PuZsWxubIWXmGjsPR7Gkqx8EE8rpTb5sKmzy3Y7UjXmBbI8cX2VoClgJTyWrv0MOeKgKkutPeUXDlYB-5kbV77NBFixO8MeSjN4~l3FzgTugVkHRymuJF4X-PpX181XommEnRXFiLzibqHc2LYCXei85RD5B1FVJsd5BT3o0AdHNpz-6rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="wolrd-map"
            />
            <Button position={"absolute"} bottom={"100px"} right={2}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Hide>

      <Show below="500px">
        <Box position={"relative"} w={"100%"} h={["197px"]} bg={"#42A7C3"}>
          <Image
            position={"absolute"}
            w={"100%"}
            h={"100%"}
            src="https://s3-alpha-sig.figma.com/img/d4f4/9952/37c462a1c541b7a812220d9a0ad0c7ce?Expires=1682899200&Signature=byzKiGUgDRHDjp2gNpSIBWaNCQHIfVfH-YHk7yT1FKW5SMDI2Rb2ESKuNR-jp3zYI-aMOW-H5Z-K5kZrLAdVwnvbkHs1NBQ-pXv09RI5Lr9UG7sEOmjDpPOic8gufAs3EyaAixTfvh3NwGJGHPIgDg4HC3RqIqPEazZ1PuZsWxubIWXmGjsPR7Gkqx8EE8rpTb5sKmzy3Y7UjXmBbI8cX2VoClgJTyWrv0MOeKgKkutPeUXDlYB-5kbV77NBFixO8MeSjN4~l3FzgTugVkHRymuJF4X-PpX181XommEnRXFiLzibqHc2LYCXei85RD5B1FVJsd5BT3o0AdHNpz-6rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="wolrd-map"
          />
          <Box>
            <Text
              textAlign={"center"}
              fontSize={["20px"]}
              fontWeight={"bold"}
              color={"white"}
              mt={5}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Button display="block" m={"auto"} mt={5} borderRadius={"20px"}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Show>

      <Text
        w={["250px", "300px", "300px", "380px"]}
        m={"auto"}
        mt={"100px"}
        textAlign={"center"}
        fontSize={["24px", "20px", "24px", "32px"]}
        fontWeight={"bold"}
      >
        What Our Clients Says About Us
      </Text>

      <Hide below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataforDesktop.map((el, index) => (
            <ClientCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataBelowDesktop.map((el, index) => (
            <ClientCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
}

export default Client