import adata from '@/assets/Sponsors/adata.svg'
import gigabyte from '@/assets/Sponsors/gigabyte.svg'
import hp from '@/assets/Sponsors/hp.svg'
import msi from '@/assets/Sponsors/msi.svg'
import razer from '@/assets/Sponsors/razer.svg'
import roccat from '@/assets/Sponsors/roccat.svg'
import thermaltake from '@/assets/Sponsors/thermaltake.svg'
import { Center, Image, Wrap, WrapItem } from '@chakra-ui/react'

export default function Sponsors() {
  return (
    <>
      <Wrap justify='center'>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={roccat} alt='roccat' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={msi} alt='msi' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={razer} alt='razer' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={thermaltake} alt='thermaltake' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={adata} alt='adata' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={hp} alt='hp' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src={gigabyte} alt='gigabyte' />
          </Center>
        </WrapItem>
      </Wrap>
    </>
  )
}
