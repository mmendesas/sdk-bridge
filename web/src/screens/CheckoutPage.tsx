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
    state.matches('initial') || state.matches('fetchPaymentDetails');

  const message = state.matches('initial')
    ? 'Checking information...'
    : 'Fetching payment details...';

  console.log('state', state.value);

  return (
    <div>
      <h1>CheckoutPage</h1>
      {isLoading ? (
        <div>
          <Spinner />
          <span>{message}</span>
        </div>
      ) : (
        <div>
          <h2>Authorize Payment</h2>
          <span>Pay EUR 100.00 to Amazon from card ending in ***0512 ?</span>
          <div className="flex flex-col gap-2">
            <button className="btn bg-[#99B080]" onClick={() => {}}>
              Approve
            </button>
            <button className="btn bg-[#F9B572]" onClick={() => {}}>
              Decline
            </button>
          </div>
        </div>
      )}

      {state.matches('initial') && <div>pre req</div>}
      {state.matches('fetchPaymentDetails') && <div>fetch details</div>}
      {state.matches('detailsFetched') && <div>detailsFetched</div>}
    </div>
  );
};
