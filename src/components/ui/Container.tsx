"use client";

import React from "react";

export default function Container({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginRight: "auto",
        marginLeft: "auto",
        paddingRight: 24,
        paddingLeft: 24,
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
