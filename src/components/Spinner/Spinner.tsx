import { FC } from 'react';
import { Container, Loader, OuterCircle } from './SpinnerElements';

const Spinner: FC = () => {
  return (
    <Container>
      <OuterCircle />
      <Loader />
    </Container>
  );
};

export default Spinner;
