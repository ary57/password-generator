import { Group, useMantineColorScheme, MantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useState } from 'react';


export function ColorSchemeToggle() {
  const [theme, setTheme] = useState<MantineColorScheme>("light")
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <ActionIcon size={32} radius="xl" color={"#ffb38a"} variant="filled" onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        setColorScheme(theme)
      }}>
        {theme === "light" ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Group>
  );
}
