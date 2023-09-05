import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  max-width: 100%;
  width: 360px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 40px;
  border: 2px solid #grey;
  background-color: ${props => props.theme.colors.background};
  `;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;

  border-radius: 50%;
   box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
    cursor: pointer;
  }
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.accent};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Name = styled(Info)`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.primary};
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.secondary};
`;

export const StatsInformationList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[4]}px;
  width: 100%;
`;

export const StatsInformationItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

  &:hover {
    background: #fffff0;
   box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    cursor: pointer;
  }

  :not(:last-child){
  border-right: 1px dotted ${props => props.theme.colors.primary};

  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.secondary};
  text-shadow: 1px 1px 1px #grey;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

