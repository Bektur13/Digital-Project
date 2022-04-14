export const columns = [
  {
    field: 'subjects',
		sortable: false,
    headerName: 'Subjects',
    width: 250,
    // renderCell: (params) => (
    //   <div className="row user__row">
    //      {/* <img className='user__avatar' src={params.row.avatar} alt='No image' /> */}
		// 		<span className='user__name'>{params.row.fullName}</span>
    //   </div>
    // ),
  },
  {
    field: 'credits',
    headerName: 'Credits',
    width: 200,
  },
  {
    field: 'students',
    headerName: 'Students',
    description: 'This column has a value getter and is not sortable.',
    width: 200,
	},
	{
    field: 'dateOfRegistry',
    headerName: 'Subject Added',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
	{
    field: 'registerForm',
    headerName: 'Register Form',
    description: 'This column has a value getter and is not sortable.',
    width: 200,
  },
];

export const rows = [
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
];