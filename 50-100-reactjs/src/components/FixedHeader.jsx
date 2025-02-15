import React from 'react'

const FixedHeader = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto p-2 md:p-4 flex justify-between items-center">
          <h1 className="md:text-xl font-bold">Fixed Header</h1>
          <nav className="flex gap-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-10 md:mt-20 max-w-6xl mx-auto p-4">
        <section id="home" className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-3xl">Home Section</h2>
        </section>
        <section id="about" className="h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-3xl">About Section</h2>
        </section>
        <section id="services" className="h-screen bg-gray-400 flex items-center justify-center">
          <h2 className="text-3xl">Services Section</h2>
        </section>
      </main>
    </div>
  )
};

export default FixedHeader;