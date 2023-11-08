import { useEffect, useState } from 'react';
import { usePayment } from '../context/PaymentProvider';
import { addZero, getSeconds } from '../utils';

export const Timer = () => {
  const [state] = usePayment();

  const [countdown, setCountdown] = useState(
    getSeconds(state.context.expiresON)
  );

  const minutes = addZero(Math.floor(countdown / 60));
  const seconds = addZero(Math.floor(countdown % 60));
  const color = countdown > 3 ? 'black' : 'red';

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-4xl" style={{ color }}>
        {minutes}:{seconds}
      </div>
      <span className="text-xs">Expiration time</span>
    </div>
  );
};
