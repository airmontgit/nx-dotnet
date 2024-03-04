import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TsLibAProps {}

const StyledTsLibA = styled.div`
  color: pink;
`;

export function TsLibA(props: TsLibAProps) {
  return (
    <StyledTsLibA>
      <h1>Welcome to TsLibA!</h1>
    </StyledTsLibA>
  );
}

export default TsLibA;
