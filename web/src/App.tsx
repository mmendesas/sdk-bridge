import { PaymentProvider } from './context/PaymentProvider';
import { CheckoutPage } from './screens/CheckoutPage';

function App() {
  return (
    <main className="p-20; flex flex-col items-center justify-center">
      <PaymentProvider>
        <CheckoutPage
          config={{
            debug: false,
          }}
        />
      </PaymentProvider>
    </main>
  );
}

export default App;
