import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './routes';

// TODO: Verificar necessidade desta separação
export default function Home() {
  const token = useSelector(state => state.user.token);
  console.log('TOKEN:', token)

  return <Routes isSigned={!!token} />
}
