import Channel from './channel';

const promises: {
  [key: string]: any;
} = {};

export const sendMessageToNative = (method: string, params?: any) => {
  console.log('is this soimething');
  return new Promise((resolve, reject) => {
    const id = Math.random(32).toString();

    promises[id] = { resolve, reject };

    Channel.sendMessage({
      type: 'invoke',
      id,
      args: JSON.stringify([method, params]),
    });
  });
};

Channel.on('message', (payload: any) => {
  if (payload && payload.id) {
    console.log('[web-sdk] on message >>', payload);
  }
});
