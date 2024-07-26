import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, handleDelete, handleEdit }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </div>
  );
};

export default NoteList;
