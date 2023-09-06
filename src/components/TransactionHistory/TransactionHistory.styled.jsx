import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  max-width: 100%;
  width: 100%;
  border-radius: ${props => props.theme.radii.medium};
   box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
    cursor: pointer;
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;

  :first-child {
    border-top-left-radius: ${props => props.theme.radii.medium};
  }

  :last-child {
    border-top-right-radius: ${props => props.theme.radii.medium};
  }
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;


export const Type = styled.td`
  text-transform: capitalize;
`;
