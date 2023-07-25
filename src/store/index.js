import { createStore } from 'vuex'

//firebase imports
import {auth} from '../Config/config'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'

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
    user:null
  },
  mutations:{
    setUser(state, payload){
      state.user = payload 
      console.log('user state changed', state.user)
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

// export the store
export default store