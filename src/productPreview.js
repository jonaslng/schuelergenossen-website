import React from "react";
import { Bookmark, Heart, Share, ShoppingCartPlus } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor: theme.colors.dark[7],
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colors.dark[7],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

export default function ProductPreview(props) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card)}
      onClick={props.set}
    >
      <Card.Section>
        <a>
          <Image src={props.photo} height={180} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {props.badge === "" ? null : props.badge}
      </Badge>

      <Text className={classes.title} weight={500} component="a" color="#fff">
        {props.name}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}></Text>

      <Group position="apart" className={classes.footer}>
        <Group spacing={8} mr={0}>
          <ActionIcon
            className={classes.action}
            style={{ color: theme.colors.red[6] }}
          >
            <ShoppingCartPlus size={16} />
          </ActionIcon>
          <ActionIcon
            className={classes.action}
            style={{ color: theme.colors.yellow[7] }}
          >
            <Bookmark size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
