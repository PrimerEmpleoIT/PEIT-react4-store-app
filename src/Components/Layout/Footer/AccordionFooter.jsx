import { footerList } from '@/Helpers/footerList'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Highlight,
  Show,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

function AccordionFooter() {
  return (
    <Show below={'lg'}>
      <Accordion allowToggle>
        {footerList.map((lists) => {
          const { id, title, list } = lists

          return (
            <div key={id}>
              <AccordionItem>
                <Text
                  fontFamily={'body'}
                  fontWeight={'bold'}
                  fontSize={'small'}
                  color={'light'}
                >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel
                  fontFamily={'body'}
                  fontWeight={'regular'}
                  fontSize={'review'}
                  pb={4}
                >
                  <SimpleGrid column={1} gap={1}>
                    {list.map((listItem, i) => (
                      <Text
                        key={i}
                        fontWeight={'regular'}
                        fontSize={'review'}
                        color={'disable'}
                      >
                        <Highlight
                          query={['(00) 1234 5678', 'shop@email.com']}
                          styles={{ color: 'contact' }}
                        >
                          {listItem}
                        </Highlight>
                      </Text>
                    ))}
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            </div>
          )
        })}
      </Accordion>
    </Show>
  )
}
export default AccordionFooter
