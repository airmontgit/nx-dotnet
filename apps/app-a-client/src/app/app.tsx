import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { TsLibA } from '@nx-new/ts-lib-a';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="app-a" />
      <TsLibA />
    </StyledApp>
  );
}

export default App;
