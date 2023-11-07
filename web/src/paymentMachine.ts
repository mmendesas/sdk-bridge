import { createMachine } from 'xstate';

export const paymentMachine = createMachine({
  id: 'paymentAuthentication',
  initial: 'initial',
  states: {
    initial: {
      invoke: {
        id: 'checkPrerequisites',
        src: 'checkPrerequisites',
        onDone: { target: 'fetchPaymentDetails' },
        onError: { target: 'preReqNotMet' },
      },
    },
    fetchPaymentDetails: {
      invoke: {
        id: 'fetchPaymentDetails',
        src: 'fetchPaymentDetails',
        onDone: {
          target: 'detailsFetched',
        },
      },
    },
    detailsFetched: {},
    preReqNotMet: { type: 'final' },
  },
});
