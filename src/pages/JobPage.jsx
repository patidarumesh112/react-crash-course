import React, { useState, useEffect } from 'react'
import { useParams, useLoaderData,useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify' 
const JobPage = ({ deleteJob }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = useLoaderData();
    const onDeleteClick = (jobId) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?")
        if (!confirm) return;
        deleteJob(jobId)
        toast.success("Job Deteled successfully")
        navigate('/jobs')
    }

    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         }
    //         catch (error) {
    //             console.log("ERROR")
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchJob();
    // }, [])



    return (
        <>
            <div className="container mx-auto py-6 px-4">
                <Link to="/jobs" className="text-indigo-600 hover:text-indigo-700 flex items-center mb-6">
                    {/* <i className="fas fa-arrow-left mr-2"></i> */}
                    <FaArrowLeft className='mr-2' />
                    Back to Job Listings
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="mb-4">
                                <span className="text-gray-500 text-sm block">{job.type}</span>
                                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                                <p className="text-orange-600 mt-2"><FaMapMarker className=" text-orange-700 mr-2"></FaMapMarker>{job.location}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
                                <p className="text-gray-600">
                                    {job.description}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Salary</h2>
                                <p className="text-indigo-600 font-medium">{job.salary} / Year</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Company Info</h2>
                            <p className="text-gray-600 mb-4">
                                <strong className="text-gray-800">{job.company.name} </strong>{job.company.description}
                            </p>
                            <p className="text-gray-800 mb-1"><strong>Contact Email:</strong></p>
                            <p className="text-gray-600 mb-4">{job.company.contactEmail}</p>
                            <p className="text-gray-800 mb-1"><strong>Contact Phone:</strong></p>
                            <p className="text-gray-600">{job.company.contactPhone}</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Manage Job</h2>
                            <div className="flex gap-4">
                                <Link to={`/jobs/edit/${job.id}`}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm w-full text-center font-medium">
                                    Edit Job
                                </Link>
                                <Link onClick={() => onDeleteClick(job.id)} 
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm w-full text-center font-medium">
                                    Delete Job
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}
const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader } 