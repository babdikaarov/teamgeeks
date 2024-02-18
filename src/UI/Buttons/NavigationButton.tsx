import "./NavigationButton.scss"
import icon from "../../assets/icons/bigArrow"

const NavigationButton: React.FC<Prop.INavigationProps> = ({id}) => {
   return (
      <button
         aria-label="navigation"
         id={id}
      >
         {icon}
      </button>
   )
}

export default NavigationButton