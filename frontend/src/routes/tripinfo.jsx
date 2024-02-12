import { useState, useEffect } from "react";
import CategoryCard from "../components/categorycard";
import { useParams } from "react-router";
import axios from "axios";

const TripInfo = () => {
    const [catName, setCatName] = useState("");
    const [tripInfo, setTripInfo] = useState({categories: []});
    const [tripCategories, setTripCategories] = useState([]);
    const {tripNum} = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    useEffect(() => {
        axios.get(`/getTripInfo/${tripNum}`)
        .then((res) => {
            setTripInfo(res.data);
            setTripCategories(res.data.categories);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setCatName("");
        setIsModalOpen(false);
    };

    const handleHelpOpen = () => {
        setIsHelpOpen(true);
    };

    const handleHelpClose = () => {
        setIsHelpOpen(false);
    }

    const handleCatName = (e) => {
        setCatName(e.target.value);
    };

    const handleCatModalConfirm = () => {
        const newCat = {
            catName: catName,
            purchases: []
        }
        axios.post(`/addCategory/${tripNum}`, newCat).catch((err) => console.log(err));
        setCatName("");
        window.location.reload()
    };

    return(
        <>
            <div className="flex">
                <h1 className="text-3xl font-semibold">{tripInfo.tripName}</h1>
                <button className="btn btn-secondary mx-10" onClick={handleModalOpen}>Add Category</button>
            </div> 

            <ul className="grid">
                {tripCategories.map((category, i) => (
                    <CategoryCard
                        key = {i}
                        index = {i.toString()}
                        tripNum = {tripNum}
                        catName = {category.catName}
                        currency = {tripInfo.currency}
                        purchases = {category.purchases}
                    />
                ))}     
            </ul>

            <button className="btn btn-circle btn-secondary text-2xl fixed bottom-10 right-10" onClick={handleHelpOpen}>
                <p>?</p>
            </button>

            {isHelpOpen && (
                <div className="card w-96 bg-base-100 shadow-xl fixed bottom-10 right-10">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm" onClick={handleHelpClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <p>This page shows all of your purchases for your selected trip! Organize your purchases
                            by category by clicking "Add Category" at the top of the page and "Add Purchase" within
                            your desired category. Use the "X" buttons to delete categories and purchases.</p>
                    </div>
                </div>
            )}
            
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Category Info</h3>

                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" 
                                placeholder="Type here" 
                                className="input input-bordered w-full max-w-xs" 
                                required= {true}
                                value = {catName}
                                onChange={handleCatName}

                            />
                        </label>

                        <div className="modal-action">
                            <button className="btn mx-8 btn" onClick={handleModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick={() => {handleCatModalConfirm(); handleModalClose();}}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TripInfo;