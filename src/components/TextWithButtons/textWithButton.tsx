import { TextInput, ActionIcon } from '@mantine/core';
import { IconRefresh, IconCopy } from '@tabler/icons-react';
import { rem } from '@mantine/core';

export function InputWithButton(){
  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={84}
      rightSection={
        <div style={{ display: 'flex', gap: rem(8) }}> {/* Adjust gap as needed */}
          <ActionIcon size={32} radius="xl" color={"orange"} variant="filled">
            <IconRefresh style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size={32} radius="xl" color={"orange"} variant="filled">
            <IconCopy style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </div>
      }
    />
  );
};
