import App from 'App';
import Layout from 'Layout';
import ArticlePage from 'pages/article/ArticlePage';
import { createBrowserRouter } from 'react-router-dom';

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/article/:articleId',
                element: <ArticlePage />,
            },
        ],
    },
]);

export default browserRouter;
