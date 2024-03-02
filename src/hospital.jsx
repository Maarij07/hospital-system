import React from 'react';
import { doctorDetail, patientDetail } from './HospitalData';
// import { doctorDetail, patientDetail } from "./hospital";

function Hospital() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gray-900 text-white'>
            <h1 className='text-4xl font-bold mb-8'>HOSPITAL MANAGEMENT SYSTEM</h1>
            <form className='flex flex-col gap-4' onSubmit={handleFormSubmit}>
                <div className="">
                    {
                        doctorDetail.map((doctor, index) => (
                            <div key={index} className="">
                                <label htmlFor={`doctorField-${index}`} className='text-xl font-bold mb-2'>{doctor.title}</label>
                                <input id={`doctorField-${index}`} type='text' inputMode='numeric' pattern='[0-9]*' className='px-4 py-2 rounded-md bg-gray-800 text-white' placeholder={doctor.placeholder} />
                            </div>
                        ))
                    }
                </div>
                <div className="">
                    {
                        patientDetail.map((patient, index) => (
                            <div key={index} className="">
                                <label htmlFor={`patientField-${index}`} className='text-xl font-bold mb-2'>{patient.title}</label>
                                <input id={`patientField-${index}`} type='text' inputMode='numeric' pattern='[0-9]*' className='px-4 py-2 rounded-md bg-gray-800 text-white' placeholder={patient.placeholder} />
                            </div>
                        ))
                    }
                </div>
                <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>Submit</button>
            </form>
        </div>
    );
}


export default Hospital