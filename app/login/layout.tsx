import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-screen bg-gradient-radial from-second-green  to-zinc-800">{children}</div>;
}
