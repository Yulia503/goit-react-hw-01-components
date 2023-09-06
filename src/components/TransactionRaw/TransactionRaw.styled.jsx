import styled from 'styled-components';


export const ExtendedTr = styled.tr`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;



export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  border-right: 0.125rem solid #e9edff;

  :hover {
    background-color: ${props => props.theme.colors.background};
    color: #400075;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    font-weight: ${props => props.theme.fontWeights.bold}px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate3d(6px, -6px, 0);
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;