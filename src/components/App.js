import React, { useState } from 'react';

// Import styles
import 'styles/app.scss';
// Import components
import Player from 'components/Player';
import Song from 'components/Song';
// Import Util
import data from '../data';

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default App;
