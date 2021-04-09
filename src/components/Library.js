import React from 'react';
import LibrarySong from 'components/LibrarySong';
const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, index) => (
          <LibrarySong key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
