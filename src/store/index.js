import { createStore } from "vuex";
import { put,putAllList } from "../commonality/tab";
export default createStore({
  state: {
    n:0,
    flag: false,
    arr: [
      {id:1,is:false,text:"今天要修复100个BUG"},
      {id:2,is:true,text:"今天要写100行代码"},
      {id:3,is:true,text:"今天要完成任务"},
      {id:4,is:false,text:"今天要早睡"},
      {id:5,is:false,text:"明天要早起"},
    ],
    btns: [],
    userList: [
      {id:1,user:"丽丽",price:"123",src:"https://img2.baidu.com/it/u=1102422109,2329301190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",address:"广东省东菀市",flg:false,time:"2019-11-1"},
      {id:2,user:"小惠",price:"789",src:"https://img2.baidu.com/it/u=3555903355,1501952217&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",address:"广东省湛江市",flg:true,time:"2019-10-11"},
      {id:3,user:"小雪",price:"1232",src:"https://img1.baidu.com/it/u=2755490528,183058545&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",address:"上海市青浦区",flg:true,time:"2019-11-19"},
      {id:4,user:"小智",price:"666",src:"https://img1.baidu.com/it/u=397117983,701627135&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",address:"浙江省舟山市",flg:false,time:"2019-10-21"},
    ],
    tab: {
      title: ["未读消息", "已读消息", "回收站"],
      cont: {
        unread: [
          {id:1,text:"【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",timer:"2018-04-19 20:00:00"},
          {id:2,text:"今晚12点整发大红包，先到先得",timer:"2018-04-19 21:00:00"},
        ],
        read: [
          {id:1,text:"【系统通知】该系统将于今天6点到15点进行升级维护",timer:"2018-04-19 20:00:00"}
          
        ],
        dele: [
          {id:1,text:"【系统通知】该系统将于今晚20点到24点进行升级维护",timer:"2019-06-19 20:00:00"}
        ]
      }
  
    },
  },
  mutations: {
    ff(state, bol) {
      state.flag = bol
    },
    deles(state,con) {
      let x = state.arr.findIndex((val) => {
        return val.id==con
      })
      state.arr.splice(x, 1)
    },
    addBtn(state, con) {
      let n = state.btns.find(val => val.text == con.text)
      if (!n) {
        state.btns.push(con)
      }
    },
    dele(state, con) {
      let x = state.btns.findIndex(val => val.text == con)
      state.btns.splice(x,1)
    },
    addArr(state, con) {
      let n = state.arr.length
      let obj = { "id": n+1, "is": false, text: con };
      state.arr.push(obj);
    },
    putList(state, obj) {
      let el = state.userList.find(val => val.id == obj.i);
      el.user = obj.name;
      el.address = obj.address;
    },
    deleList(state,x) {
      let n = state.userList.findIndex(val => val.id == x);
      state.userList.splice(n,1)
    },
    allDele(state, arr) {
      state.userList.forEach(el => {
        for (let i = 0; i < arr.length; i++){
          if (el.id == arr[i].id) {
            state.userList.splice(i,1)
          }
        }
      })
    },

    unread(state, n) {
      put(state.tab.cont.unread,state.tab.cont.read,n)
      // let el = state.tab.cont.unread.find(val => val.id == n)
      // let x = state.tab.cont.unread.findIndex(val => val.id == n)
      // state.tab.cont.unread.splice(x, 1)
      // el.id = (state.tab.cont.read.length)+1
      // state.tab.cont.read.push(el)
    },
    unreadAll(state) {
      state.n = state.tab.cont.read.length;
      state.tab.cont.unread.forEach(val => {
        state.n++;
        val.id = state.n;
      })
      state.tab.cont.read = [...state.tab.cont.unread,...state.tab.cont.read]
      state.tab.cont.unread=[]
      // putAllList(state.tab.cont.read,state.tab.cont.unread,state.n)
    },
    deleTab(state,m) {
      put(state.tab.cont.read,state.tab.cont.dele,m)
    },
    deleAllTab(state) {
      state.n = state.tab.cont.dele.length;
      state.tab.cont.read.forEach(val => {
        state.n++;
        val.id = state.n;
      })
      state.tab.cont.dele = [...state.tab.cont.read,...state.tab.cont.dele]
      state.tab.cont.read=[]
      // putAllList(state.tab.cont.dele,state.tab.cont.read,state.n)
    },
    restoreTab(state,s) {
      put(state.tab.cont.dele,state.tab.cont.read,s)
    },
    clearTab(state) {
      state.tab.cont.dele=[]
    }
  },
  actions: {},
  getters:{},
  modules: {
  },
});
