import React from 'react';
import { createStyles, Text, Container, ActionIcon, Group, MantineProvider, Image } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram, BrandGithub } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.dark[6],
    borderTop: `1px solid ${
      theme.colors.dark[5]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color:theme.colors.dark[1],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontSize: "20px",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color:theme.white,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colors.dark[4]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

let data = [
    {
        title: 'Rechtliches',
        links: [
            {
                label: 'Impressum',
                link: "/impressum"
            },
            {
                label: 'Liefer- und Zahlungsbedingungen',
                link: "/deliveryinfo"
            },
            {
              label: "Datenschutz",
              link: "/privacy"
            },
            {
              label: "Cookie-Richtlinie",
              link: "/cookie"
            }
        ]
    },
]

export function Footer() {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        component="a"
        to={link.link}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <MantineProvider theme={{colorScheme: "dark"}}>
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Image src='https://image.jimcdn.com/app/cms/image/transf/dimension=380x10000:format=png/path/s5716ff8e3a6d452a/image/i047f7ead75260886/version/1455016429/image.png' style={{width: "70px"}} />
          <Text size="xs" color="dimmed" className={classes.description}>
            Die Inhalte dieser Website sind urheberrechtlich geschützt.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © Schülergenossen Selm 2022
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" onClick={() => window.location = "https://github.com/jonaslng/schuelergenossen-website"}>
            <BrandGithub size={18} />
          </ActionIcon>
          <ActionIcon size="lg" onClick={() => window.location = "https://www.instagram.com/schuelergenossenschaft_selm/"}>
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
    </MantineProvider>
  );
}