import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Data() {

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'pageTitle', headerName: 'Mono Id', width: 130 },
    { field: 'pageURL', headerName: 'Amount(naira)', width: 130 },
    { field: 'datePublished', headerName: 'Account No', width: 90, },
    { field: 'pageDescription', headerName: 'Name', description: 'This column has a value getter and is not sortable.', sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'pageTitle') || ''} ${
          params.getValue(params.id, 'pageURL') || ''
        }`,
    },
    { field: 'metaData', headerName: 'Balance (naira)', width: 90, },
    { field: 'todayVisit', headerName: 'Avg income (naira)', width: 90, },
    { field: 'oneWeekVisit', headerName: 'Avg Outcome (naira)', width: 90, },
    { field: 'oneMonthVisit', headerName: 'No of visit"s in 1 month', width: 90, },
  ];
  
  const rows = [
    { id: 1, pageURL: 'Snow', pageTitle: 'Jon', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 2, pageURL: 'Lannister', pageTitle: 'Cersei', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View'},
    { id: 3, pageURL: 'Lannister', pageTitle: 'Jaime', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 4, pageURL: 'Stark', pageTitle: 'Arya', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 5, pageURL: 'Targaryen', pageTitle: 'Daenerys', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 6, pageURL: 'Melisandre', pageTitle: null, datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 7, pageURL: 'Clifford', pageTitle: 'Ferrara', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 8, pageURL: 'Frances', pageTitle: 'Rossini', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
    { id: 9, pageURL: 'Roxie', pageTitle: 'Harvey', datePublished: 15, metaData: 'gtygfdrdddsgh', todayVisit: 20, oneWeekVisit: 40, oneMonthVisit: 'View', view: 'View' },
  ];




  return (
    <div style={{ height: 400, width: '100%' }}>
     <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={6}
                                        rowsPerPageOptions={[5]}
                                        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
                                    />
      {/* <DataGrid
       
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
      /> */}
    </div>
  );
}