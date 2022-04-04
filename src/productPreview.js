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
  Button,
  MantineProvider,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { width } from "@mui/system";

export default function ProductPreview(props) {
  const theme = useMantineTheme();
  const notifications = useNotifications();

  const secondaryColor = theme.colors.dark[1];

  const showProduct = () => {
    props.showProduct({
      name: props.name,
      id: props.id,
      description: props.description,
      photo: props.photo,
      price: props.price,
      badge: props.badge,
      features: props.features,
      shipping_time: props.shipping_time,
    });
  };

  return (
    <div className="preview">
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Card
          shadow="sm"
          p="lg"
          style={{ width: "30%", margin: "20px 0 10px 0" }}
        >
          <Card.Section>
            <Image src={props.photo} width="100%" alt={props.name} />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>{props.name}</Text>
            {props.available ? (
              <Badge color="cyan" variant="light">
                {props.badge}
              </Badge>
            ) : (
              <Badge color="red" variant="light">
                Nicht verfügbar
              </Badge>
            )}
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {props.price}
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            disabled={props.available ? false : true}
            onClick={() => showProduct()}
          >
            Mehr
          </Button>
        </Card>
      </MantineProvider>
    </div>
  );
}
