import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementBy,
} from "./store/slice/counter/counterSlice";

function App() {
	const { value } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h2>count is {value}</h2>
			<div className="card">
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					increment
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					decrement
				</button>
				<button
					onClick={() => {
						dispatch(incrementBy(5));
					}}
				>
					incrementBy
				</button>
			</div>
		</div>
	);
}

export default App;
