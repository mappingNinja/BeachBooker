import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Btn(props) {
  const navigate = useNavigate();

  const MyBtn = styled(Button)({
    color: props.color,
    backgroundColor: props.bgColor,
    borderColor: props.borderColor,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '500',
    margin: '30px 0 0 0',
    padding: '10px 20px',
    border: '2px solid',
    borderRadius: '12px',
    lineHeight: 1.5,
    fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: props.hoverBgColor,
      boxShadow: 'none',
    },
  });

  return <MyBtn onClick={() => {
    navigate('signup');
  }}>{props.btnText}</MyBtn>;
}
