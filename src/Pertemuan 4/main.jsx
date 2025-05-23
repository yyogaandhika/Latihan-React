import { createRoot } from "react-dom/client";
import './tailwind.css'



createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkListFilter/>
        </div>
    )