import React from 'react'

const Item = () => {
    return (
        <div className='item mb-5 mt-4'>
            <div className="container px-0">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded-2">
                            <i class="fa fa-tv position-absolute top-0 start-50 translate-middle fs-3 p-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>Fresh new layout</h2>
                                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded-2">
                            <i class="fa fa-cloud-download-alt position-absolute top-0 start-50 translate-middle fs-3 p-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>Free to download</h2>
                                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded rounded-2">
                            <i class="fa fa-credit-card position-absolute top-0 start-50 translate-middle fs-3 p-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>Jumbotron hero header</h2>
                                <p>The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded rounded-2">
                            <i class="fab fa-bootstrap position-absolute top-0 start-50 translate-middle fs-3 p-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>Feature boxes</h2>
                                <p>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded rounded-2">
                            <i class="fa fa-code position-absolute top-0 start-50 translate-middle fs-3 p-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>Simple clean code</h2>
                                <p>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div className="item-text text-center bg-body-secondary position-relative rounded rounded-2">
                            <i class="fa fa-check-square position-absolute top-0 start-50 translate-middle fs-3 px-4 py-3 bg-primary text-white rounded-2"></i>
                            <div className="text-tag p-5">
                                <h2 className='pt-3 fs-3 fw-bold'>A name you trust</h2>
                                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item