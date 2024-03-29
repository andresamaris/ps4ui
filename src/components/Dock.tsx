import * as React from 'react';
import styled from 'styled-components';

export type DockProps = React.HTMLAttributes<HTMLDivElement>;

export const Dock = styled.div<DockProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
