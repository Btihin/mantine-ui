import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useState } from 'react';

export function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container size={420} my={40}>
      <Title ta="center">{isRegister ? 'Vytvořit účet' : 'Vítejte zpět!'}</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {isRegister ? 'Máte již účet? ' : 'Nemáte ještě účet? '}
        <Anchor size="sm" component="button" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Přihlásit se' : 'Vytvořit účet'}
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {isRegister ? (
          <>
            <TextInput label="Jméno" placeholder="Vaše jméno" required />
            <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" />
            <PasswordInput label="Heslo" placeholder="Vaše heslo" required mt="md" />
            <PasswordInput label="Potvrdit heslo" placeholder="Potvrďte heslo" required mt="md" />
            <Button fullWidth mt="xl">
              Registrovat
            </Button>
          </>
        ) : (
          <>
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Heslo" placeholder="Vaše heslo" required mt="md" />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Zapamatovat si mě" />
              <Anchor component="button" size="sm">
                Zapomněli jste heslo?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl">
              Přihlásit se
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
}
