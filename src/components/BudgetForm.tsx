import { useMemo, useState, FormEvent } from 'react';
import { useBudget } from '../hooks/useBudget';

function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value));
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'add-budget', payload: { budget } });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-medium text-center"
        >
          Definir Presupuesto
        </label>
        <input
          id="number"
          type="number"
          className="w-full bg-white border border-gray-200 px-4 py-2 rounded-3xl"
          placeholder="Define tú presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="Definir Presupuesto"
          className="px-4 py-2 rounded-3xl cursor-pointer bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-100 font-medium disabled:opacity-40"
          disabled={isValid}
        />
      </div>
    </form>
  );
}

export default BudgetForm;
