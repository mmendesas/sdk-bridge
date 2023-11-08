import { Spinner } from '../components/Spinner';
import { usePayment } from '../context/PaymentProvider';

export const Start = () => {
  const [state] = usePayment();

  const isLoading =
    state.matches('initial') || state.matches('fetchPaymentDetails');

  const message = state.matches('initial')
    ? 'Checking information...'
    : 'Fetching payment details...';

  // console.log('state', state.value);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <Spinner />
          <span>{message}</span>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl font-bold">Authorize Payment</h2>
          <span className="w-[70%] text-xl text-center">
            Pay EUR 100.00 to Amazon from card ending in ***0512 ?
          </span>
          <div className="flex gap-2 w-[60%]">
            <button className="btn bg-[#99B080]" onClick={() => {}}>
              Approve
            </button>
            <button className="btn bg-[#F9B572]" onClick={() => {}}>
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
};