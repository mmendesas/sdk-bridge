import { CrossIcon } from '../components';
import { sendMessageToNative } from '../web-sdk';

const AuthDeclined = () => {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Authorization Declined</h2>
      <span>Payment authorization has been declined</span>
    </div>
  );
};

const AuthExpired = () => {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Authorization Expired</h2>
      <span>Payment authorization has been expired after timeout</span>
    </div>
  );
};

type AuthorizationErrorProps = {
  type: 'declined' | 'expired';
};

export const AuthorizationError = ({ type }: AuthorizationErrorProps) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {type === 'declined' && <AuthDeclined />}
      {type === 'expired' && <AuthExpired />}

      <CrossIcon />
      <button
        className="btn bg-black"
        onClick={() => {
          sendMessageToNative('closeFullscreen');
        }}
      >
        Close
      </button>
    </div>
  );
};
