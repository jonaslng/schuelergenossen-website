import React from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
} from "@mantine/core";
import { GasStation, Gauge, ManualGearbox, Users } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[7],
    width: "90%",
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
    height: "40%",
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.dark[4]}`,
  },

  icon: {
    marginRight: 5,
    color: theme.colors.dark[2],
  },
  image: {
    width: "70%",
  },
}));

const mockdata = [
  { label: "4 passengers", icon: Users },
  { label: "100 km/h in 4 seconds", icon: Gauge },
  { label: "Automatic gearbox", icon: ManualGearbox },
  { label: "Electric", icon: GasStation },
];

export default function Product(props) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} />
      <Text size="xs" color="dimmed">
        {feature.label}
      </Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={props.photoURL} className={classes.image} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500} color="#fff">
            {props.title}
          </Text>
          <Text size="xs" color="dimmed">
            {props.description}
          </Text>
        </div>
        <Badge variant="outline">{props.badge}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }} color="teal">
              {props.price}
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            ></Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }} color="orange">
            Zum Warenkorb hinzufügen
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
