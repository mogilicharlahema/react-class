import Buttoncomponent from "./components/functional components/button/buttoncomponent";
import Orderlist from "./components/functional components/lists/order/orderdlist";
import Unorder from "./components/functional components/lists/unorder/unorderedlist";
import Tablecomponent from "./components/functional components/table/table";
function app(){
    return(
        <div>
        <Buttoncomponent></Buttoncomponent>
        <Orderlist></Orderlist>
        
        <Unorder></Unorder>
         <Tablecomponent/>
        </div>
    )
}
export default app