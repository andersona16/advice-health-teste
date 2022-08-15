import { AnimatedValue } from 'react-spring';
import { useContextSelector } from 'use-context-selector';

import { AsideContext } from '../contexts/aside';

interface IAsideContext {
  animation: AnimatedValue<Pick<object, never>>;
  isVisible: boolean;
  handleAsideVisibility(): void;
}

function useAside(): IAsideContext {
  const handleAsideVisibility = useContextSelector(
    AsideContext,
    asideContext => asideContext.handleAsideVisibility,
  );
  const animation = useContextSelector(
    AsideContext,
    asideContext => asideContext.animation,
  );
  const isVisible = useContextSelector(
    AsideContext,
    asideContext => asideContext.isVisible,
  );

  return {
    handleAsideVisibility,
    animation,
    isVisible,
  };
}

export { useAside };
