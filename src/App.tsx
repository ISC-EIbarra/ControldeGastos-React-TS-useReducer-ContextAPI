import { useMemo } from 'react';
import { useBudget } from './hooks/useBudget';
import BudgetForm from './components/BudgetForm';
import BudgetTracker from './components/BudgetTracker';
import ExpenseModal from './components/ExpenseModal';

function App() {
  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);
  return (
    <>
      <header className="bg-blue-700 py-4 max-h-72">
        <h1 className="text-center font-medium text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-8">
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
