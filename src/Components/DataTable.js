import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';



export default function DataTable(props) {



  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 0.5 },
    { field: 'region', headerName: 'Elevation', flex: 1 },
    { field: 'subregion', headerName: 'Subregion', flex: 1 },
    {
      field: 'link',
      headerName: 'Learn More',
      flex: 0.5,
      renderCell: (params) => (

        <Button
          href={'https://www.google.com/search?q=' + params?.value}
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Open
        </Button>

      ),
    },

  ];

  const rows = props.Data?.map((item, i) => ({ id: item?.id, name: item?.name, country: item?.country, region: item?.region, subregion: item.subregion, link: item?.name }));

  return (
    <div style={{ width: '100%' }} >
      <DataGrid
        autoHeight={true}
        disableExtendRowFullWidth={true}
        autoPageSize={true}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={props.Loading}
      />
    </div>
  );
}