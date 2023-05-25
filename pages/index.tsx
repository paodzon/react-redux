
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "@/store/actions/counterAction";

export default function Home() {
  const value = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
   <>
    <h1>Counter: {value}</h1>
    <button onClick={() => dispatch(increment())}>ADD</button>
    <button onClick={() => dispatch(decrement())}>DECREASE</button>
   </>
  )
}
