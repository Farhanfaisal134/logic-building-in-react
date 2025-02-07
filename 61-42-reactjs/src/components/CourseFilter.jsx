import React, { useState } from "react";

const courses = [
  { id: 1, name: "React Basics", category: "Frontend", price: 50 },
  { id: 2, name: "Node.js Mastery", category: "Backend", price: 80 },
  { id: 3, name: "Fullstack Pro", category: "Fullstack", price: 120 },
  { id: 4, name: "Advanced CSS", category: "Frontend", price: 40 },
  { id: 5, name: "MongoDB Deep Dive", category: "Backend", price: 70 },
  { id: 6, name: "Js Basics", category: "Frontend", price: 60 }
];

const CourseFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    return (
      (!selectedCategory || course.category === selectedCategory) &&
      (!selectedPrice || course.price <= Number(selectedPrice)) &&
      (!searchQuery || course.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="w-full bg-gray-800 min-h-screen">
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Course Filter</h1>

        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 mb-3 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="w-full p-2 mb-3 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>

        <select
          className="w-full p-2 mb-3 border rounded"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Any Price</option>
          <option value="50">Up to $50</option>
          <option value="80">Up to $80</option>
          <option value="120">Up to $120</option>
        </select>

        <div className="mt-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="p-4 border rounded mb-3 bg-gray-100">
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p>Category: {course.category}</p>
                <p>Price: ${course.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500">No courses found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
