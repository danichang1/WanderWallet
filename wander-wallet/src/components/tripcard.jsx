import { Link } from "react-router-dom";

const TripCard = ({i, name, currency}) => {
    return (
        <>
            <div className="card cursor-pointer text-center w-96 h-100 bg-base-300 pt-8">
                <Link to = {i}>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-square btn-sm" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button> */}

                        </div>
                        <div>
                            <article class="prose">
                                <h3>{name}</h3>
                            </article>
                            <div className="badge badge-primary badge-outline my-3">{currency}</div>
                        </div>
                        
                    </div>
                </Link>
                <button className="btn btn-square btn-sm absolute right-7 top-7" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            
            
        </>
    )
}

export default TripCard;