import CategoryCard from "../components/categorycard";

const TripInfo = () => {
    return(
        <>
            <div className="flex">
                <article class="prose">
                    <h2>Tokyo Summer 2023</h2>
                </article>
                <button className="btn btn-secondary mx-10" onClick={()=>document.getElementById('addCategory').showModal()}>Add Category</button>

                <dialog id="addCategory" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Category Info</h3>

                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn mx-8 btn">Close</button>
                                
                                <button className="btn btn-secondary">Confirm</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <dialog id="deletePurchaseModal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg py-7">Are you sure you want to delete this purchase?</h3>
                        <p>This action cannot be undone!</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn mx-8 btn">Close</button>
                                    
                                <button className="btn btn-secondary">Delete</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <dialog id="deleteCategoryModal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg py-7">Are you sure you want to delete this category?</h3>
                        <p>This action cannot be undone!</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn mx-8 btn">Close</button>
                                    
                                <button className="btn btn-secondary">Delete</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div> 

            <ul className="grid">
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
            </ul>

            <button className="btn btn-circle btn-secondary text-2xl fixed bottom-10 right-10" onClick={()=>document.getElementById('tripInfoHelp').classList.remove("hidden")}>
                <p>?</p>
            </button>

            <div id="tripInfoHelp" className="card w-96 bg-base-100 shadow-xl fixed bottom-10 right-10 hidden">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-sm" onClick={()=>document.getElementById('tripInfoHelp').classList.add("hidden")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p>This page shows all of your purchases for your selected trip! Organize your purchases
                        by category by clicking "Add Category" at the top of the page and "Add Purchase" within
                        your desired category. Use the "X" buttons to delete categories and purchases.</p>
                </div>
            </div>
            
            
        </>
    )
}

export default TripInfo;