import React, { Profiler } from "react";

import Directory from "../../components/directory/directory.container";

import { HomeContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Directory />
      </Profiler>
    </HomeContainer>
  );
};

export default Home;
