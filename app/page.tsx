import React from "react";
import { FaReact, FaPython, FaDatabase, FaChartLine } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white p-8 text-center">
        <h1 className="text-4xl font-semibold">Puja Swara</h1>
        <p className="mt-2 text-xl">Data-Driven Decision Maker</p>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">About Me</h2>
          <div className="mt-8 flex justify-center items-center space-x-6">
            {/* Frame for Photo */}
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img
                src="/puja.jpeg"
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="mt-4 text-lg text-gray-700">
                I am a passionate Data Analyst with expertise in collecting, analyzing, and interpreting large sets of data. 
                I leverage statistical techniques and analytical tools to provide insights that help drive business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-indigo-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <FaReact className="text-indigo-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg">React</h3>
              <p>Building data-driven web applications</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <FaPython className="text-indigo-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg">Python</h3>
              <p>Data manipulation and analysis with Pandas</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <FaDatabase className="text-indigo-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg">SQL</h3>
              <p>Extracting and querying data from relational databases</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <FaChartLine className="text-indigo-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg">Data Visualization</h3>
              <p>Creating interactive visualizations with tools like Power BI and Tableau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-indigo-600 text-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Data Analysis</h3>
              <p>Performing in-depth data analysis to provide actionable insights.</p>
            </div>
            <div className="bg-indigo-600 text-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Data Visualization</h3>
              <p>Visualizing data to communicate findings effectively.</p>
            </div>
            <div className="bg-indigo-600 text-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Reporting</h3>
              <p>Generating reports and dashboards for key business metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section id="portfolios" className="py-16 px-6 bg-indigo-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Portfolios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Sales Data Analysis</h3>
              <p>Analyzing sales data trends to predict future sales growth.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Customer Segmentation</h3>
              <p>Using clustering techniques to segment customers based on behavior.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold">Financial Forecasting</h3>
              <p>Building financial models to forecast revenue and expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Contact Me</h2>
          <p className="mt-4 text-lg text-gray-700">Feel free to reach out to discuss opportunities or collaborations!</p>
          <form className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white p-4 text-center">
        <p>&copy; 2025 Data Analyst CV. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
