import { useEffect, useState } from 'react';
import { usePayment } from '../context/PaymentProvider';
import { addZero } from '../utils';

export const Timer = () => {
  const [state] = usePayment();

  const [countdown, setCountdown] = useState(10);
  const minutes = addZero(Math.floor(countdown / 60));
  const seconds = addZero(Math.floor(countdown % 60));

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
      <div className="font-bold text-4xl">
        {minutes}:{seconds}
      </div>
      <span className="text-xs">Expiration time</span>
    </div>
  );
};
