import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function DataTable(props) {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "country", headerName: "Country", flex: 0.5 },
    { field: "region", headerName: "Region", flex: 1 },
    { field: "subregion", headerName: "Subregion", flex: 1 },
    {
      field: "link",
      headerName: "Learn More",
      flex: 0.5,
      renderCell: (params) => (
        <Link to={`/volcano/${params?.id}`}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </Link>
      ),
    },
  ];

  const rows = props.Data?.map((item) => ({
    id: item?.id,
    name: item?.name,
    country: item?.country,
    region: item?.region,
    subregion: item.subregion,
    link: item?.name,
  }));

  return (
    <div style={{ width: "100%", height: "70%" }}>
      <DataGrid
        error={props.Error}
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
