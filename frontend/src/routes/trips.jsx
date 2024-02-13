import { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../components/tripcard";


const Trips = () => {
    const [allTrips, setAllTrips] = useState([]);
    const [tripName, setTripName] = useState("");
    const [tripCurrency, setTripCurrency] = useState("Pick one");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);


    useEffect(() => {
        axios.get("/getTrips")
        .then((res) => {
            setAllTrips(res.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setTripName("");
        setTripCurrency("Pick one");
        setIsModalOpen(false);
    };

    const handleHelpOpen = () => {
        setIsHelpOpen(true);
    };

    const handleHelpClose = () => {
        setIsHelpOpen(false);
    }


    const handleTripName = (e) => {
        setTripName(e.target.value);
    };

    const handleTripCurrency = (e) => {
        setTripCurrency(e.target.value);
    }

    const handleTripModalConfirm = () => {
        const newTrip = {
            tripName: tripName,
            currency: tripCurrency.substring( tripCurrency.indexOf( '(' ) + 1, tripCurrency.indexOf( ')' ) )
        }
        axios.post("/addTrip", newTrip).catch((err) => console.log(err));
        window.location.reload()
    };

    return (
        <>
            <div className="pb-5 flex">
                <h1 className="text-3xl font-semibold">My Trips</h1>
                <button className="btn btn-secondary mx-10" onClick={handleModalOpen}>Add Trip</button>
            </div>
            
            {allTrips.length > 0 && (
                <ul className="grid grid-cols-3 gap-5">
                    {allTrips.map((trip, i) => (
                        <TripCard 
                            key = {i.toString()}
                            i = {i.toString()}
                            name = {trip.tripName}
                            currency = {trip.currency}
                            categories = {trip.categories}
                        
                        />
                    ))}
                </ul>
            )}
            {allTrips.length == 0 && (
                <div className="hero mt-20">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-xl">Click "Add Trip" to create your first trip!</h1>
                        </div>
                    </div>
                </div>
            )}
                

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
                        <p>This page shows all of your stored trips! Click "Add Trip" to add a new trip, 
                            click on any trip card to see that trip's details, or click the "X" button to delete a trip.</p>
                    </div>
                </div>
            )}
                

            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                        <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Trip Info</h3>

                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Name</span>
                            </div>
                            <input 
                                required = {true}
                                value = {tripName}
                                type="text" 
                                placeholder="Type here" 
                                className="input input-bordered w-full max-w-xs" 
                                onChange={handleTripName}
                            />
                        </label>


                        <label className="form-control w-full max-w-xs">
                            <div className="label mt-4">
                                <span className="label-text">Currency</span>
                            </div>
                            <select 
                                className="select select-bordered"
                                onChange={handleTripCurrency}
                                value = {tripCurrency}
                            >
                                <option disabled>Pick one</option>
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
                            <button className="btn mx-8 btn" onClick = {handleModalClose}>Close</button>
                            
                            <button className="btn btn-secondary" onClick = {() => {handleTripModalConfirm(); handleModalClose();}}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Trips;