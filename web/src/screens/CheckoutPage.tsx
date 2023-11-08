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
      {showStartScreen(state.value) && <Start />}
      {state.matches('paymentAuthorized') && <PaymentAuthorized />}
      {state.matches('authorizationDeclined') && (
        <AuthorizationError type="declined" />
      )}
      {state.matches('authorizationExpired') && (
        <AuthorizationError type="expired" />
      )}

      <div className="text-center text-red-500 font-bold flex flex-col">
        <span>debug: {state.value}</span>
        <span>debug: {JSON.stringify(state.context)}</span>
      </div>
    </div>
  );
};
