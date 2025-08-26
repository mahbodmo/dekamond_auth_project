import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const querystring = require("querystring");
export const getQueryParams = (obj: object) => querystring.stringify(obj);

export function urlWithQueryParams(url: string, object: any = {}) {
  if (!url) return "";

  const params = getQueryParams(object);

  return `${url}?${params}`;
}
