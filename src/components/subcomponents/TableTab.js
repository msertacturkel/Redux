/**
 * Created by sertac.turkel on 18/07/2017.
 */
import React from "react";
import { Cell, Column, Table } from '@blueprintjs/table';

export const TableTab = (props) => {
    const renderCell = (rowIndex) => <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
    return (
    <div className="row">
        <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
            <Table numRows={10}>
                <Column name="Dollars" renderCell={renderCell}/>
            </Table>
        </div>
    </div>

    );
};
