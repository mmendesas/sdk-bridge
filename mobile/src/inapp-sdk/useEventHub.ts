import {EventHub} from './EventHub';

const eventHub = new EventHub();

export const useEventHub = () => {
  const subscribe = (event: string, cb: () => void) => {
    eventHub.on(event, cb);
  };

  const unsubscribe = (event: string) => {
    eventHub.off(event);
  };

  const dispatch = (event: string, data: any) => {
    eventHub.emit(event, data);
  };

  return {
    subscribe,
    unsubscribe,
    dispatch,
  };
};
