// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'

import Navbar from './components/NavBar'
import Hero from './components/Hero'


import Login from "./components/LogIn"


export default function Page() {
  return (
    <div>
      <Login />
    </div>
  );
  }
