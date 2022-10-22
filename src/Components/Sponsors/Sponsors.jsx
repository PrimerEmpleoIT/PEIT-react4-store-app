import { Center, Image, Wrap, WrapItem } from '@chakra-ui/react'

export default function Sponsors() {
  return (
    <>
      <Wrap justify='center'>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/roccat.svg' alt='roccat' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/msi.svg' alt='msi' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/razer.svg' alt='razer' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image
              src='src/assets/Sponsors/thermaltake.svg'
              alt='thermaltake'
            />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/adata.svg' alt='adata' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/hp.svg' alt='hp' />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='160px' h='149.48px'>
            <Image src='src/assets/Sponsors/gigabyte.svg' alt='gigabyte' />
          </Center>
        </WrapItem>
      </Wrap>
    </>
  )
}
