import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { AppRouter } from './providers/router';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
