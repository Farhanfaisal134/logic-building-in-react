import React from 'react';

const App = () => {
  return (
    <div>
      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-blue-600 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sticky Header</h1>
          <nav className="flex gap-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        <section id="home" className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-3xl">Home Section</h2>
        </section>
        <section id="about" className="h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-3xl">About Section</h2>
        </section>
        <section id="services" className="h-screen bg-gray-400 flex items-center justify-center">
          <h2 className="text-3xl">Services Section</h2>
        </section>
        <section id="contact" className="h-screen bg-gray-500 flex items-center justify-center">
          <h2 className="text-3xl">Contact Section</h2>
        </section>
      </main>
    </div>
  );
};

export default App;
