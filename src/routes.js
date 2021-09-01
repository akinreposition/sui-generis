import Index from "./pages";
import SemicolonNatives from "./pages/SemicolonNatives";

export const routes = [
    {
        path: "/home",
        name: "landing page",
        compoment: Index,
        isPrivate: false
    },
    {
        path: "/natives",
        name: "semicolon natives",
        compoment: SemicolonNatives,
        isPrivate: false
    },
]