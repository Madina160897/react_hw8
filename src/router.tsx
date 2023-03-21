import { createBrowserRouter } from "react-router-dom";
import {
    MainPage,
    ErrorPage,
    PeoplePage,
    PlanetPage,
    StarshipsPage,
    PeopleInfo,
    PlanetsInfo,
    StarshipsInfo
} from "./routes/index"

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
        path: "/people/:peoplesId",
        element: <PeopleInfo />
    },
    {
        path: '/planets',
        element: <PlanetPage />,
    },
    {
        path: "/planets/:planetsId",
        element: <PlanetsInfo />
    },
    {
        path: '/starships',
        element: <StarshipsPage />,
    },
    {
        path: "/starships/:starshipsId",
        element: <StarshipsInfo />
    },
]);

export default router;