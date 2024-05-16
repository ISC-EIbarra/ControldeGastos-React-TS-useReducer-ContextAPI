import { useBudget } from '../hooks/useBudget';
import AmountDisplay from './AmountDisplay';

function BudgetTracker() {
  const { dispatch } = useBudget();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfica de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="px-4 py-2 rounded-3xl cursor-pointer bg-red-500 hover:bg-red-700 text-white hover:text-gray-100 font-medium"
          onClick={() => dispatch({ type: 'reset-budget' })}
        >
          Reiniciar App
        </button>
        <AmountDisplay label="Presupuesto" amount={300} />
        <AmountDisplay label="Disponible" amount={200} />
        <AmountDisplay label="Gastado" amount={100} />
      </div>
    </div>
  );
}

export default BudgetTracker;
