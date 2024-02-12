import { useState } from "react";
import TableElement from "./tableelement";
import axios from "axios";

const Table = ({currency, purchases, tripNum, catNum}) => {

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
                        {purchases.map((purchase, i) => (
                            <TableElement 
                                key = {i}
                                i = {i.toString()}
                                name = {purchase.purName}
                                desc = {purchase.purDesc} 
                                price = {purchase.price}
                                handleDelete={handlePurDelete}
                            />
                        ))}
                        
                
                </tbody>
            </table>
        </div>
    )
}

export default Table;