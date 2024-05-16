import { formatCurrency } from '../helpers';

type AmountDisplayProps = {
  label: string;
  amount: number;
};

function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-xl font-medium">
      {label}: {''}
      <span className="text-blue-700">{formatCurrency(amount)}</span>
    </p>
  );
}

export default AmountDisplay;
