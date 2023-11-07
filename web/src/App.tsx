import { createMachine } from 'xstate';
import { CheckoutPage } from './screens/CheckoutPage';
import { useMachine } from '@xstate/react';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});

function App() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <main className="p-20 flex flex-col">
      <CheckoutPage />
      <button onClick={() => send('TOGGLE')}>
        {state.value === 'inactive'
          ? 'Click to activate'
          : 'Active! click to deactivate'}
      </button>
    </main>
  );
}

export default App;
