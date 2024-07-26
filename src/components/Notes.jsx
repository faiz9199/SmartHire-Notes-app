import React from 'react';
import NoteList from './NoteList';

const Notes = ({ notes, handleDelete, handleEdit }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <NoteList notes={notes} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default Notes;
