"use client";

import React from "react";
import { useTransition } from "./TransitionProvider";

export default function TransitionLink({ href, children, className, style, onClick, ...props }) {
  const { navigate } = useTransition();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    // Only intercept standard clicks (left click, no modifier keys)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
