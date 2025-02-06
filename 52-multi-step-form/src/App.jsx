import React, { useState } from 'react'

const data = [
  {
    id: "name",
    label: "Name",
    inputType: "text",
    buttonName: "Next",
    placeholder: "Your Name..."
  },
  {
    id: "email",
    label: "Email",
    inputType: "email",
    buttonName: "Next",
    placeholder: "Your Email..."
  },
  {
    id: "dob",
    label: "DOB",
    inputType: "date",
    buttonName: "Next",
    placeholder: "Your Date of Birth..."
  },
  {
    id: "password",
    label: "Password",
    inputType: "password",
    buttonName: "Submit",
    placeholder: "Your Password..."
  }
];

const App = () => {
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    password: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    };
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (index > 0) {
      setIndex((idx) => idx - 1);
    };
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-900 p-2'>
      {!isFormSubmitted ?
        <UserForm
          index={index}
          forms={forms}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        : <FormDetails formData={formData} />
      }
    </div>
  )
};

export default App;

const UserForm = ({
  handleSubmit,
  index,
  handleBack,
  forms,
  formData,
  handleInputChange
}) => {
  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      {
        index > 0 &&
        <a className='bg-blue-600 px-3 py-1 text-white w-fit rounded-md' onClick={handleBack}>Back</a>
      }
      <label className='text-white text-2xl'>{forms[index].label}</label>
      <input
        required
        value={formData[forms[index].id]}
        id={forms[index].id}
        onChange={handleInputChange}
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}
        className='outline-none border border-gray-300 p-2'
      />
      <button className='bg-blue-600 px-3 py-1 text-white w-fit rounded-md'>
        {forms[index].buttonName}
      </button>
    </form>
  )
};

const FormDetails = ({ formData }) => {

  return (
    <div className='bg-gray-800 p-2 rounded-md flex flex-col gap-4 justify-center items-center w-full
    md:max-w-[50%] max-auto text-white'>
      <h1 className="text-white text-xl md:text-3xl font-bold">Form Submitted Successfully!</h1>
      <span className="text-lg">Name: {formData.name}</span>
      <span className="text-lg">Email: {formData.email}</span>
      <span className="text-lg">DOB: {formData.dob}</span>
      <span className="text-lg">Password: {formData.password}</span>
    </div>
  )
};
