import { useState, useEffect } from "react";
import Notes from "../components/Notes";
import Modal from "../components/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const closeModal = () => {
    setModal(false);
    setEditingNote(null);
  };

  const handleClick = () => {
    setModal(true);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setModal(true);
  };

  // Pagination
  const indexOfLastNote = currentPage * itemsPerPage;
  const indexOfFirstNote = indexOfLastNote - itemsPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(notes.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notes</h1>
        <button 
          onClick={handleClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create a note
        </button>
      </div>
      <Notes 
        notes={currentNotes} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} 
      />
      {modal && (
        <Modal 
          closeModal={closeModal} 
          addNote={addNote} 
          updateNote={updateNote} 
          editingNote={editingNote} 
        />
      )}
      <div className="mt-4 flex justify-center">
        <div className="pagination flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
