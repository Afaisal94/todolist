"use client";

import { Content, Form, Header } from "@/components";

export default function Home() {
  return (
    <div className="container max-w-screen-md mx-auto">      
      <Header />      
      <Form />
      <Content />
    </div>
  );
}
