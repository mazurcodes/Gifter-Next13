'use client'
import { useEffect, RefObject } from 'react';

//************************************ Hooks ********************************

/** Hook that will look at provided HTML Element and wait for user to click away from it.
 * It can be used for elements like the menus that when clicked outside will trigger close event.
 * 
 * @param ref Ref to the HTML element that when loose focus will trigger function
 * @param triggerFn Function that will be called when the ref is losing focus
 */
export function useTriggerOnBlur(
    ref: RefObject<HTMLElement>,
    triggerFn: () => void
  ): void {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        triggerFn();
      }
    };
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    });
  }