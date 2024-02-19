import {lazy, Suspense} from 'react'
function App() {
  const ProgressBar = lazy(()=>import('./progressbar/ProgressBar'))
  return (
    <div>
      <Suspense fallback={<p>loading...</p>} >
      <ProgressBar/>
      </Suspense>
    </div>
  );
}

export default App;
