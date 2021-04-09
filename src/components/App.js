import React, { useState } from 'react';

// Import styles
import 'styles/app.scss';
// Import components
import Player from 'components/Player';
import Song from 'components/Song';
import Library from 'components/Library';
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
      <Library songs={songs} />
    </div>
  );
};

export default App;
