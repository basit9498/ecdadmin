import React from "react";
import Aside from "./aside";
import Header from "./header";

const Index = (props) => {
  return (
    <>
      <Header />
      <section className="flex">
        <aside className="w-[150px] h-screen bg-primary sticky top-0 pb-10 pt-14 px-6">
          <Aside />
        </aside>
        <div className="flex-1 px-10 py-14">{props.children}</div>
      </section>
    </>
  );
};

export default Index;
