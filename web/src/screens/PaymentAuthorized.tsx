import { CheckIcon } from '../components';

export const PaymentAuthorized = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <h2 className="text-2xl font-bold">Authorization Success</h2>
      <CheckIcon />
      <button className="btn bg-black" onClick={() => {}}>
        Close
      </button>
    </div>
  );
};
