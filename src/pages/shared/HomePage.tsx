import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const HomePage = () => {
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
    </div>
  );
};
export default HomePage;
