import { Link } from "react-router-dom";

const SharedModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Select Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-500 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Test Name</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option value="">Math test</option>
              <option value="1">Option 1</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Select Question</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option value="">40 Marks</option>
              <option value="1">Option 1</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option value="">60 min</option>
              <option value="1">Option 1</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 mr-2">
            Cancel
          </button>
          <Link to="/exam_center" className="bg-black text-white rounded-md px-4 py-2">
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;
