import React from "react";

import logos from "../../../utils/exportLogos";

import "./Table.sass";

const Table = ({ quotes }) => {

    return (
        <table className="table">
            <thead className="table__head">
                <tr>
                    <th className="table__cell table__cell_fit">State</th>
                    <th className="table__cell table__cell_fit">Name</th>
                    <th className="table__cell table__cell_right">Ex</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {
                    quotes
                        .map((elem) => {
                            return (
                                <tr key={elem.id}>
                                    <td className="table__cell table__cell_fit table__cell_img">
                                        <img
                                            src={logos[elem.name]}
                                            alt={logos[elem.name]}
                                            className="table__logo"
                                        />
                                    </td>
                                    <td className="table__cell table__cell_fit">
                                        {elem.name}
                                    </td>
                                    <td className="table__cell table__cell_right">
                                        <span>{elem.exchange}</span>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    );

}

export default Table;