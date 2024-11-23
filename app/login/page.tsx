"use client";

import { login } from './actions'


export default function LoginPage() {
  return (
    
      <button onClick={() => login()}>Login with microsoft</button>
    
  )
}
