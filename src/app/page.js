"use client";

import { Content, Form, Header, Navbar } from "@/components";

export default function Home() {
  return (
    <div className="container max-w-screen-md mx-auto">     
      <Navbar /> 
      <Header />      
      <Form />
      <Content />
    </div>
  );
}
