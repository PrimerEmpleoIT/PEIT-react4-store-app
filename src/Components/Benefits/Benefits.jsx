import { Wrap, VStack, Image, Box} from '@chakra-ui/react'

export default function Benefits() {
    const Items ={
        title1: 'Product Support',
        description1: 'Up to 3 years on-site warranty available for your peace of mind.',
        title2: 'Personal Account',
        description2: 'With big discounts, free delivery and a dedicated support specialist.',
        title3: 'Amazing Savings',
        description3: 'Up to 70% off new Products, you can be sure of the best price.'
    }
    return (
    <Wrap justify='center'>
        <VStack w='265px' h='168.47px'>
            <Box align='center'>
                <Box>
                    <Image src='src/assets/Benefits/Support.svg'/>
                </Box>  
                <Box>
                    {Items.title1}
                </Box>
                <Box>
                    {Items.description1}
                </Box>
            </Box>
        </VStack>
        <VStack w='265px' h='168.47px'>
            <Box align='center'>
                <Box>
                    <Image src='src/assets/Benefits/Account.svg'/>
                </Box>  
                <Box>
                    {Items.title2}
                </Box>
                <Box>
                    {Items.description2}
                </Box>
            </Box>
        </VStack>
        <VStack w='265px' h='168.47px'>
            <Box align='center'>
                <Box>
                    <Image src='src/assets/Benefits/Saving.svg'/>
                </Box>  
                <Box>
                    {Items.title3}
                </Box>
                <Box>
                    {Items.description3}
                </Box>
            </Box>
        </VStack>
    </Wrap>
)}