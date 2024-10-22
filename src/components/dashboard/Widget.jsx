import PropTypes from 'prop-types';
import { useState } from 'react';

const Widget = ({ title, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    onEdit(newTitle);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-1 rounded w-full"
            placeholder="Enter new title"
          />
          <div className="mt-2">
            <button 
              onClick={handleEdit} 
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              aria-label="Save changes"
            >
              Save
            </button>
            <button 
              onClick={() => setIsEditing(false)} 
              className="bg-gray-300 px-2 py-1 rounded"
              aria-label="Cancel editing"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-bold">{title}</h2>
          <div className="mt-2">
            <button 
              onClick={() => setIsEditing(true)} 
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              aria-label="Edit widget"
            >
              Edit
            </button>
            <button 
              onClick={onRemove} 
              className="bg-red-500 text-white px-2 py-1 rounded"
              aria-label="Remove widget"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Widget;
