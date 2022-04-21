import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function DataTable(props) {
    const columns = [
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'author_name', headerName: 'Author', width: 200 },
        { field: 'button', headerName: 'Button', width: 100 },
        //render link
        {
            field: 'button',
            headerName: 'Button',
            width: 100,
            render: (rowData) => {
                return (
                    <a href={`/book/${rowData.key}`}>
                        <button>View</button>
                    </a>
                );
            }
        }

    ];

    const rows = props.Data.map((item, i) => ({ id: i, title: item?.title, author_name: item?.authors[0]?.name, }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}