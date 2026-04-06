import { Book } from './components/Book';
import { Quiz } from './components/Quiz';

export default function App() {
  const isQuizRoute = window.location.pathname === '/quiz';

  return (
    <main className="min-h-screen bg-stone-200 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {isQuizRoute ? <Quiz /> : <Book />}
    </main>
  );
}
