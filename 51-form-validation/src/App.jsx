import React, { useState } from 'react'

const App = () => {
  const defaultValues = {
    firstName: {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name...',
      value: '',
      isError: false,
      errorMsg: "First Name can't be empty"
    },
    lastName: {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name...',
      value: '',
      isError: false,
      errorMsg: "Last Name can't be empty"
    },
    email: {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email...',
      value: '',
      isError: false,
      errorMsg: "Email Name can't be empty"
    },
    password: {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password...',
      value: '',
      isError: false,
      errorMsg: "Password  can't be empty"
    },
    confirmPassword: {
      id: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password...',
      value: '',
      isError: false,
      errorMsg: "Confimr Password  can't be empty"
    }
  };

  const [formData, setFormData] = useState(defaultValues);
  const [isPassMatch, setIsPassMatch] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleInput(e) {
    const key = e.target.id;
    const value = e.target.value;
    console.log(key, value);

    const copyFormData = { ...formData };
    copyFormData[key].value = value;
    setFormData(copyFormData)
    isValidForm()
  };

  function passwordMatch() {
    const copyFormData = { ...formData };
    const pass = copyFormData['password'].value;
    const cPass = copyFormData['confirmPassword'].value;
    if (pass !== cPass) {
      setIsPassMatch(false);
    } else {
      setIsPassMatch(true);
    };
  };

  function isValidForm() {
    const copyFormData = { ...formData };
    Object.keys(copyFormData)
      .forEach(key => {
        const obj = copyFormData[key];
        obj.isError = !obj.value ? true : false;
        passwordMatch();
      });
    setFormData(copyFormData);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    isValidForm();
    const isValid = Object.keys(formData).every(
      (key) => !formData[key].isError
    );
    if (isValid && isPassMatch) {
      setIsModalOpen(true); // Open the modal on successful submission
      setFormData(defaultValues);
    };
  };

  return (
    <div className='w-full min-h-screen bg-gray-900 p-4 md:p-8 flex justify-center'>
      <div className='w-full max-w-[450px] mx-auto p-2 md:p-4 bg-gray-700 rounded-md flex justify-start md:justify-center items-center'>
        <form onSubmit={handleFormSubmit} className='w-full flex flex-col gap-4'>
          {
            Object.keys(formData)
              .map((key) => {
                const { id, label, type, placeholder,
                  value, isError, errorMsg
                } = formData[key];
                return <div className='flex flex-col gap-2'>
                  <label className='text-white font-bold'>{label}</label>
                  <input
                    onChange={handleInput}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    className={
                      `px-2 py-1 rounded-sm outline-none`
                    }
                  />
                  {
                    isError &&
                    <span className='text-red-600 font-semibold'>{errorMsg}</span>
                  }
                  {
                    key === 'confirmPassword'
                    && !isPassMatch &&
                    <span className='text-red-600 font-semibold'>
                      Password does not match
                    </span>
                  }
                </div>
              })
          }
          <div className='flex justify-end'>
            <button className='px-2 py-1 rounded-sm bg-blue-600 text-white'>Submit</button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px]'>
            <h2 className='text-2xl font-bold text-center text-green-600'>
              🎉 Congratulations!
            </h2>
            <p className='text-center text-gray-700 mt-4'>
              Your form has been successfully submitted.
            </p>
            <div className='flex justify-center mt-6'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default App;