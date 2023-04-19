import React from 'react'
import { Box, Hide, Show, SimpleGrid, Text } from '@chakra-ui/react'
import IslandCard from './IslandCard'

const dataForDesktop = [
  "https://s3-alpha-sig.figma.com/img/0232/11f0/fcea7ebbd7b7402c18bff081f52199aa?Expires=1682899200&Signature=V0tk20rxH3yg2b1F8vbPTCdcVBuTdL0sxONvR3ZwcnM-Ky5SlDUt-my-H6ZpQ2b7Lo7ALWN2NK5yO-6ZbAbrs5WG2R~iqDzNBf~alnnLaX8BDB2~07JFfOYTWrwYs0ONmeFAgPfgC8gcXVwPkjJwYMryhE2K0kuL3C7rdtTlM4xZHxvfLO7nExryNIVuojXAxl1idmPzT~yPSESCwwQQmsq4perS2PsBXsA6N~xDL-lA-zaPgIlAjYRaFeQ0jb-368N0PGI~akDBj8Q1g2qm4f0vO9COiY6XbkNLZyGWQytqDlJDXsjv70BFY6ZfCO1BRrbkpWvJJmGEdUjKNW1rjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/ff14/6e9c/a0e2d52b27f07dc45a72a18b23d0a455?Expires=1682899200&Signature=FOkhytBPiKWKvde7OGzMW1dt2kUL8lijyjTTCTAtkaXW~xZAPsnmmUuQvhuMckODYGMLfGojgU0r2loYz6huEBvvvh-hpbvPP4oluP8KxhRhMyux~rx~Hv1v1QOigtD15jXcqp43WSeKwvZEsrJbWlKOB9xiLqI09ZmV3TfxP4QuIYSFqT8Of-gGiLf2Zl4jyBs2N3HuxwHGCDDi9X1Tpx9kyBD6n2-iQ4CovDb7lBXPjlKB4hnmkDYZlwuLnT8tszQwCj8vVaMx6~gnECTtrKtf9vs8oA3pWxEHuDNwilNnYlsXBh9tmvNctnlpF6X0AMJ3pQH-CfvtgTFQxpmk-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/c60e/6e0e/3cec84d6c1a961a50654233cb0ae2658?Expires=1682899200&Signature=jT2F9j1RUlbgIIF4c3ICZNWEQjOmbZDiRgnUFHxE73tAUiVsetaHFCkem~S0fGFUacG7lUxhnINHEkdtCIKJcUROiZ2Loz9-RzIOXIG75cpTr9ePjR7dwH3aPnO1BI8qc-BaHu9blWbrB0YGelii48afZn~JfPnEuUjOjiY5SBLq84mvrDlJJljwSYLSier7m8twM8McQoH~kDT19vwEUWlDS-vnkfvCEcxC2IxVNlE9u6LvwMDAWYejudX1iJCmOR4X01Hn-unagkgSz0J1pObTG0h4C0d4JQxMRa68owVBRphekHdxDRHfxOtvhJTeCNhBZ8DiCJnEbBi4ksZeYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9e2a/c01a/ef2cb548afae5cca35d28a59546579c0?Expires=1682899200&Signature=DlB3eYGkxkQ~E-6FdI36fYmSJGe8SSxQVZTovf7uuymq-dujZdVk0JtJCyhnprVY3p563WRoXBlezWcp1QAHoDIbManexxcqG8xmUXWAQRHvzhQIAcihxZJmcsU7XdmmFT0PIBlRJWmudrzLz090owF5ZULpuXM~Wdw2VhoOCEXXdgnyBpVbWQMR4hiXL2HHJB-3eLjb1YuEpbQejtrXsAw-GC-mwE5OdCffKt6JyN3oZ7MVzRZHWHL1GknINcKmOWXA7L3dks0WWxmVuqa2II~wCCE3khxgSvzHL1CUEwS8BA0LxDIUcDJZBWINtl4Yvgcad7vGWfN8pfCP-Hr1JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9417/c2ad/2ef5f5b9d892c0404f1df0c1207d44ee?Expires=1682899200&Signature=TvBngq0Nhl4aUt~~A-3dsiPm35Zpu0OvsNV2m36lB1G6gdLWmR313ttIV6E-sSJniTo0HrUvp6kDRcc~PdXG2hXfQq0FUH0~S2pGiKbyoWbpnJd8HDmIDY9h9K3mQemCEGXQF1Nhr1kQrQ0i5zh~Lx-lKalaKwvwvOb9NrgfozKWYeMBwEHy~8Jn0UsaInnrdkbRyImZRQYtsG6RQ6VDa9nhujuB1o0QRrr4nJMmQ4YY~NiOTpB2d4QTzB9UDh5jE1PrfjbWYgsebCuaaiP3X06eERSyGbgKWUm1AT7Y3yl0oWe9-XNvub~i6~-aGG5qyJkE9o5ReywaShcXC~f37Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/cde3/cceb/1a82a60023b9f667965bd5475e3b223f?Expires=1682899200&Signature=CIRbpwmfofEgRixs2TiFWsexSm-BpZ4rWEFjYhOVYA6r0QQ398OJRIFflvb7yLcNuVWL1p7Y87GKaEObzPO3Nm3BfsHptnRk0JvUBqDDBtSoW-DkdKmuQUNCGTiCfHOSyEV624F2HOTuoGWjiIEbuEbYgFo0r8~q~mGzJhWZ5AUYnvFELXeJvr~yTsiMh3FgxAZIjJTM4xms7eGb7eYye5EANErz-8b-IFWplXhbmvjX~spxCkTkFF07AvCxRhTJavrIAq887czUP0Mb6HQV5Umg00hZV-OOPDt4cjuHZ0-d6liXWYMrk4v400UMTnNl3-CQvChLenrCho6SeopOlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const dataBelowDesktop = [
  "https://s3-alpha-sig.figma.com/img/c60e/6e0e/3cec84d6c1a961a50654233cb0ae2658?Expires=1682899200&Signature=jT2F9j1RUlbgIIF4c3ICZNWEQjOmbZDiRgnUFHxE73tAUiVsetaHFCkem~S0fGFUacG7lUxhnINHEkdtCIKJcUROiZ2Loz9-RzIOXIG75cpTr9ePjR7dwH3aPnO1BI8qc-BaHu9blWbrB0YGelii48afZn~JfPnEuUjOjiY5SBLq84mvrDlJJljwSYLSier7m8twM8McQoH~kDT19vwEUWlDS-vnkfvCEcxC2IxVNlE9u6LvwMDAWYejudX1iJCmOR4X01Hn-unagkgSz0J1pObTG0h4C0d4JQxMRa68owVBRphekHdxDRHfxOtvhJTeCNhBZ8DiCJnEbBi4ksZeYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9e2a/c01a/ef2cb548afae5cca35d28a59546579c0?Expires=1682899200&Signature=DlB3eYGkxkQ~E-6FdI36fYmSJGe8SSxQVZTovf7uuymq-dujZdVk0JtJCyhnprVY3p563WRoXBlezWcp1QAHoDIbManexxcqG8xmUXWAQRHvzhQIAcihxZJmcsU7XdmmFT0PIBlRJWmudrzLz090owF5ZULpuXM~Wdw2VhoOCEXXdgnyBpVbWQMR4hiXL2HHJB-3eLjb1YuEpbQejtrXsAw-GC-mwE5OdCffKt6JyN3oZ7MVzRZHWHL1GknINcKmOWXA7L3dks0WWxmVuqa2II~wCCE3khxgSvzHL1CUEwS8BA0LxDIUcDJZBWINtl4Yvgcad7vGWfN8pfCP-Hr1JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9417/c2ad/2ef5f5b9d892c0404f1df0c1207d44ee?Expires=1682899200&Signature=TvBngq0Nhl4aUt~~A-3dsiPm35Zpu0OvsNV2m36lB1G6gdLWmR313ttIV6E-sSJniTo0HrUvp6kDRcc~PdXG2hXfQq0FUH0~S2pGiKbyoWbpnJd8HDmIDY9h9K3mQemCEGXQF1Nhr1kQrQ0i5zh~Lx-lKalaKwvwvOb9NrgfozKWYeMBwEHy~8Jn0UsaInnrdkbRyImZRQYtsG6RQ6VDa9nhujuB1o0QRrr4nJMmQ4YY~NiOTpB2d4QTzB9UDh5jE1PrfjbWYgsebCuaaiP3X06eERSyGbgKWUm1AT7Y3yl0oWe9-XNvub~i6~-aGG5qyJkE9o5ReywaShcXC~f37Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/cde3/cceb/1a82a60023b9f667965bd5475e3b223f?Expires=1682899200&Signature=CIRbpwmfofEgRixs2TiFWsexSm-BpZ4rWEFjYhOVYA6r0QQ398OJRIFflvb7yLcNuVWL1p7Y87GKaEObzPO3Nm3BfsHptnRk0JvUBqDDBtSoW-DkdKmuQUNCGTiCfHOSyEV624F2HOTuoGWjiIEbuEbYgFo0r8~q~mGzJhWZ5AUYnvFELXeJvr~yTsiMh3FgxAZIjJTM4xms7eGb7eYye5EANErz-8b-IFWplXhbmvjX~spxCkTkFF07AvCxRhTJavrIAq887czUP0Mb6HQV5Umg00hZV-OOPDt4cjuHZ0-d6liXWYMrk4v400UMTnNl3-CQvChLenrCho6SeopOlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const Island = () => {
  return (
    <Box mt={'100px'} pl={['10px','10px','10px','70px']} pr={['10px','10px','10px','70px']}>
        <Text 
            textAlign={'center'}
            fontSize={'32px'}
            fontWeight={'bold'}
            color={'#3A3A3A'}
        >Island Stays</Text>

        <Text
            textAlign={'center'}
            m="auto"
            fontSize={'16px'}
            color={'#5A5A5A'}
            w={['310px','528px','700px','1106px']}
        >
            One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.
        </Text>

        <Hide below='900px'>
            <SimpleGrid columns={[1,2,2,3]} mt={10}>
                {
                    dataForDesktop.map((el,index)=><IslandCard key={index} url={el}/>)
                }
            </SimpleGrid>
        </Hide>
        <Show below='900px'>
        <SimpleGrid columns={[1,2,2,3]} mt={10}>
            {
                dataBelowDesktop.map((el,index)=><IslandCard key={index} url={el}/>)
            }
            </SimpleGrid>
        </Show>
    </Box>
  )
}

export default Island