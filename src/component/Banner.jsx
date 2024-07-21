import React from 'react'

const Banner = () => {
    return (
        <div className='banner mt-5 mb-3 text-center'>
            <div className="container bg-body-secondary pb-5 rounded-3">
                <div className='p-5'>
                    <h1 className='fw-bold display-5 mt-5'>A warm welcome!</h1>
                    <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button type='button' className='btn btn-primary fs-5 px-3 py-2'>Call to action</button>
                </div>
            </div>
        </div>
    )
}

export default Banner