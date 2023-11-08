import { Spinner } from '../components/Spinner';
import { usePayment } from '../context/PaymentProvider';
import { AuthorizationError } from './AuthorizationError';
import { PaymentAuthorized } from './PaymentAuthorized';
import { Start } from './Start';

export const CheckoutPage = () => {
  const [state] = usePayment();

  const showStartScreen = (state: string) => {
    return (
      ['initial', 'fetchPaymentDetails', 'detailsFetched'].indexOf(state) > -1
    );
  };

  console.log('state', state.value, showStartScreen(state.value));

  return (
    <div>
      <h1>CheckoutPage</h1>
      {showStartScreen(state.value) && <Start />}
      {state.matches('paymentAuthorized') && <PaymentAuthorized />}
      {state.matches('authorizationDeclined') && (
        <AuthorizationError type="declined" />
      )}

      <div className="text-center text-red-500 font-bold">
        debug: {state.value}
      </div>
    </div>
  );
};
