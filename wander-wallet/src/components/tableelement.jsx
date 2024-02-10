const TableElement = ({name, desc, price}) => {
    return (
        <tr>
            <button className="btn btn-square btn-xs mt-2.5 ml-2" onClick={()=>document.getElementById('deletePurchaseModal').showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <td>{name}</td>
            <td>{desc}</td>
            <td>{price}</td>
        </tr>
    )
}

export default TableElement;