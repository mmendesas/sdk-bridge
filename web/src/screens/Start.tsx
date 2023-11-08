import { Spinner, Timer } from '../components';
import { usePayment } from '../context/PaymentProvider';

export const Start = () => {
  const [state, send] = usePayment();

  const isLoading =
    state.matches('initial') || state.matches('fetchPaymentDetails');

  const message = state.matches('initial')
    ? 'Checking information...'
    : 'Fetching payment details...';

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <Spinner />
          <span>{message}</span>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-2xl font-bold">Authorize Payment</h2>
          <Timer />
          <span className="w-[70%] text-xl text-center">
            Pay EUR 100.00 to Amazon from card ending in ***0512 ?
          </span>
          <div className="flex gap-2 w-[60%]">
            <button
              className="btn bg-[#99B080]"
              onClick={() => send('APPROVE')}
            >
              Approve
            </button>
            <button
              className="btn bg-[#F9B572]"
              onClick={() => send('DISMISS')}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
