import { styled } from 'styled-components';
type ButtonContainer = {
  //true = subButton style
  subButton?: boolean;
};
export const ButtonStyle = styled.div<ButtonContainer>`
  padding: 16px 74px;
  display: inline-flex;
  justify-content: center;
  background-color: ${props => (props.subButton ? '#EB0000' : '#000000')};
  color: #ffffff;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
