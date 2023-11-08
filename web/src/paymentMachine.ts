import { assign, createMachine } from 'xstate';

export const paymentMachine = createMachine(
  {
    id: 'paymentAuthentication',
    initial: 'initial',
    context: {
      expiresON: null,
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
            actions: assign((_ctx, event) => event.data),
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
        if (!ctx.expiresON) return 0;
        return Math.max(ctx.expiresON - Number(new Date()), 0);
      },
    },
  }
);
