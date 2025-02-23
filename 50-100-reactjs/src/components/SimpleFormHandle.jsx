import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SimpleFormHandle = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    interests: []
  });
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, interests: [...prevData.interests, value] };
      } else {
        return { ...prevData, interests: prevData.interests.filter(item => item !== value) };
      }
    });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError('Password must be 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password must be the same');
      return;
    }

    setError('');
    toast.success("Account created successfully!");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      interests: []
    });
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-white rounded-lg p-6 w-96'>
          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center'>
              Create an Account
            </h2>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <input
                className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                type='text'
                required
                name='fullName'
                placeholder='Enter Name here'
                value={formData.fullName}
                onChange={handleChanges}
              />
              <input
                className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                type='email'
                required
                placeholder='Enter Your Email'
                name='email'
                value={formData.email}
                onChange={handleChanges}
              />
              <input
                className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                type='password'
                required
                name='password'
                placeholder='Enter Password'
                value={formData.password}
                onChange={handleChanges}
              />
              <input
                required
                className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md 
                focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChanges}
              />

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChanges}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChanges}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChanges}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Sports"
                    checked={formData.interests.includes("Sports")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Sports
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Music"
                    checked={formData.interests.includes("Music")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Music
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Travel"
                    checked={formData.interests.includes("Travel")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Travel
                </label>
              </div>

              {
                error && (
                  <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
                )
              }
              <button className='text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md
               focus:outline-none hover:bg-indigo-700  focus:ring-2 focus:ring-indigo-500 w-full mt-3'>
                Submit
              </button>
            </form>

            <p className='text-xs text-gray-600 mt-4 text-center'>
              By registering, you agree to our{' '}
              <span className='text-indigo-600'>Terms & Conditions</span> and{' '}
              <span className='text-indigo-600'>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />

      {
        isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Account Created</h3>
              <div className="mb-4">
                <p className="text-gray-700">
                  <strong>Name:</strong> {formData.fullName}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {formData.email}
                </p>
                <p className="text-gray-700">
                  <strong>Gender:</strong> {formData.gender}
                </p>
                <p className="text-gray-700"><strong>interests:</strong> {formData.interests.join(",")}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-full px-4 py-2 bg-red-500 text-white font-medium 
              rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                Cancel
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default SimpleFormHandle;
