import BudgetForm from './components/BudgetForm';

function App() {
  return (
    <>
      <header className="bg-blue-700 py-4 max-h-72">
        <h1 className="text-center font-medium text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
