import { DOM } from "./index.js";

function setTime() {
    const time = new Date();
    const date =  time.toLocaleDateString();
    DOM.dateDisplay.innerHTML = date;
}
export default setTime;