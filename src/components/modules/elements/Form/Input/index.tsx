import {
  FC,
  InputHTMLAttributes,
  ComponentType,
  useState,
  useCallback,
  useRef,
  useEffect,
  FocusEvent,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'autoComplete'> {
  icon?: ComponentType<IconBaseProps>;
  upperCase?: boolean;
  name: string;
}

const Input: FC<IInputProps> = ({
  name,
  icon: Icon,
  style,
  disabled,
  onBlur,
  onFocus,
  readOnly,
  upperCase = true,
  defaultValue: defaultValueFromInput,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFosused] = useState(false);
  const [isFilled, setIsFilled] = useState(
    !!inputRef.current?.value || !!defaultValueFromInput,
  );

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue: (ref: any) => {
        // eslint-disable-next-line no-param-reassign
        ref.value = '';
        setIsFilled(false);
      },
      setValue: (ref: any, value: string) => {
        // eslint-disable-next-line no-param-reassign
        ref.value = value;
        setIsFilled(true);
      },
    });
    setIsFilled(!!inputRef.current?.value || !!defaultValueFromInput);
  }, [registerField, fieldName, defaultValueFromInput]);

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFosused(true);

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e);
      }

      setIsFilled(!!inputRef.current?.value);
      setIsFosused(false);

      if (
        rest.type !== 'email' &&
        upperCase &&
        rest.type !== 'password' &&
        !readOnly
      ) {
        const ref = inputRef.current as any;

        ref.value = ref.value.toUpperCase();
      }
    },
    [onBlur, rest.type, upperCase, readOnly],
  );

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      hasErrors={!!error}
      style={style}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValueFromInput || defaultValue}
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={inputRef}
        readOnly={readOnly}
        disabled={disabled}
        autoComplete="off"
        {...rest}
      />
    </Container>
  );
};

export { Input };
