import { Button } from '@mantine/core';
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
    </div>
  );
};
export default HomePage;
