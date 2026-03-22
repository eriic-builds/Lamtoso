// cn = "class names" — a utility function used everywhere in shadcn/ui
//
// It does two things:
// 1. clsx: merges multiple class name strings/objects together
// 2. tailwind-merge: resolves conflicts when Tailwind classes overlap
//    e.g. "p-4 p-6" -> "p-6" (keeps the last one)
//
// Usage: cn("text-red-500", isActive && "font-bold")

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
