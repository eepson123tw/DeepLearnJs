/* 

  說明

  這次作業是手寫 Redux 的基礎功能
  先別緊張，就是函數返回 {} 、函數返回 condition 、函數返回函數，三種的排列組合

  加上 ....

  超多智障的新名詞
  超智障的繞來繞去而已

*/

// 先了解一下 Redux 世界觀

/* 

  Redux 哲學
  所有的數據都放在「頂層」
  所有的動作都通過「事件」來溝通

  名詞
  store  : 存放數據的地方（就是一個 object）
  action : 事件（就是 event 只是換個名字叫） action{ type,  payload } 
  action type : 事件的種類（你自訂的）
  action payload : 傳給事件的參數（你給的）
  reducer : 數據的操作叫做 reducer （智障）
  dispatch : 執行 action 的意思
  subscribe : 對 store 進行訂閱，告訴 redux 如果 store 有改變要通知做什麼事


  概念
  1. 把 state 跟 event 包裝成 reducer

  2. 將這個 reducer 當作參數傳給 createStore(reducer) 
     var store = createStore(reducer) 
     返回的物件 叫做 store

  3. 訂閱
  store.subscribe(()=>{})

  4. 動作
  你要獲取一個數據 就用 store.getState()
  你要更新一個數據 就用 store.dispatch({type:'add', payload: 1})

*/

//
//
//
//
//
// 這一步是關鍵，要先看懂什麼叫做 reducer

/* 
  一個 reducer 的函數長這樣
  就是一個標準的函數返回 condition 的封裝

  關注重點：
    1. state 
    2. action

*/

const reducer = function( state = { n: 0 }, action){
  return action?.type === 'add' 
          ? {n: state.n + action.payload} 
          : action?.type === 'minus'
            ? {n: state.n - action.payload}
            : state
}

// 不需要 Redux 也能用，直接使用起來是這樣...

var state = reducer() // 得到初始值 { n: 0 }

state = reducer( state  , {type:'add', payload: 10}) // 得到加 10 操作後的值 { n: 10 }
// {type:'add', payload: 10} 就是 action 

state = reducer( state  , {type:'minus', payload: 5}) // 得到減 5 操作後的值  { n: 5 }



//
//
//
//
//
//  再看一下官方的 Redux 使用套路

/*  天才(智障？)用法



  你需要創建一個 store，把上面你寫的 reducer 當作參數給 createStore()

  store 就是一個 {} 裡面有方法可以操作

  var store = createStore(reducer)

  將 store 訂閱起來，告訴 redux 如果狀態有改變要做什麼事
  store.subscribe(()=>{
    
    
    狀態改變之後
    你要做的事情都放在這裡面


  })

  把你要做的 action 作爲參數給 dispatch()
  
  store.dispatch({type:'add', payload: 1})


*/













// 最後請看 redux範例.html  
// 看熟～然後自己寫寫看