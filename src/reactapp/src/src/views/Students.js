import { Card} from 'reactstrap'
import DataTable from "react-data-table-component";
import React, { useEffect } from 'react';
import endpoint from './endpoint'


const columns = [
  {
    id: 1,
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "BirthDate",
    selector: (row) => row.birthd,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 4,
    name: "Class's ID",
    selector: (row) => row.idClass,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 5,
    name: "Class's Name",
    selector: (row) => row.nameClass,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 6,
    name: "Faculty's ID",
    selector: (row) => row.idFaculty,
    sortable: true,
    right: true,
    reorder: true
  },
  {
    id: 7,
    name: "Faculty's Name",
    selector: (row) => row.nameFaculty,
    sortable: true,
    right: true,
    reorder: true
  }
];



const conditionalRowStyles = [
  {
    when: row => row.calories < 300,
    style: {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  // You can also pass a callback to style for additional customization
  {
    when: row => row.calories < 400,
    style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
  },
];


const SecondPage = () => {

	const [rows, setRows] = React.useState([]);


  const fetchGet = async () => {
    const response = await fetch(
        `${endpoint}/api/getStudents`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': JSON.parse(localStorage.getItem('userData')).accessToken
          }
        }
      );
     const data = await response.json();
     console.log(data)
     setRows(data);
    };

  useEffect(() => {
      fetchGet()
  }, []);

  return (
    <Card>
      <DataTable
          title="Subjects"
          columns={columns}
          data={rows}
          pagination
          conditionalRowStyles={conditionalRowStyles}
        />
    </Card>
  )
}

export default SecondPage
