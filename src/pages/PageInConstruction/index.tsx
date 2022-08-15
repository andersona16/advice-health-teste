import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

const PageInDevelopment: FC = () => {
  const history = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history(-1);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [history]);

  return (
    <Container>
      <h1>Página em desenvolvimento</h1>

      <p>
        Desculpe-nos o transtorno. Em breve esta página estará disponível para
        visualização.
      </p>

      <p>Redirecionando...</p>
    </Container>
  );
};

export { PageInDevelopment };
