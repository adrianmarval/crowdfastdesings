'use client';

import { socket } from '@/app/socket';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useReducer } from 'react';

type StatusState = { isConnected: boolean; transport: string };
type StatusAction = { type: 'CONNECT'; transport: string } | { type: 'UPGRADE'; transport: string } | { type: 'DISCONNECT' };

function statusReducer(state: StatusState, action: StatusAction): StatusState {
  switch (action.type) {
    case 'CONNECT':
      return { isConnected: true, transport: action.transport };
    case 'UPGRADE':
      return { ...state, transport: action.transport };
    case 'DISCONNECT':
      return { isConnected: false, transport: 'N/A' };
    default:
      return state;
  }
}

export function SocketStatusCard() {
  const [status, dispatch] = useReducer(statusReducer, { isConnected: false, transport: 'N/A' });

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      dispatch({ type: 'CONNECT', transport: socket.io.engine.transport.name });

      socket.io.engine.on('upgrade', (transport) => {
        dispatch({ type: 'UPGRADE', transport: transport.name });
      });
    }

    function onDisconnect() {
      dispatch({ type: 'DISCONNECT' });
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Socket Status</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Status: {status.isConnected ? 'connected' : 'disconnected'}</p>
        <p>Transport: {status.transport}</p>
      </CardContent>
    </Card>
  );
}
