/**
 * Created by sertac.turkel on 17/07/2017.
 */
import React from "react";
import { Cell, Column, Table } from '@blueprintjs/table';
export const Footer = (props) => {
    const renderCell = (rowIndex) => <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
    return (

        <div className="pt-card pt-elevation-1 pt-interactive">
            <p>Footer</p>
            <Table numRows={10}>
                <Column name="Dollars" renderCell={renderCell}/>
            </Table>
        </div>



    );
};

