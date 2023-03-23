import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options = [
  { id: 1, desc: "1 lorem ipsum" },
  { id: 2, desc: "Lorem, ipsum dolor." },
  { id: 3, desc: "Monthly Updates" },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      {/* <Stack>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Get Started
          </Button>
        </Stack> */}
    </Stack>
  );
};
const ThreeTierPricingHorizontal = (props:any) => {
  return (
    <Box py={6} px={5}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Your notes from <Text color="purple.400">{props.title}</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          title={"N Nota"}
          typePlan="Nota"
          options={[{ id: 1, desc: "Procentaje de Nota" }]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota Trabajo x"}
          checked={true}
          typePlan="5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "10%" },
          ]}
        />
        <Divider />
        <PackageTier
          title={"Nota parcial Y"}
          typePlan="3.5"
          options={[
            { id: 1, desc: "Procentaje de Nota" },
            { id: 2, desc: "90%" },
          ]}
        />
        <Divider />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
