import { useState } from "react";

const Non_Primitive = () => {

  const [user, setUser] = useState({
    name: "Srikanth",
    age: 21,
    role: "MERN Developer"
  });

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: "Form Validation" },
    { id: 2, title: "React Portfolio" }
  ]);

  const changeRole = () => {
    setUser(prev => ({
      ...prev,
      role: "React Developer"
    }));
  };

  const addSkill = () => {
    setSkills(prev => [...prev, "React",]);
  };

  const addProject = () => {
    setProjects(prev => [
      ...prev,
      { id: prev.length + 1, title: "MERN App" }
    ]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Non-Primitive Types
        </h1>

        {/* OBJECT */}
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Object</h2>
          <p className="text-gray-700">Name: <span className="font-bold">{user.name}</span></p>
          <p className="text-gray-700">Age: <span className="font-bold">{user.age}</span></p>
          <p className="text-gray-700">Role: <span className="font-bold">{user.role}</span></p>
          <button
            onClick={changeRole}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Change Role
          </button>
        </div>

        {/* ARRAY */}
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Array</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button
            onClick={addSkill}
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Skill
          </button>
        </div>

        {/* ARRAY OF OBJECTS */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Array of Objects</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {projects.map(project => (
              <li key={project.id}>{project.title}</li>
            ))}
          </ul>
          <button
            onClick={addProject}
            className="mt-3 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Add Project
          </button>
        </div>

      </div>
    </>
  );
};

export default Non_Primitive;
