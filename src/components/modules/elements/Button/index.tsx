import { ButtonHTMLAttributes, ComponentType, forwardRef } from 'react';
import { IconBaseProps } from 'react-icons';
import Loader from 'react-loader-spinner';

import { ButtonCustom } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
  styleType: 'success' | 'info' | 'danger' | 'warning';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ icon: Icon, styleType, children, loading = false, ...rest }, ref) => {
    return (
      <ButtonCustom
        ref={ref}
        {...rest}
        styleType={styleType}
        loading={Number(loading)}
        disabled={loading || rest.disabled}
      >
        {loading ? (
          <Loader type="TailSpin" color="#fff" width={24} height={24} />
        ) : (
          <>
            {Icon && (
              <Icon
                size={24}
                style={
                  Icon && !children ? { marginRight: 0 } : { marginRight: 8 }
                }
              />
            )}
            {children}
          </>
        )}
      </ButtonCustom>
    );
  },
);

export { Button };
