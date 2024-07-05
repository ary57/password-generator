import { CopyButton, Button } from '@mantine/core';

export function PasswordCopyButton({password} : {password:string}) {
  return (
    <CopyButton value={password}>
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      )}
    </CopyButton>
  );
}