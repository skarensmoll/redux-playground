import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index'


const Counter = () => {

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatcher = useDispatch();

  const increaseDispatcher = () => {
    dispatcher(counterActions.increase({ amount: 10 }))
  }

  const decrementDispatcher = () => {
    dispatcher(counterActions.decrement());
  }

  const toggleDispatcher = ()=> {
    dispatcher(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={decrementDispatcher}>Decrement</button>
        <button onClick={increaseDispatcher}>Increment</button>
      </div>
      <button onClick={toggleDispatcher}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class CounterClass extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         </div>

//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: ()=> dispatch({ type: 'increment' }),
//     decrement: ()=> dispatch({ type: 'decrement' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);