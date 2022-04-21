import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';



export default function DataTable(props) {


    
    const columns = [
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'author_name', headerName: 'Author', width: 200 },
        {
            field: 'link',
            headerName: 'Learn More',
            width: 130,
            renderCell: (params) => (
              <strong>
                <Button
                href={'https://www.google.com/search?q=' + params?.value}
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                >
                  Open
                </Button>
              </strong>
            ),
          },
        
    ];

    const rows = props.Data.map((item, i) => ({ id: i, title: item?.title, author_name: item?.authors[0]?.name, link: item?.title }));

    return (
        <div style={{ height: '60%', width: '40em' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                loading={props.Loading}
            />
        </div>
    );
}