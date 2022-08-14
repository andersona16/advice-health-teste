import { ComponentType, FC, useCallback, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Content, Toggler, Background } from './styles';

interface IDropdownStyles {
    togglerBackground: string;
    textColor: string;
    colorOnHover?: string;
    backgroundOnHover?: string;
    children?: React.ReactNode;
}

interface IDropdownProps {
    icon?: ComponentType<IconBaseProps>;
    buttonText?: string;
    styles: IDropdownStyles;
    isDisabled?: boolean;
    children?: React.ReactNode ;
}

const Dropdown: FC<IDropdownProps> = ({
    icon: Icon,
    buttonText,
    styles,
    isDisabled,
    children,
}) => {
    const [isDropped, setIsDropped] = useState(false);

    const handleDrop = useCallback(() => {
        setIsDropped(!isDropped);
    }, [isDropped]);

    return (
        <>
            <Container isDropped={isDropped}>
                <Toggler
                    isDropped={isDropped}
                    isDisabled={isDisabled}
                    type="button"
                    customStyles={styles}
                    onClick={isDisabled ? undefined : handleDrop}
                    icon={!!Icon}
                >
                    {Icon ? (
                        <Icon size={23} />
                    ) : (
                        <>
                            {buttonText}
                            <FiChevronDown size={20} color="#fff" />
                        </>
                    )}
                </Toggler>

                <Content isDropped={isDropped}>
                    <ul>{children}</ul>
                </Content>
            </Container>
            <Background isDropped={isDropped} onClick={handleDrop} />
        </>
    );
};

export { Dropdown };
