import { createMachine } from 'xstate';

export const paymentMachine = createMachine(
  {
    id: 'paymentAuthentication',
    initial: 'initial',
    context: {
      expiresON: new Date(Date.now() + 15000),
    },
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
      detailsFetched: {
        after: {
          AUTHORIZATION_EXPIRES: {
            target: 'authorizationExpired',
          },
        },
        on: {
          DISMISS: 'authorizationDeclined',
          APPROVE: 'paymentAuthorized',
        },
      },
      preReqNotMet: { type: 'final' },
      paymentAuthorized: { type: 'final' },
      authorizationDeclined: { type: 'final' },
      authorizationExpired: { type: 'final' },
    },
  },
  {
    delays: {
      AUTHORIZATION_EXPIRES: (ctx) => {
        console.log('authorization expires', ctx);
        return Math.max(ctx.expiresON - new Date(), 0);
      },
    },
  }
);
