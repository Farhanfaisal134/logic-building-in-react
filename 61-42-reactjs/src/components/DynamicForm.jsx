import React, { useState } from "react";

const apiResponse = [
  { id: 1, type: "text", label: "Name", name: "name", required: true },
  { id: 2, type: "email", label: "Email", name: "email", required: true },
  { id: 3, type: "number", label: "Age", name: "age", required: true },
  { id: 4, type: "checkbox", label: "Subscribe to Newsletter", name: "subscribe" },
  { id: 5, type: "text", label: "Additional Info", name: "info", condition: { field: "subscribe", value: true } },
];

function DynamicForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    apiResponse.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

  const shouldRenderField = (field) => {
    if (field.condition) {
      return formData[field.condition.field] === field.condition.value;
    };

    return true;
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md space-y-4">
        {
          apiResponse.map((field) => {
            if (!shouldRenderField(field)) return null;

            return (
              <div key={field.id} className="flex flex-col gap-2">
                <label className="font-semibold">{field.label}</label>
                {field.type === "checkbox" ? (
                  <input
                    type={field.type}
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                  />
                )}
                {errors[field.name] && (
                  <span className="text-red-500 text-sm">{errors[field.name]}</span>
                )}
              </div>
            );
          })
        }
        <button type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
