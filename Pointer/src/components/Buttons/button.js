import { writable } from "svelte/store/index";

function btnNav(){
  const {subscribe, set, update} = writable(false);

  return {
    subscribe,
    toggle: () => update(n => !n)
  }
}

const buttonNav = btnNav();

export {buttonNav};