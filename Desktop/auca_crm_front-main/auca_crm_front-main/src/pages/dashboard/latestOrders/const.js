import React from 'react';

export const columns = [
  {
    field: 'Order ID',
    sortable: false,
    headerName: '',
    width: 200,
    renderCell: (params) => (
      <div className='row user__row'>
        <span className='user__name'>{params.row.userID}</span>
      </div>
    ),
  },
  { field: 'fullName', headerName: 'Customer', width: 200 },
  {
    field: 'dateOfRegistry',
    headerName: 'Date',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Status',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    width: 200,
  },
];