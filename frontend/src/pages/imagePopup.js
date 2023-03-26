import React from 'react'

const imagePopup = () => {
  return (
    <div>
        <img src={http} alt="..." data-bs-toggle="modal" data-bs-target="#image" />

        <div className="modal fade" id="image" tabIndex="-1" area-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <img src={http} alt="..." className="d-block w-100" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default imagePopup