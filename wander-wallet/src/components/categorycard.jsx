import Table from "./table";


const CategoryCard = () => {
    return (
        <>
            <div className="pb-2 pt-5 flex">
                <button className="btn btn-square btn-sm mr-4" onClick={()=>document.getElementById('deleteCategoryModal').showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <article class="prose">
                    <h3>Food</h3>
                </article>
            </div>
            <div className="card text-center bg-base-300">
               
                <div className="card-body">
                    
                    <Table currency = "JPY"></Table>
                    
                </div>
                <div className="pb-5">
                    <button className="btn btn-secondary mx-10" onClick={()=>document.getElementById('addPurchaseModal').showModal()}>Add Purchase</button>

                    <dialog id="addPurchaseModal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Enter Purchase Info</h3>

                            <label className="form-control w-full max-w-xs pb-5">
                                <div className="label mt-4">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>


                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                            </label>

                            <label className="form-control w-full max-w-xs">
                                <div className="label mt-4">
                                    <span className="label-text">Price (YEN)</span>
                                </div>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
            </div>
            </div>

            
                
            
            
        </>
    )
}

export default CategoryCard;