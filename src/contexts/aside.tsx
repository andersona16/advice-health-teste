import { FC, useCallback, useState } from 'react';
import { AnimatedValue, useSpring } from 'react-spring';
import { createContext } from 'use-context-selector';

interface IAsideContext {
  // eslint-disable-next-line @typescript-eslint/ban-types
  animation: AnimatedValue<Pick<object, never>>;
  isVisible: boolean;
  handleAsideVisibility(): void;
  children?: React.ReactNode;
}

export const AsideContext = createContext<IAsideContext>({} as IAsideContext);

const AsideProvider: FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animation = useSpring({ left: isVisible ? '0' : '-280px' });

  const handleAsideVisibility = useCallback(() => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [isVisible]);

  return (
    <AsideContext.Provider
      value={{ handleAsideVisibility, animation, isVisible }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export { AsideProvider };
