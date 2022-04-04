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
  MantineProvider,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import {
  GasStation,
  Gauge,
  ManualGearbox,
  Users,
  Heart,
  Check,
  Clock,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[7],
  },

  section: {
    borderBottom: `1px solid theme.colors.dark[4]`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export default function Product(props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Card
        withBorder
        radius="md"
        p="md"
        className={classes.card}
        style={{ width: "80%", margin: "20px 0 0 0" }}
      >
        <Card.Section>
          <Image src={props.photoURL} alt={props.title} height="100%" />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {props.title}
            </Text>
            <Badge size="sm">{props.badge}</Badge>
          </Group>
          <Text size="sm" mt="xs">
            {props.description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group>
            <Badge
              leftSection={<Check size={20} style={{ margin: "4px 0 0 0" }} />}
              color="indigo"
            >
              Verfügbar
            </Badge>
            <Badge
              leftSection={<Clock size={18} style={{ margin: "4px 0 0 0" }} />}
              color="indigo"
            >
              {props.shipping}
            </Badge>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text
            mt="md"
            className={classes.label}
            color="teal"
            style={{ fontSize: "3vh" }}
          >
            {props.price}
          </Text>
          <Text color="gray" style={{ fontSize: "10px" }}>
            Endpreis, zzgl. <u style={{ cursor: "pointer" }}>Versandkosten</u>
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button radius="md" style={{ flex: 1 }}>
            Zum Warenkorb Hinzufügen
          </Button>
          <ActionIcon variant="default" radius="md" size={36} disabled>
            <Heart size={18} className={classes.like} />
          </ActionIcon>
        </Group>
      </Card>
    </MantineProvider>
  );
}
