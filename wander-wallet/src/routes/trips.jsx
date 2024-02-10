import TripCard from "../components/tripcard";

const Trips = () => {
    return (
        <>
            <div className="pb-5 flex">
                <article class="prose">
                    <h2>My Trips</h2>
                </article>


                <button className="btn btn-secondary mx-10" onClick={()=>document.getElementById('addTripModal').showModal()}>Add Trip</button>

                <dialog id="addTripModal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Trip Info</h3>

                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>


                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Currency</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>U.S. Dollar (USD)</option>
                                <option>Euro (EUR)</option>
                                <option>Pound Sterling (GBP)</option>
                                <option>Japanese Yen (JPY)</option>
                                <option>South Korean Won (KRW)</option>
                                <option>Mexican Peso (MXN)</option>
                                <option>Indian Rupee (INR)</option>
                                <option>Canadian Dollar (CAD)</option>
                                <option>Australian Dollar (AUD)</option>
                                <option>South African Rand (ZAR)</option>
                            </select>
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


                <dialog id="deleteTripModal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg py-7">Are you sure you want to delete this trip?</h3>
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


            
            <ul className="grid grid-cols-3 gap-5">
                <TripCard i = {"1"} name = {"Tokyo Summer 2023"} currency = {"JPY"}/>
                <TripCard i = {"2"} name = {"Barcelona Winter 2021"} currency = {"EUR"}/>
                <TripCard i = {"3"} name = {"New York City Summer 2022"} currency = {"USD"}/>
            </ul>

            <button className="btn btn-circle btn-secondary text-2xl fixed bottom-10 right-10" onClick={()=>document.getElementById('tripsHelp').classList.remove("hidden")}>
                <p>?</p>
            </button>

            <div id="tripsHelp" className="card w-96 bg-base-100 shadow-xl fixed bottom-10 right-10 hidden">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-sm" onClick={()=>document.getElementById('tripsHelp').classList.add("hidden")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p>This page shows all of your stored trips! Click "Add Trip" to add a new trip, 
                        click on any trip card to see that trip's details, or click the "X" button to delete a trip.</p>
                </div>
            </div>
        </>
        
    )
}

export default Trips;