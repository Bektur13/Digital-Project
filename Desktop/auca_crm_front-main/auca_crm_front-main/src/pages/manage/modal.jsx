import React, {useEffect, useState} from 'react';
import { BtnGoBack } from '../../components/btns/index';
import modalRight from '../../assets/modal-right.png';
import { rows } from './const';

const Modal = ({ setActiveModal, activeModal, setUsersData, usersData, create }) => {
  const [newUser, setNewUser] = React.useState({
    id: '',
    subjects: '',
    credits: '',
    students: '',
    dateOfRegister: ''
  });

  const currentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const separator = '/';
    const result = `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
    return result;
  };

  const modaRef = React.useRef();
  const modalWrapperRef = React.useRef();

  const handleClickOutside = (event) => {
    if (!event.path.includes(modaRef.current)) {
      setActiveModal(false);
    }
  };

  const saveData = (event) => {
    setNewUser({
      id: rows.length + 1,
      subjects: event.target.form[0].value,
      credits: event.target.form[1].value,
      students: event.target.form[2].value,
      dateOfRegistry: currentDate(),
    });
  };

  const handleSubmit = (event) => {
    setActiveModal(false);
    event.preventDefault();
    setUsersData([...usersData, newUser]);

    const newValue = {
      id: newUser.id,
      subjects: newUser.subjects,
      credits: newUser.credits,
      students: newUser.students,
      dateOfRegistry: newUser.dateOfRegistry,
    }
    create(newValue);
  };

  React.useEffect(() => {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.addEventListener('click', handleClickOutside);
    }
  }, [activeModal]);

  return (
    <div ref={modalWrapperRef} className='modal__wrapper'>
      <div ref={modaRef} className='modal'>
        <div className='col-6 modal__left'>
          <div onClick={() => setActiveModal(false)}>
            <BtnGoBack />
          </div>
          <h3 className='modal__title'>Create a new user</h3>
          <h6 className='modal__suptitle'>Add main information about user</h6>
          <form className='modal__form' onSubmit={handleSubmit}>
            <label className='modal__label' htmlFor=''>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.name}
                type='text'
                placeholder='Введите название предмета'
              />
              <p>Название предмета</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.credits}
                type='text'
                placeholder='Введите число кредитов'
              />
              <p>Кредиты</p>
            </label>
            <label htmlFor='' className='modal__label'>
              <input
                required
                onChange={(event) => saveData(event)}
                value={newUser.students}
                type='text'
                placeholder='Введите количество студентов'
              />
              <p>Студенты</p>
            </label>
            <button className='btn-blue form__btn'>Add New User</button>
          </form>
        </div>
        <div className='col-6 text-right'>
          <img className='modal__right' src={modalRight} alt='modalRight' />
        </div>
      </div>
    </div>
  );
};

export default Modal;