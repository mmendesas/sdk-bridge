import { CheckIcon } from '../components';
import { sendMessageToNative } from '../web-sdk';

export const PaymentAuthorized = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <h2 className="text-2xl font-bold">Authorization Success</h2>
      <CheckIcon />
      <button
        className="btn bg-black"
        onClick={() => {
          sendMessageToNative('closeFullscreen');
          sendMessageToNative('success');
        }}
      >
        Close
      </button>
    </div>
  );
};
