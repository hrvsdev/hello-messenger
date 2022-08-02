import { hookstate, useHookstate, useState } from "@hookstate/core";

const store = hookstate("hello");

export const useStore = () => useHookstate(store);