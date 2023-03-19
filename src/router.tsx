import { createBrowserRouter } from "react-router-dom";
import { MainPage, ErrorPage, PeoplePage, PlanetPage, StarshipsPage } from "./routes/index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/people',
        element: <PeoplePage />,
    },
    {
        path: '/planets',
        element: <PlanetPage />,
    },
    {
        path: '/starships',
        element: <StarshipsPage />,
    },
    // {
    //     path: '/posts', element: <EntrancePage />,
    //     children: [{ path: '/posts/:postId', element: <HelpPage /> }]
    // },
]);

export default router;