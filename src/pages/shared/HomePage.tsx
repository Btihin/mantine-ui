import { Button, Card, TextInput, Group, Stack, Center } from '@mantine/core'; // Added new components
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const loadingPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data načtena');
    }, 6000);
  });
  useEffect(() => {
    loadingPromise.then(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Template H1</h1>
      <Button
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Do not forget to star Mantine on GitHub! 🌟',
          })
        }
      >
        Show notification
      </Button>
      <Button
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Do not forget to star Mantine on GitHub! 🌟',
            loading: loading,
            autoClose: 8000,
          })
        }
      >
        druhá notifikace
      </Button>

      {/* New Card for search */}
      <Center style={{ marginTop: '20px' }}>
        <Card withBorder shadow="sm" padding="lg" radius="md" style={{ width: '80%', maxWidth: '400px', height: '300px' }}>
          <Stack align="center" justify="center" h="100%">
            <TextInput label="Nabídku" placeholder="Hledat nabídku..." style={{ width: '100%' }} />
            <TextInput label="Kraj" placeholder="Vybrat kraj..." style={{ width: '100%' }} />
            <Button fullWidth mt="md">
              Hledat
            </Button>
          </Stack>
        </Card>
      </Center>
    </div>
  );
};
export default HomePage;
