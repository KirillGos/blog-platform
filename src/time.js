import { DOM } from "./index.js";

function getTime() {
    const time = new Date();
    const date =  time.toLocaleDateString();
    DOM.dateDisplay.innerHTML = date;
}
export default getTime;