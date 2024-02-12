import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const TripCard = ({i, name, currency}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleDeleteTrip = (index) => {
        axios.delete("/deleteTrip", {
            params: {
                tripNum: index
            }
        })
        window.location.reload()
    }

    return (
        <>
            <div className="card cursor-pointer text-center w-96 h-100 bg-base-300 pt-8">
                <Link to = {i}>
                    <div className="card-body">
                        <div>
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <div className="badge badge-primary badge-outline my-3">{currency}</div>
                        </div>
                    </div>
                </Link>
                <button className="btn btn-square btn-sm absolute right-7 top-7" onClick={handleModalOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div> 


            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">
                        <h1 className="font-bold text-lg py-7">Are you sure you want to delete this trip?</h1>
                        <p>This action cannot be undone!</p>
                        <div className="modal-action">
                            <button className="btn mx-8 btn" onClick={handleModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick={() => {handleDeleteTrip(i); handleModalClose();}}>Delete</button>
                        
                        </div>
                    </div>
                </div>
                    
            )}
        </>
    )
}

export default TripCard;