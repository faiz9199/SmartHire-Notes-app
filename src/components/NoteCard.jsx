import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const NoteCard = ({ note, handleDelete, handleEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-700 mb-2">{note.content}</p>
      <div className="text-sm text-gray-500 mb-4">
        <small>Created at: {new Date(note.createdAt).toLocaleString()}</small>
        <br />
        <small>Updated at: {new Date(note.updatedAt).toLocaleString()}</small>
      </div>
      <div className="flex space-x-2">
        <MdDelete className="cursor-pointer" size={20} onClick={() => handleDelete(note.id)} />
        <FaEdit className="cursor-pointer" size={18} onClick={() => handleEdit(note)} />
      </div>
    </div>
  );
};

export default NoteCard;
