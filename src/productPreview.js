import React from "react";
import {
  Bookmark,
  Heart,
  Share,
  ShoppingCartPlus,
  ShoppingCartOff,
} from "tabler-icons-react";
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
import { useNotifications } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor: theme.colors.dark[7],
    width: "50vh",
    margin: "15px 0 15px 0",
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
  const notifications = useNotifications();

  const addToCart = () => {
    if (!props.available) {
      notifications.showNotification({
        title: "Dieses Produkt ist gerade nicht verfügbar",
        icon: <ShoppingCartOff />,
        autoClose: 2000,
        color: "red",
      });
      return;
    }
    const temp = props.cart;
    temp.push({
      name: props.name,
      id: props.id,
      price: props.price,
      photo: props.photo,
    });
    props.addToCart(temp);
    console.log(props.cart);
    notifications.showNotification({
      title: props.name + " wurde zum Warenkorb hinzugefügt",
      icon: <ShoppingCartPlus />,
      autoClose: 2500,
      color: "green",
    });
  };

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card)}
      onClick={props.set}
    >
      <Card.Section>
        <a>
          <Image src={props.photo} height="100%" />
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

      <Text size="sm" color="dimmed" lineClamp={4}>
        {props.price}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Group spacing={8} mr={0}>
          <ActionIcon
            className={classes.action}
            style={
              props.available
                ? { color: theme.colors.red[6] }
                : { color: "gray" }
            }
            onClick={() => addToCart()}
          >
            {props.available ? (
              <ShoppingCartPlus size={16} />
            ) : (
              <ShoppingCartOff size={16} />
            )}
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