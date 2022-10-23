import { Wrap, Image, Box} from '@chakra-ui/react'
import { benefits } from '@/Helpers/Benefits'

export default function Benefits() {

    const listItems = benefits.map(benefit =>
        <Wrap justify='center'>
                <Box w='265px' h='168.47px'>
                    <Box align='center' >
                        <Image key={benefit.id} src={benefit.icon} alt='benefits-icons'/>
                        <Box>
                        {benefit.title}
                        </Box>
                        <Box>
                        {benefit.info}
                        </Box>
                    </Box>
                </Box>
        </Wrap>
      )
    return (
       <> {listItems} </>
    )
}