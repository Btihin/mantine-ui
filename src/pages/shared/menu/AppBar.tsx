import { useDisclosure } from '@mantine/hooks';
import classes from './Appbar.module.css';
import { AppShell, Burger, Group, UnstyledButton, Avatar, Button, ActionIcon } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeState } from '../../../state/useThemeState';

export default function Appbar(props: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Nahradit skutečným stavem autentizace
  const { theme, zmenaTheme } = useThemeState();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group>
              Header
              <Group ml="xl" gap={0} visibleFrom="sm">
                <UnstyledButton component={Link} to="/" className={classes.control}>
                  Home
                </UnstyledButton>
                <UnstyledButton className={classes.control}>Blog</UnstyledButton>
                <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
                <UnstyledButton className={classes.control}>Support</UnstyledButton>
              </Group>
            </Group>
            <Group>
              {isLoggedIn ? (
                <Avatar
                  src={null}
                  alt="uživatel"
                  radius="xl"
                  onClick={() => setIsLoggedIn(false)}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <Group>
                  <Button component={Link} to="/login" variant="default">
                    Přihlásit se
                  </Button>
                  <Button component={Link} to="/login">Registrace</Button>
                </Group>
              )}
              <ActionIcon variant="default" onClick={zmenaTheme} size="lg" aria-label="Toggle color scheme">
                {theme ? '☀️' : '🌙'}
              </ActionIcon>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton component={Link} to="/" className={classes.control}>
          Home
        </UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
