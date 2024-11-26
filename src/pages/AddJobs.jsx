import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddJobs = ({addJobSubmit}) => {
  const [type, setType] = useState('Full-Time');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    addJobSubmit(newJob);
    return navigate('/jobs')
    console.log('desc', newJob)
  }
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-2xl font-semibold mb-6">Add Job</h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={type} onChange={(e) => setType(e.target.value)}>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Listing Name</label>
            <input
              type="text"
              placeholder="e.g., Beautiful Apartment In Miami"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc."
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={description} onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Salary</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <option value="">Select a salary range</option>
              <option value="Under $50K">Under $50K</option>
              <option value="$50K-$70K">$50K - $70K</option>
              <option value="$70K-$90K">$70K - $90K</option>
              <option value="$90K-$110K">$90K - $110K</option>
              <option value="$110K+">$110K+</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Company Location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={location} onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Company Info</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
              <textarea
                rows="4"
                placeholder="What does your company do?"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                placeholder="Email address for applicants"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <input
                type="text"
                placeholder="Optional phone for applicants"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>

  )
}

export default AddJobs