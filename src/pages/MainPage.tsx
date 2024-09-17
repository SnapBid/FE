import Button from 'components/Button/button';
import { FunctionComponent } from 'react';

const MainPage: FunctionComponent = () => {
  return (
    <>
      <Button
        title={'hello'}
        onClick={() => {
          console.log('hello');
        }}
      />
    </>
  );
};

export default MainPage;
