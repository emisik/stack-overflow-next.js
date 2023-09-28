import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full content-center items-center justify-center">
      <div>{children}</div>
    </main>
  );
};

export default layout;
