import { Debug } from '../components';
import { usePayment } from '../context/PaymentProvider';
import { AuthorizationError } from './AuthorizationError';
import { PaymentAuthorized } from './PaymentAuthorized';
import { Start } from './Start';

type Config = {
  debug: boolean;
};

type CheckoutPageProps = {
  config?: Config;
};

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ config }) => {
  const [state] = usePayment();

  const showStartScreen = (state: string) => {
    return (
      ['initial', 'fetchPaymentDetails', 'detailsFetched'].indexOf(state) > -1
    );
  };

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

      {config?.debug ? <Debug state={state} /> : null}
    </div>
  );
};
