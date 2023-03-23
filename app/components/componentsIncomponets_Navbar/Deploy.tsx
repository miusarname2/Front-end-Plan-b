import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Button,
    Stack,
    Flex,
  } from '@chakra-ui/react';

  
  export default function ServerSecondaryOptions() {
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              aria-label="Change Language"
              variant="solid"
              w="fit-content"
            >
              Select Language
            </Button>
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  as={"a"}
                  w="194px"
                  variant="ghost"
                  justifyContent="space-between"
                  fontWeight="normal"
                  href={"/es"}
                  fontSize="sm"
                >
                  Español/Spanish
                </Button>
                <Button
                  as={"a"}
                  href={"/"}
                  w="194px"
                  variant="ghost"
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm"
                >
                  English/Ingles
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }