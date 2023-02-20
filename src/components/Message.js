import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { messageFetch } from '../redux/messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(messageFetch());
  }, []);

  return (
    <div>
      <p>{message.message}</p>
      <p>Hello</p>
    </div>
  );
};

export default Message;
