import { AgGridReact } from 'ag-grid-react';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './DataGrid.css';

function DataGrid() {

    const [rowData, setRowData] = useState();

    const gridRef = useRef();

    const [columnDefs, setColumnDefs] = useState([
        { field: 'athlete', },
        { field: 'age' },
        { field: 'country' },
    ]);

    const defaultColDef = useMemo(() => (
        {
            // sortable: true,
            filter: true,
            floatingFilter: true,
            // editable: true,
            flex: 1
        } 
    ));

    const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
    }, []);

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: '300px' }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData} columnDefs={columnDefs} 
                    animateRows={true} rowSelection='multiple'
                    onCellClicked={cellClickedListener}
                    defaultColDef={defaultColDef} />
            </div>
        </div>
    );
};


export default DataGrid;
