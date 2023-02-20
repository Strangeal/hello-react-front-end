import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { messageFetch } from '../redux/messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(messageFetch());
  }, [dispatch]);

  return (
    <div>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
