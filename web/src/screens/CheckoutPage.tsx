import { useMachine } from '@xstate/react';

import { paymentMachine } from '../paymentMachine';
import { sleep } from '../utils';
import { Spinner } from '../components/Spinner';

export const CheckoutPage = () => {
  const [state, send] = useMachine(paymentMachine, {
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

  const isLoading =
    state.matches('checkPrerequisites') ||
    state.matches('fetchingPaymentDetails');

  console.log('state', state.value);

  return (
    <div>
      <h1>CheckoutPage</h1>
      {isLoading && <div>Loading...</div>}

      <Spinner />
      {state.matches('initial') && <div>pre req</div>}
      {state.matches('fetchPaymentDetails') && <div>fetch details</div>}
      {state.matches('detailsFetched') && <div>detailsFetched</div>}
      <div>something</div>
    </div>
  );
};
