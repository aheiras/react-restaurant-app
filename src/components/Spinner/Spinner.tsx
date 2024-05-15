import { FC } from 'react'
import { Container, Loader } from './SpinnerElements';


const Spinner:FC = () => {

    return (
        <Container>
             <Loader />
        </Container>
      );
    };

export default Spinner;
