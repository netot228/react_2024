import { createRoot } from "react-dom/client";
import Budget from "./Budget/Budget";
import './root.scss';

const rootDOM = document.getElementById('root');
const root = createRoot(rootDOM);

root.render(<Budget />);