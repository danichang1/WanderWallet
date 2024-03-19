import { useEffect, useState } from "react";
import axios from "axios";

const TableElement = ({i, name, desc, price, handleDelete, currency}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [conversionRate, setConversionRate] = useState(-1);

    //gets conversion rate for trip currency
    useEffect(() => {
        const getConversionRate = async() => {
            if (currency != "USD"){
                const requestData = {
                    currencyCode: currency
                };
                //microservice call
                const response = await axios.post('/convert', requestData);
                setConversionRate(response.data.conversionRate)
            }
        }
        getConversionRate().catch(console.error);
    }, [])

    //opens purchase delete confirmation modal
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    //closes purchase delete confirmation modal
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (  
        <>
            {/* row of table showing purchase information */}
            <tr>
                <button className="btn btn-square btn-xs mt-2.5 ml-2" onClick={handleModalOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <td>{name}</td>
                <td>{desc}</td>
                <td>{price}</td>
                {/* shows converted price if currency isn't USD */}
                {currency != "USD" &&
                    <td>{(price * conversionRate).toFixed(2)}</td>
                }
            </tr>
            
            {/* delete purchase confirmation modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[1]">
                    <div className="modal-backdrop absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="modal-box">
                        <h1 className="font-bold text-lg py-7">Are you sure you want to delete this purchase?</h1>
                        <p>This action cannot be undone!</p>
                        <div className="modal-action">
                            {/* buttons to close modal */}
                            <button className="btn mx-8 btn" onClick={handleModalClose}>Close</button>
                            <button className="btn btn-secondary" onClick={() => 
                                {handleDelete(i); handleModalClose();}}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </>  
    )
}

export default TableElement;