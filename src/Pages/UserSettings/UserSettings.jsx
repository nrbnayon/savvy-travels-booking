const UserSettings = () => {
  return (
    <div className="container px-5 mx-auto pt-10 ">
      <div className="p-3  md:p-6 rounded-3xl bg-white space-y-8">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-semibold text-3xl md:text-[40px] text-[#1A1A1A]">
            Settings
          </h2>
          <p className="text-[#4A4A4A]">
            Manage your email address, mobile number and password.
          </p>
        </div>
        {/* Form Update */}
        <div className="space-y-4">
          {/* Email input field */}
          <div className="flex flex-col gap-2 text-[#4A4A4A]">
            {/* Label and edit button */}
            <div className="flex justify-between items-center">
              <label>Email</label>
              <button className="text-blue-500 hover:text-blue-700 underline">
                Edit
              </button>
            </div>
            {/* Input field */}
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-[#CACACA] p-4 rounded-lg focus:outline-none  "
              readOnly
            />
          </div>
          {/* Email input field */}
          <div className="flex flex-col gap-2 text-[#4A4A4A]">
            {/* Label and edit button */}
            <div className="flex justify-between items-center">
              <label>Phone</label>
              <button className="text-blue-500 hover:text-blue-700 underline">
                Edit
              </button>
            </div>
            {/* Input field */}
            <input
              type="email"
              placeholder="000-0000-0000"
              className="border border-[#CACACA] p-4 rounded-lg focus:outline-none  "
              readOnly
            />
          </div>
          {/* Phone input field */}
          <div className="flex flex-col gap-2 text-[#4A4A4A]">
            {/* Label and edit button */}
            <div className="flex justify-between items-center">
              <label>Password</label>
              <button className="text-blue-500 hover:text-blue-700 underline">
                Edit
              </button>
            </div>
            {/* Input field */}
            <input
              type="password"
              placeholder="********"
              className="border border-[#CACACA] p-4 rounded-lg focus:outline-none  "
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
