import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
    const error = useRouteError();
  
    // Type assertion to specify the type of error
    const typedError = error as { statusText?: string, message?: string };
  
    console.error(typedError);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{typedError.statusText || typedError.message}</i>
        </p>
      </div>
    );
  };
  
  export default ErrorPage;
