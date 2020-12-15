import { writable } from "svelte/store/index";

function userMethod(){
  const {subscribe, set, update} = writable({});

  return {
    subscribe,
    setUser: (user) => set(user)
  }
}

const userData = userMethod();

export {userData};