import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './routes';

export default function Home() {
  const token = useSelector(state => state.user.token);

  return <Routes isSigned={!!token} />
}
