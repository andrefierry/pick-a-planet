import { planetsData } from "../planets";
const SelectorBtn = ({children, onClick}) => {
    return(
        <button onClick={onClick}>{children}</button>
    )
  }

export default SelectorBtn;