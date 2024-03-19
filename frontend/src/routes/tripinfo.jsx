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

    //populates page from database
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

    //opens category modal
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    //closes category modal, clears data
    const handleModalClose = () => {
        setCatName("");
        setIsModalOpen(false);
    };

    //opens help panel
    const handleHelpOpen = () => {
        setIsHelpOpen(true);
    };

    //closes help panel
    const handleHelpClose = () => {
        setIsHelpOpen(false);
    }

    //stores category name when user is entering into modal
    const handleCatName = (e) => {
        setCatName(e.target.value);
    };

    //adds new category to database
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
            {/* header */}
            <div className="flex">
                <h1 className="text-3xl font-semibold">{tripInfo.tripName}</h1>
                <button className="btn btn-secondary mx-10" onClick={handleModalOpen}>Add Category</button>
            </div> 

            {/* category cards */}
            {tripCategories.length > 0 && (
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
            )}

            {/* message telling user to make first category */}
            {tripCategories.length == 0 && (
                <div className="hero mt-20">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-xl">Click "Add Category" to create your first category!</h1>
                        </div>
                    </div>
                </div>
            )}
                
            {/* help button */}
            <button className="btn btn-circle btn-secondary text-2xl fixed bottom-10 right-10" 
            onClick={handleHelpOpen}>
                <p>?</p>
            </button>

            {/* help panel */}
            {isHelpOpen && (
                <div className="card w-96 bg-base-100 shadow-xl fixed bottom-10 right-10">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            {/* button to close panel */}
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
            
            {/* new category modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">

                        <h3 className="font-bold text-lg">Enter Category Info</h3>
                        <label className="form-control w-full max-w-xs">
                            {/* enter name field */}
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

                        {/* buttons to close modal */}
                        <div className="modal-action">
                            <button className="btn mx-8 btn" onClick={handleModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick={() => 
                                {handleCatModalConfirm(); handleModalClose();}}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TripInfo;