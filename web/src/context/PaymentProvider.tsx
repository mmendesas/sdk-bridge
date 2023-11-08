import { useMachine } from '@xstate/react';
import React, { createContext, useContext } from 'react';
import { paymentMachine } from '../paymentMachine';
import { sleep } from '../utils';
import { InterpreterFrom } from 'xstate';

const PaymentContext = createContext<InterpreterFrom<
  typeof paymentMachine
> | null>(null);

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw Error('usePayment must be within PaymentProvider');
  }
  return context;
};

type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentProvider: React.FC<PaymentProviderProps> = ({
  children,
}) => {
  const machine = useMachine(paymentMachine, {
    services: {
      checkPrerequisites: async () => {
        console.log('>>> check pre req');
        await sleep(2000);
        return Promise.resolve({ ok: true });
      },
      fetchPaymentDetails: async () => {
        console.log('>>> fetch details');
        await sleep(3000);
        return Promise.resolve({
          something: 123,
        });
      },
    },
  });

  return (
    <PaymentContext.Provider value={machine}>
      {children}
    </PaymentContext.Provider>
  );
};
