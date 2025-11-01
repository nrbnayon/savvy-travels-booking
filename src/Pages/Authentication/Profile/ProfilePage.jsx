import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit2, FiExternalLink, FiLock } from "react-icons/fi";

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const openPasswordModal = () => setIsModalOpen(true);
  const closePasswordModal = () => {
    setIsModalOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleSavePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Mock API call
    console.log("Password changed successfully!");
    alert("Password changed successfully!");

    closePasswordModal();
  };

  const handleDeleteAccount = () => {
    // Mock delete action
    console.log("Account deleted!");
    alert("Your account has been deleted!");

    closeDeleteModal();
  };

  return (
    <div className="p-5">
      {/* Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl shadow-sm border border-base-300">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-1 right-1 p-2 cursor-pointer rounded-full bg-white/60">
              <FaEdit className="text-gray-600" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <span className="mt-2 text-sm font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Admin
            </span>
            <h2 className="text-lg font-semibold mt-2">Mahdee Rashid</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">E-mail</p>
            <p className="text-gray-600">polash@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">+880 1636 828200</p>
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <a
              href="https://linkedin.com/in/polash"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/polash
            </a>
          </div>
          <div>
            <p className="font-medium">Website</p>
            <a
              href="https://polashportfolio.com"
              className="text-blue-500 hover:underline"
            >
              polashportfolio.com
            </a>
          </div>
        </div>
      </div>
      {/* Update Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Name</label>
          <div className="relative">
            <input
              type="text"
              value="Mahdee Rashid"
              readOnly
              className="w-full bg-blue-100 text-blue-500 rounded-lg py-2 px-4 pr-10 outline-none"
            />
            <FiEdit2 className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">E-mail</label>
          <div className="relative">
            <input
              type="email"
              value="mahdeerashid@gmail.com"
              readOnly
              className="w-full bg-blue-100 text-blue-500 rounded-lg py-2 px-4 pr-10 outline-none"
            />
            <FiEdit2 className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="mt-8 p-6 rounded-2xl border border-blue-200 shadow-sm gap-4">
        <button
          onClick={openPasswordModal}
          className="text-gray-500 hover:text-blue-500 transition py-3"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-200">
                <FiLock className="text-gray-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Change Password</h4>
              </div>
            </div>
            <div>
              <FiExternalLink size={20} />
            </div>
          </div>
        </button>
      </div>

      {/* Delete Account */}
      <div className="md:flex justify-between items-center mt-8 p-6 shadow-sm rounded-2xl border border-red-300">
        <div>
          <h4 className="text-red-500 font-bold text-lg">Delete Account</h4>
          <p className="text-gray-500 text-sm mt-2">
            Contact our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              support team
            </a>{" "}
            to process the deletion of your account.
          </p>
        </div>
        <div className="py-3">
          <button
            onClick={openDeleteModal}
            className="bg-red-500 hover:bg-red-600 shadow-lg text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Apply Delete
          </button>
        </div>
      </div>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Change Password
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-3 rounded-lg outline-none"
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closePasswordModal}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePassword}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Account Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 border border-base-300 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-lg">
            <div className="w-10 h-10 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
              <FaTrashCan className="text-red-500 text-xl" />
            </div>
            <h5 className="text-gray-600 font-bold">
              Are you sure you want to Delete your account?{" "}
            </h5>
            <p className="mb-5">
              Inter your current password you used login with
            </p>
            <div className="flex justify-between gap-4 w-full">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 rounded-lg border border-base-300 text-gray-600 hover:bg-gray-100 w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 w-full"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
