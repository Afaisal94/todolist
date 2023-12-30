"use client";

import { Content, Form, Header } from "@/components";

export default function Home() {
  return (
    <div
      className="container max-w-screen-md mx-auto p-5"
      style={{ border: "solid 1px #E2E8F0", borderRadius: "5px" }}
    >
      <Header />
      <Form />
      <Content />
    </div>
  );
}
