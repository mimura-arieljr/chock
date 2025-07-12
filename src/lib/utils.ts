import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const classname = (...inputs: string[]) => {
    return twMerge(clsx(inputs));
}