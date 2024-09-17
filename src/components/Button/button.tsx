import { FunctionComponent } from 'react';
import { ButtonStyle } from './button.style';
import { buttonPropsType } from './button.type';

const Button: FunctionComponent<buttonPropsType> = props => {
  return (
    <ButtonStyle onClick={props.onClick} subButton={props.subButton}>
      {props.title}
    </ButtonStyle>
  );
};

export default Button;
