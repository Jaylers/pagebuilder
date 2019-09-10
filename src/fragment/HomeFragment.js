import React, {useState} from 'react';
import DataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

export default function HomeFragment() {
    let bigGrid = [];
    for (let row = 0; row<=26;row++){
        let childGrid = [];
        for(let col = 1; col<=80; col++){
            if (row === 0){
                if (col === 1){
                    childGrid.push({value: "*", readOnly: true})
                }

                if (col%10 === 0){
                    childGrid.push({value: "#"+col/10, readOnly: true})
                } else {
                    childGrid.push({value: col%10, readOnly: true})
                }
            } else if (col===1){
                if (row%10 === 0 ){
                    childGrid.push({value: "#"+row/10, readOnly: true})
                } else {
                    if (row === 26){
                        childGrid.push({value: "*", readOnly: true});
                        childGrid.push({value: 1, readOnly: true})
                    } else {
                        childGrid.push({value: row%10, readOnly: true});
                        childGrid.push({value: " ", readOnly: false})
                    }
                }
            } else if (row%10 !== 0 && col%10!==0&& row !== 26){
                childGrid.push({value: " ", readOnly: false})
            } else if(row===26){
                if (col%10 === 0 ){
                    childGrid.push({value: col/10, readOnly: true})
                } else {
                    childGrid.push({value: col%10, readOnly: true});
                }
            } else {
                if (row%10 === 0 && col === 2){
                    childGrid.push({value: " ", readOnly: false})
                }
                childGrid.push({value: " ", readOnly: false})
            }
        }
        bigGrid.push(childGrid)
    }

    const [appGrid, setGrid] = useState(bigGrid);

    return (
        <div className="FullContainer">
            <DataSheet
                className="fullWH"
                data={appGrid}
                valueRenderer={(cell) => cell.value}
                onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
                onCellsChanged={changes => {
                    const grid = appGrid.map(row => [...row]);
                    changes.forEach(({cell, row, col, value}) => {
                        grid[row][col] = {...grid[row][col], value}
                    });
                    setGrid(grid)
                }}
            />
        </div>
    );
}