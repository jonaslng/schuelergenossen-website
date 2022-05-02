import React, { useState } from "react";
import {
  Center,
  createStyles,
  MantineProvider,
  Paper,
  Text,
  ThemeIcon,
  Group,
  Alert,
  Modal,
} from "@mantine/core";
import { ColorSwatch, AlertTriangle } from "tabler-icons-react";

//TSHIRT BESTELLUNG ????
const tshirtbestellung = true;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    width: "70%",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
    },
  },
}));

const modal = <div>...</div>;

export default function Hoodies(props) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(0);

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <div className="hoodies">
        <Modal
          opened={opened > 0 ? true : false}
          onClose={() => setOpened(0)}
          title={
            opened === 1
              ? "Pulli bestellen"
              : opened === 2
              ? "T-Shirt bestellen"
              : "Poloshirt bestellen"
          }
        >
          {modal}
        </Modal>
        <Text style={{ fontSize: "5vh" }} weight={750} mt="md" color="dark">
          Schülergenossen Selm
        </Text>
        {!tshirtbestellung ? (
          <Alert icon={<AlertTriangle />} color="red">
            Gerade findet keine Pulli oder T-Shirt Bestellung statt!
          </Alert>
        ) : (
          <>
            <Paper
              withBorder
              radius="md"
              className={classes.card}
              onClick={() => setOpened(1)}
            >
              <Text size="xl" weight={700} mt="md">
                Pullis bestellen
              </Text>
              <Text size="sm" mt="sm" color="dimmed"></Text>
            </Paper>
            <Paper
              withBorder
              radius="md"
              className={classes.card}
              onClick={() => setOpened(2)}
            >
              <Text size="xl" weight={700} mt="md">
                T-Shirts bestellen
              </Text>
              <Text size="sm" mt="sm" color="dimmed"></Text>
            </Paper>
            <Paper
              withBorder
              radius="md"
              className={classes.card}
              onClick={() => setOpened(3)}
            >
              <Text size="xl" weight={700} mt="md">
                Poloshirts bestellen
              </Text>
              <Text size="sm" mt="sm" color="dimmed"></Text>
            </Paper>
          </>
        )}
      </div>
    </MantineProvider>
  );
}
