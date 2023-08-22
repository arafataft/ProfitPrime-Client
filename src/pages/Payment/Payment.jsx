import { useParams } from 'react-router-dom';

const Payment = () => {
  const { plan, billingOption } = useParams();

  let paymentValue = 0;

  if (plan === 'Basic' && billingOption === 'monthly') {
    paymentValue = 10;
  } else if (plan === 'Basic' && billingOption === 'yearly') {
    paymentValue = 100;
  } else if (plan === 'Prime' && billingOption === 'monthly') {
    paymentValue = 20;
  } else if (plan === 'Prime' && billingOption === 'yearly') {
    paymentValue = 200;
  }

  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="lg:text-4xl text-2xl uppercase font-bold pt-10 md:pt-3 text-sky-950 text-center">Payment</h1>
      <p className="text-gray-500 mb-4">
        You have selected the {plan} plan on {billingOption} billing.
      </p>
      <p className="text-gray-600">Payment Value: ${paymentValue}</p>
    </div>
  );
};

export default Payment;
