import React, { useEffect, useState } from 'react'
import JobListing from './JobListing';
import Spinner from './Spinner';
const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedJobs = async () => {
            try {
                const apiUrl = isHome?'/api/jobs?_limit=3':'/api/jobs'
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('ERROR FETCHIGN DATA')
            } finally {
                setLoading(false);
            }

        }
        fetchedJobs();
    }, [])
    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : 'All Jobs'}
                </h2>
                    {loading ? (
                        <Spinner loading={loading}/>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job}></JobListing>
                            ))}
                         </div>
                    )}




                    {/* <div className='bg-white rounded-xl shadow-md relative'>
                        <div className='p-4'>
                            <div className='mb-6'>
                                <div className='text-gray-600 my-2'>
                                    Full Time
                                </div>
                                <h3 className='text-xl font-bold'>    
                                    Senior Backend Developer
                                </h3>
                            </div>
                            <div className='mb-5'>
                                We are seeking a talented Front-End developer to join our team in Boston, MA. The ideal Candidate will have strong skills in HTML, CSS and javascript... 
                            </div>
                            <h3 className='text-indigo-500 mb-2'>
                                $70 - $80K / Year
                            </h3>
                            <div className='border border-gray-100 mb-5'>

                            </div>
                            <div className='flex flex-col lg:flex-row justify-between mb-4'>
                                <div className='text-orange-700 mb-3'>
                                    <i className='fa-solid fa-location-dot txt-lg'></i>
                                    Boston, MA
                                </div>
                            <a href='job.html' className='h-[36px] bg-indigo-500 hover:bg-indigo-600  text-white px-py-2 rounded-lg text-center text-sm'>
                                Read More
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-md relative'>
                        <div className='p-4'>
                            <div className='mb-6'>
                                <div className='text-gray-600 my-2'>
                                    Remote
                                </div>
                                <h3 className='text-xl font-bold'>    
                                    Senior Software Engineer
                                </h3>
                            </div>
                            <div className='mb-5'>
                                We are seeking a talented Front-End developer to join our team in Boston, MA. The ideal Candidate will have strong skills in HTML, CSS and javascript... 
                            </div>
                            <h3 className='text-indigo-500 mb-2'>
                                $60 - $80K / Year
                            </h3>
                            <div className='border border-gray-100 mb-5'>

                            </div>
                            <div className='flex flex-col lg:flex-row justify-between mb-4'>
                                <div className='text-orange-700 mb-3'>
                                    <i className='fa-solid fa-location-dot txt-lg'></i>
                                    Boston, MA
                                </div>
                            <a href='job.html' className='h-[36px] bg-indigo-500 hover:bg-indigo-600  text-white px-py-2 rounded-lg text-center text-sm'>
                                Read More
                            </a>
                            </div>
                        </div>
                    </div> */}


               
            </div>

        </section>
    )
}

export default JobListings