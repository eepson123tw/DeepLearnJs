/* 

  Redux 哲學
  所有的數據都放在「頂層」
  所有的動作都通做「事件」來溝通

  名詞
  store  : 存放數據的地方（就是一個 object）
  action : 事件（就是 event 只是換個名字） action(type, payload)
  action type : 事件的種類（你自訂的）
  action payload : 你傳給事件的參數（你給的）
  reducer : 數據的操作叫做 reducer （智障）
  dispatch : 操作 action 的意思
  subscribe : 對事件的訂閱叫 subscribe

  動作
  你要獲取一個數據 就用 store.getState()

*/

/* 
  一個 reducer 的函數長這樣
*/

const reducer = function(state, action){
    return state === undefined 
          ? { n: 0 } 
          : action.type === 'add' 
            ? {n: state.n + action.payload} 
            : state
  }
  
  var state = { n: 0 }
  state = reducer( state , {type:'add', payload: 1}) // { n: 1 }
  // {type:'add', payload: 1} 就是 action
  
  
  /*  天才用法
  
    你需要註冊一個 store 
    var store = createStore(reducer)
  
    你需要訂閱
    store.subscribe(()=>{
      render() 狀態改變之後你要做的事情
    })
  
    把你要做的 action dispatch 一下 ... 又是新的名詞 dispatch
    store.dispatch({type:'add', payload: 1})
  */