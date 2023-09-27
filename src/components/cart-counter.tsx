import {useStore} from "../hooks/use-cart";

export function CartCounter(props){
    const count=useStore((state)=>state.count)
    console.log("rendu counter")
    return(<>

            <h2> Le nombre de ligne est : {count} </h2>

        </>
    )


}