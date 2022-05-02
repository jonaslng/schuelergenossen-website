import React from "react";
import {
  UnstyledButton,
  Checkbox,
  Text,
  createStyles,
  MantineProvider,
  Container,
  Title,
  Alert,
} from "@mantine/core";
import { InfoCircle } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  button: {
    display: "flex",
    width: "100%",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.lg,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],
    },
  },
}));

export default function Pay(props) {
  const { classes, cx } = useStyles();

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Title style={{ color: "white" }}>Bezahlmethode auswählen</Title>
        <Alert
          style={{ margin: "20px 0 10px 0" }}
          variant="light"
          icon={<InfoCircle size={16} />}
          title="Bezahlung nicht möglich"
          color="red"
        >
          Der Onlineshop ist zurzeit nicht erreichbar
        </Alert>
        <UnstyledButton
          onClick={() => props.setPaymentMethod(1)}
          className={cx(classes.button)}
          style={{ margin: "20px 0 10px 0", width: "60%" }}
          disabled
        >
          <Checkbox
            checked={false}
            onChange={() => {}}
            tabIndex={-1}
            size="md"
            mr="xl"
            styles={{ input: { cursor: "pointer" } }}
            disabled
          />

          <div>
            <Text weight={500} mb={7} sx={{ lineHeight: 1 }}>
              Bei Abholung
            </Text>
            <Text size="sm" color="dimmed">
              Die Bezahlung erfolgt bei Abholung der Ware an der Schule. Du
              solltest das Geld passend dabei haben, da Wechseln im Sekretariat
              unter Umständen nicht möglich ist.
            </Text>
          </div>
        </UnstyledButton>
        <UnstyledButton
          onClick={() => props.setPaymentMethod(1)}
          className={cx(classes.button)}
          style={{ margin: "1px 0 10px 0", width: "60%" }}
          disabled
        >
          <Checkbox
            checked={false}
            onChange={() => props.setPaymentMethod(2)}
            tabIndex={-1}
            size="md"
            mr="xl"
            styles={{ input: { cursor: "pointer" } }}
            disabled
          />

          <div>
            <Text weight={500} mb={7} sx={{ lineHeight: 1 }}>
              Bei Lieferung
            </Text>
            <Text size="sm" color="dimmed">
              Die Bezahlung erfolgt bei Lieferung der Ware. Diese Bezahlmethode
              ist nur innerhalb von Selm möglich. Wir werden dich kontaktieren,
              um einen Liefertermin zu vereinbaren.
            </Text>
          </div>
        </UnstyledButton>
      </Container>
    </MantineProvider>
  );
}
