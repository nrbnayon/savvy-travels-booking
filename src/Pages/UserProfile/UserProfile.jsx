import { useState, useRef } from "react";
import { Edit3, Camera } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function UserProfile() {
  const { user } = useAuth();
  console.log(user);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.photoURL);
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState({
    name: user?.displayName,
    email: user?.email,
    joinDate: "Joined Aug 20, 2025",
    city: "",
    stateRegion: "",
    country: "",
    jobTitle: "",
    department: "",
    company: "",
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file (JPG or PNG)");
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpdate = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log("Updated profile data:", profileData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="container px-5 mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Profile
          </h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <Edit3 size={16} />
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <div className="mt-3 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/jpeg,image/jpg,image/png"
                  className="hidden"
                />
                <button
                  onClick={triggerFileInput}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 mx-auto transition-colors"
                >
                  <Camera size={14} />
                  Upload New Photo
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  At least 800x800 px recommended.
                  <br />
                  JPG or PNG is allowed
                </p>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            {!isEditing ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 mb-1">{profileData.email}</p>
                <p className="text-gray-500 text-sm">{profileData.joinDate}</p>
              </>
            ) : (
              <div className="space-y-3 w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 mb-1">{profileData.email}</p>
                <p className="text-gray-500 text-sm">{profileData.joinDate}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.city || "City"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="City"
              />
            )}
          </div>

          {/* State/Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State / Region
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.stateRegion || "State / Region"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.stateRegion}
                onChange={(e) =>
                  handleInputChange("stateRegion", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="State / Region"
              />
            )}
          </div>

          {/* Country */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.country || "Country"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Country"
              />
            )}
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title ( Optional )
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.jobTitle || "Title"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Title"
              />
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department ( Optional )
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.department || "Department"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.department}
                onChange={(e) =>
                  handleInputChange("department", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Department"
              />
            )}
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company ( Optional )
            </label>
            {!isEditing ? (
              <div className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 min-h-[42px] flex items-center">
                {profileData.company || "Company"}
              </div>
            ) : (
              <input
                type="text"
                value={profileData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company"
              />
            )}
          </div>
        </div>

        {/* Update Button - Only shown in edit mode */}
        {isEditing && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleUpdate}
              className="w-full sm:w-auto min-w-[200px] bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
