import { createRoot } from 'react-dom/client'
import ToDoList from './module/ToDoList'
import { CustomThemeProvider } from './context';

createRoot(document.getElementById('root')!).render(
    <CustomThemeProvider>
        <ToDoList />
    </CustomThemeProvider>
)
