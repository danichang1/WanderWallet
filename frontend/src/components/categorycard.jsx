import { useState } from "react";
import Table from "./table";
import axios from "axios";


const CategoryCard = ({index, tripNum, catName, currency, purchases}) => {
    const [purName, setPurName] = useState("")
    const [purDesc, setPurDesc] = useState("")
    const [purPrice, setPurPrice] = useState("")
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    //opens delete category confirmation modal
    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };
    
    //closes delete category confirmation modal
    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
    };

    //opens new purchase modal
    const handleAddModalOpen = () => {
        setIsAddModalOpen(true);
    };
    
    //closes new purchase modal, clears data
    const handleAddModalClose = () => {
        setPurName("");
        setPurDesc("");
        setPurPrice("");
        setIsAddModalOpen(false);
    };

    //stores purchase name when user is entering in modal
    const handlePurName = (e) => {
        setPurName(e.target.value)
    };

    //stores purchase description when user is entering in modal
    const handlePurDesc = (e) => {
        setPurDesc(e.target.value)
    };

    //stores purchase price when user is entering in modal
    const handlePurPrice = (e) => {
        setPurPrice(e.target.value)
    };

    //adds new purchase to database
    const handlePurModalConfirm = () => {
        const newPurchase = {
            purName: purName,
            purDesc: purDesc,
            price: purPrice
        }
        axios.post(`/addPurchase/${tripNum}/${index}`, newPurchase).catch((err) => console.log(err));
        setPurName("");
        setPurDesc("");
        setPurPrice("");
        window.location.reload()
    }

    //deletes category from database
    const handleDeleteCat = (tripNum, index) => {
        axios.delete("/deleteCategory", {
            params: {
                tripNum: tripNum,
                catNum: index
            }
        })
        window.location.reload()
    };

    return (
        <>
            {/* header, category delete button */}
            <div className="pb-2 pt-5 flex">
                <button className="btn btn-square btn-sm mr-4" onClick={handleDeleteModalOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h2 className="text-xl font-semibold">{catName}</h2>
            </div>


            <div className="card text-center bg-base-300">
               
                <div className="card-body">
                    
                    {/* purchase table */}
                    {purchases.length > 0 && (
                        <Table 
                            currency = {currency} 
                            purchases = {purchases} 
                            tripNum = {tripNum} 
                            catNum = {index}
                        />
                    )}

                    {/* message telling user to make first purchase */}
                    {purchases.length == 0 && (
                        <h1 className="text-m">Click "Add Purchase" to create your first purchase!</h1>
                    )}
                    
                </div>

                {/* add purchase button, opens modal */}
                <div className="pb-5">
                    <button className="btn btn-secondary mx-10" onClick={handleAddModalOpen}>Add Purchase</button>
                </div>
            </div>
            
            {/* new purchase modal */}
            {isAddModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Purchase Info</h3>

                        {/* enter name field */}
                        <label className="form-control w-full max-w-xs pb-5">
                            <div className="label mt-4">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" 
                                placeholder="Type here" 
                                className="input input-bordered w-full max-w-xs"
                                required={true}
                                value={purName} 
                                onChange={handlePurName}
                            />
                        </label>

                        {/* enter description field */}
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea 
                                className="textarea textarea-bordered h-24" 
                                placeholder="Type here"
                                required={true}
                                value={purDesc}
                                onChange={handlePurDesc}
                            >
                            </textarea>
                        </label>

                        {/* enter price field */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Price ({currency})</span>
                            </div>
                            <input type="number" 
                                placeholder="Type here" 
                                className="input input-bordered w-full max-w-xs" 
                                required={true}
                                value={purPrice}
                                onChange={handlePurPrice}
                            />
                        </label>

                        {/* buttons to close modal */}
                        <div className="modal-action">
                            <button className="btn mx-8 btn" onClick={handleAddModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick={() => 
                                {handlePurModalConfirm(); handleAddModalClose();}}>Confirm</button>
                        </div>
                    </div>
                </div>
                
            )}

            {/* confirm category delete modal */}
            {isDeleteModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">
                        <h1 className="font-bold text-lg py-7">Are you sure you want to delete this category?</h1>
                        <p>This action cannot be undone!</p>

                        {/* buttons to close modal */}
                        <div className="modal-action">
                            <button className="btn mx-8 btn" onClick={handleDeleteModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick={() => 
                                {handleDeleteCat(tripNum, index); handleDeleteModalClose();}}>Delete</button>
                        
                        </div>
                    </div>
                </div>
                    
            )}
            
        </>
    )
}

export default CategoryCard;