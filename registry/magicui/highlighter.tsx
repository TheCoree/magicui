"use client";

<<<<<<< HEAD
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 505398c (Add isView prop to control annotation animation start)
import { annotate } from "rough-notation";
import type React from "react";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
<<<<<<< HEAD
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView;

  useEffect(() => {
    if (!shouldShow) return;
=======
  const [isVisible, setIsVisible] = useState(!isView);

  useEffect(() => {
    if (!isView) return;
>>>>>>> 505398c (Add isView prop to control annotation animation start)

    const element = elementRef.current;
    if (!element) return;

<<<<<<< HEAD
=======
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isView]);

  useEffect(() => {
    if (!isVisible) return;

    const element = elementRef.current;
    if (!element) return;

>>>>>>> 505398c (Add isView prop to control annotation animation start)
    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });

    annotation.show();

    return () => {
      if (element) {
        annotate(element, { type: action }).remove();
      }
    };
  }, [
<<<<<<< HEAD
    shouldShow,
=======
    isVisible,
>>>>>>> 505398c (Add isView prop to control annotation animation start)
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
