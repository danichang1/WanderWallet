import TableElement from "./tableelement";

const Table = ({currency}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price ({currency})</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <TableElement name = "Sushi" desc = "Kura Sushi Dinner 11/9" price = "3000"/>
                {/* row 2 */}
                <tr>
                    <button className="btn btn-square btn-xs mt-2.5 ml-2" onClick={()=>document.getElementById('deletePurchaseModal').showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <td>Beef Bowl</td>
                    <td>Sukiya Lunch 11/10</td>
                    <td>900</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <button className="btn btn-square btn-xs mt-2.5 ml-2" onClick={()=>document.getElementById('deletePurchaseModal').showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <td>Kebab</td>
                    <td>Harajuku street kebab dinner 11/10</td>
                    <td>1000</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;