import { PaymentProvider } from './context/PaymentProvider';
import { CheckoutPage } from './screens/CheckoutPage';

function App() {
  return (
    <main className="p-20 flex flex-col">
      <PaymentProvider>
        <CheckoutPage />
      </PaymentProvider>
    </main>
  );
}

export default App;
