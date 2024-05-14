//📂./src/App.tsx
import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='bg-red'>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App