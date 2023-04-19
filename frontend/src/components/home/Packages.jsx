import React from 'react'
import { Box, Button, Hide, Show, SimpleGrid, Text } from '@chakra-ui/react'
import CardHome from './CardHome'


const data = [
  "https://s3-alpha-sig.figma.com/img/d2bd/8757/cb7f2e97838a2566be1e4a44b5846f3a?Expires=1682899200&Signature=iKoHk37l-aZbroA1jqXcLNQRvuyJHUjPyFJFq-vWiBqlDlbT6OHwH5MIWi2ZUK8XTnWu5DR~1pQ7X-CPPdKQw5brdsHvIp9-DW99nR5plz51L7Qb12LpWNDCtjDHNfBeansAAxRpfDam~qcg291h0BOf3E4jS5AGEMy34Gzk3Ng2lJiOUpbYfxQ9nnioH5FsD9Kd95o5aX4fDw9yp8ps4wa4NcWqtGHldpzt0SCHuR3d38vSCJnWEhdF7knFwKdIIUwxnZdWPelwOf3E3j8P~kN2dzaSvCDeREloyTjaMz~Ka5~yQyqxuufyDmjV8EQctw-eRHC04jTND8gdss-cqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/7ebd/fd03/3221b2aeb0e9dae54af18ac8a3130e2a?Expires=1682899200&Signature=dkAW3f0nex09xZRtAq5kaJ17JLmLVl~y9wHw62lMs8hZPXjbPxcX-8NxHkVFBU-Cups5Q8jmz6aIyzpQbvJRj8xzrDryJ7uc9bRdme6mKAV2xhC4wOPkPC3vPLLvE9pLWzJTa-KnetKB-JIctIq74vpEixOIR592cbR-LKvaXkMaxhNXQG2jNLhR5DiwTuDw0~D-N~kzmi-JtUCiW7nwZ2AbIUbqFBsIGrNSWSaH5~W~N2ad1Z4t9bAJM5P2lCYBDXXcVqFoCvLCGq06jQd2E-doVpAYsOCHuNqZrAEmXTasJGbeLUons-ok2ROkJshiZao0HE~~g~ADQ8R1YdpX5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5da2/3758/815ecd7e640be200b17e3ad2b852b674?Expires=1682899200&Signature=UNqYAlJLBNOw-40uGBOGJdMvfUEN~AaSZqItcDUvEhi5NdkOW6BBwycpHeNTHlLQh5ChBSN11S6~TgrX6KM8w-fKy1-OlxqoPQ2N5Q2B2h-LXWDD213b8V-yn-TLjNvlxduQjjDFKdAhQIvKXuZp-VrWZLvbRT3nXdIHx-K0w1c08RzKPQpKr1XTyk47H3dul9PPYm7o8QFgXKYMxUSRaJRAj6Djkndvhk5QuCXmM2orpXf5H5LwG2KZpe2oSyRK9yz--Wy5VSGaXisEcWQr7lRK41Wwe1Q04g~vXieNR7L8kIvsIVRm-rIq~S9HWXSxruRyCfKH9NJUYoDJp-Zakg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const data2 = [
  "https://s3-alpha-sig.figma.com/img/7ebd/fd03/3221b2aeb0e9dae54af18ac8a3130e2a?Expires=1682899200&Signature=dkAW3f0nex09xZRtAq5kaJ17JLmLVl~y9wHw62lMs8hZPXjbPxcX-8NxHkVFBU-Cups5Q8jmz6aIyzpQbvJRj8xzrDryJ7uc9bRdme6mKAV2xhC4wOPkPC3vPLLvE9pLWzJTa-KnetKB-JIctIq74vpEixOIR592cbR-LKvaXkMaxhNXQG2jNLhR5DiwTuDw0~D-N~kzmi-JtUCiW7nwZ2AbIUbqFBsIGrNSWSaH5~W~N2ad1Z4t9bAJM5P2lCYBDXXcVqFoCvLCGq06jQd2E-doVpAYsOCHuNqZrAEmXTasJGbeLUons-ok2ROkJshiZao0HE~~g~ADQ8R1YdpX5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5da2/3758/815ecd7e640be200b17e3ad2b852b674?Expires=1682899200&Signature=UNqYAlJLBNOw-40uGBOGJdMvfUEN~AaSZqItcDUvEhi5NdkOW6BBwycpHeNTHlLQh5ChBSN11S6~TgrX6KM8w-fKy1-OlxqoPQ2N5Q2B2h-LXWDD213b8V-yn-TLjNvlxduQjjDFKdAhQIvKXuZp-VrWZLvbRT3nXdIHx-K0w1c08RzKPQpKr1XTyk47H3dul9PPYm7o8QFgXKYMxUSRaJRAj6Djkndvhk5QuCXmM2orpXf5H5LwG2KZpe2oSyRK9yz--Wy5VSGaXisEcWQr7lRK41Wwe1Q04g~vXieNR7L8kIvsIVRm-rIq~S9HWXSxruRyCfKH9NJUYoDJp-Zakg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const Packages = () => {
  return (
    <Box pl={['10px','10px','10px','70px']} pr={['10px','10px','10px','70px']} mt={['100px','100px','100px','50px']}>
        <Text 
            h={['33px','33px','44px','44px']}
            textAlign={'center'}
            fontWeight={700}
            fontSize={['17px','32px','32px','32px']}
            lineHeight={'44px'}
        >
            Best Packages For You
        </Text>
        <Text
            textAlign={'center'}
            fontSize={['12px','14px','14px','16px']}
            color={'#5A5A5A'}
        >
            This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.
        </Text>

        <SimpleGrid columns={[3,4,5,6]} mt={'50px'} mb={'50px'} pl={['','70px','70px','70px']}>
            <Text 
                bg={'#3282AD'} 
                border='1px solid black'
                pt={'15px'}
                pl={['15px','40px','50px','62px']}
                pb={'15px'}
            >Maldives</Text>
            <Text 
                border='1px solid black'
                pt={'15px'}
                pl={['15px','40px','50px','62px']}
                pb={'15px'}
                color={'#3282AD'}
            >Samudram</Text>
            <Hide below='600px'>
                <Text 
                    border='1px solid black'
                    pt={'15px'}
                    pl={['15px','40px','50px','62px']}
                    pb={'15px'}
                color={'#3282AD'}
                >Cordelia</Text>
                <Hide below='900px'>
                    <Text 
                        border='1px solid black'
                        pt={'15px'}
                        pl={['15px','40px','50px','62px']}
                        pb={'15px'}
                        color={'#3282AD'}
                    >Agatti</Text>
                </Hide>
            </Hide>
            <Text 
                border='1px solid black'
                pt={'15px'}
                pl={['15px','40px','50px','62px']}
                pb={'15px'}
                color={'#3282AD'}
            >More</Text>
        </SimpleGrid>

        <Hide below='900px'>
            <SimpleGrid columns={[1,2,2,3]}>
                {
                    data.map((el,index)=><CardHome key={index} url={el}/>)
                }
            </SimpleGrid>
        </Hide>
        <Show below='900px'>
        <SimpleGrid columns={[1,2,2,3]}>
            {
                data2.map((el,index)=><CardHome key={index} url={el}/>)
            }
            </SimpleGrid>
        </Show>

        <Button colorScheme='blue' variant='outline' display={'block'} m={'auto'} mt={'50px'}>
            Discover More
        </Button>
    </Box>
  )
}

export default Packages