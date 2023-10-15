import React from "react"
import "./ProductsList.css"
import { DataGrid } from "@mui/x-data-grid"

const ProductsList = () => {

  const data = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 15 },
    // Add more data as needed
  ];

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 150 },
    // Add more columns as needed
  ];
  
  return (
    <>
      <div className='ProductsList'>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
    </>
  )
}

export default ProductsList
