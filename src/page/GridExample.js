import * as React from 'react';
import {Table, Column, List} from 'react-virtualized'
import {useState} from "react";

export default function GridExample() {

    let bigGrid = [];
    for (let row = 0; row<=2000;row++){
        bigGrid.push({name: row + "eieieieiei", description: "Software engineer" + row})
    }

    const [appGrid, setGrid] = useState(bigGrid);



    const list = [
        { name: 'Brian Vaughn', description: 'Software engineer' }
    ];

    return (
        <div id="eaxample" className="fullWH bgGray margin25">
            AAAAAAAAAAAAAAAAAAAAAAAAaa
            <List className="fullWH textLightColor"
                {...appGrid}
                sortBy={appGrid.name}/>
            HHHHHHHHHHHHHHHHH
            <Table
                width={300}
                height={800}
                headerHeight={20}
                rowHeight={100}
                rowCount={appGrid.length}
                rowGetter={({ index }) => appGrid[index]}>
                <Column
                    dataKey='name'
                    width={100}/>
                <Column
                    width={100}
                    dataKey='description'/>
            </Table>
        </div>
    );
}