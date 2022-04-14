import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import SearchBar from './searchBar';
import { PrimaryBtn } from '../../components/btns';
import { columns, rows } from './const';
import Modal from './modal';
import './style.scss';

export default function Manage() {
  const [usersData, setUsersData] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [rows, setRows] = useState([
    {
      id: 1,
      subjects: 'Math',
      credits: 10,
      students: 66,
      registerForm: ''
    },
    {
      id: 2,
      subjects: 'Chemistry',
      credits: 50,
      students: 30,
      registerForm: ''
    },
    {
      id: 3,
      subjects: 'Physics',
      credits: 60,
      students: 100,
      registerForm: ''
    },
  ]);

  const addNewRow = (newRow) => {
    setRows([...rows, newRow])
  }

  const handleClickModal = () => {
    setActiveModal(true);
  };

  // React.useEffect(async () => {
  //   await axios
  //     .get(`http://localhost:3000/database.json`)
  //     .then((response) => response)
  //     .then(({ data }) => setUsersData(data.users));
  // }, []);
  return (
    <div className='manage'>
      <div className='section__container'>
        {activeModal && (
          <Modal
            usersData={usersData}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            setUsersData={setUsersData}
            create={addNewRow}
          />
        )}

        <div className='manage__top'>
          {/* <SearchBar setSearchValue={setSearchValue} style={{ borderRadius: '4px' }} /> */}
          <h1 className='manage__title'>Subjects</h1>
          <PrimaryBtn handleClickModal={handleClickModal} text={'Add user'} />
        </div>
        <div style={{ height: 450, width: '100%', background: 'white', borderRadius: '4px' }}>
          <DataGrid rows={rows} columns={columns} pageSize={6}/>
        </div>
      </div>
    </div>
  );
};