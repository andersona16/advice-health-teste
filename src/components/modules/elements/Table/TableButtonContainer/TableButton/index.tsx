import { FC, ComponentType, ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface ITableButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'warning' | 'danger' | 'info' | 'success';
  icon: ComponentType<IconBaseProps>;
  loading?: boolean;
}

export const TableButton: FC<ITableButton> = ({
  styleType,
  icon: Icon,
  children,
  loading,
  ...rest
}) => {
  return (
    <Container styleType={styleType} {...rest}>
      (
      <>
        <Icon size={22} />
        {children}
      </>
      )
    </Container>
  );
};
