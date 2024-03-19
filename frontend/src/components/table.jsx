import TableElement from "./tableelement";
import axios from "axios";

const Table = ({currency, purchases, tripNum, catNum}) => {

    // deletes purchase from database
    const handlePurDelete = (index) => {
        axios.delete("/deletePurchase", {
            params: {
                tripNum: tripNum,
                catNum: catNum,
                purNum: index
            }
        })
        window.location.reload()
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* labels for columns */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price ({currency})</th>
                        {/* adds extra column for converted prices if currency isn't USD */}
                        {currency != "USD" &&
                            <th>Price (USD)</th>
                        }
                    </tr>
                </thead>
                {/* list of purchases */}
                <tbody>
                        {purchases.map((purchase, i) => (
                            <TableElement 
                                key = {i}
                                i = {i.toString()}
                                name = {purchase.purName}
                                desc = {purchase.purDesc} 
                                price = {purchase.price}
                                handleDelete={handlePurDelete}
                                currency = {currency}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;