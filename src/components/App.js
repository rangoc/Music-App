import React from 'react';

//Import styles
import 'styles/app.scss';
//Import components
import Player from 'components/Player';
import Song from 'components/Song';

const App = () => {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
};

export default App;
