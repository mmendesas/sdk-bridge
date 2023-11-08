import { CrossIcon } from '../components';

export const AuthDeclined = () => {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Authorization Declined</h2>
      <span>Payment authorization has been declined</span>
    </div>
  );
};

type AuthorizationErrorProps = {
  type: 'declined';
};

export const AuthorizationError = ({ type }: AuthorizationErrorProps) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {type === 'declined' && <AuthDeclined />}

      <CrossIcon />
      <button className="btn bg-black" onClick={() => {}}>
        Close
      </button>
    </div>
  );
};
