import { createStore } from 'vuex'

//firebase imports
import {auth} from '../Config/config'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

// const store = createStore({
//   state: {
//     points: 0
//   },
//   mutations: {
//     updatePoints(state, payload) {
//       state.points = state.points + payload
//     }
//   }
// })

const store = createStore({
  state:{
    user:null,
    authIsReady:false
  },
  mutations:{
    setUser(state, payload){
      state.user = payload 
      console.log('user state changed', state.user)
    },
    setAuthIsReady(state,payload){
      state.authIsReady = payload
    }
  },
  actions:{
    async signUp(context,{email,password}){
      console.log('signup action')
      //async code
      const res = await createUserWithEmailAndPassword(auth,email,password)
      if(res){
        context.commit('setUser',res.user)
      } else{
        throw new Error("Could not complete Sign up")
      }
    },

    async login(context,{email,password}){
      console.log('login action')
      //async code
      const res = await signInWithEmailAndPassword(auth,email,password)
      if(res){
        context.commit('setUser',res.user)
      } else{
        throw new Error("Could not complete login")
      }
    },

    async logout(context){
      console.log('logout action')

      await signOut(auth)
      context.commit('setUser',null)
    }

  }
})


const unsub = onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChanged")
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})


// export the store
export default store