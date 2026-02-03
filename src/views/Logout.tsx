// import {Navigate} from 'react-router';

import {useEffect} from 'react';
import {useNavigate} from 'react-router';

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem('token');
  useEffect(() => {
    // imperative
    navigate('/');
  }, []);

  return (
    <>
      <p>Logout</p>
      {/*
      // declarative
      <Navigate to={'/'} />
      */}
    </>
  );
};

export default Logout;
