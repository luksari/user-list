import React from 'react';
import { LoaderBox, StyledLoader, StyledLoaderWrapper } from '../styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader>
        <LoaderBox color={'#BADA55'} delay={300} />
        <LoaderBox color={'#C0FFEE'} delay={500} />
        <LoaderBox color={'#ADD1C7'} delay={700} />
        <LoaderBox color={'#C0FF33'} delay={900} />
      </StyledLoader>
    </StyledLoaderWrapper>
  );
};

export default Loader;
