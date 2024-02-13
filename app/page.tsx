"use client";
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  Link  from 'next/link';
export default function Home() {

  return (
    <div className='d-flex content-start flex-col'>
        <Link href="/auth" className='btn btn-info'>Auth started</Link>
      </div>
  )
}