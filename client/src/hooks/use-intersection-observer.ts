import { useCallback, useRef } from "react";

export function useIntersectionObserver() {
  const observers = useRef<IntersectionObserver[]>([]);
  
  // Clean up function to disconnect all observers
  const cleanup = useCallback(() => {
    observers.current.forEach(observer => {
      observer.disconnect();
    });
    observers.current = [];
  }, []);
  
  // Observe multiple elements with same callback
  const observeElements = useCallback((selector: string, threshold = 0.1) => {
    // Clean up previous observers
    cleanup();
    
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold });
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    observers.current.push(observer);
    
    return () => observer.disconnect();
  }, [cleanup]);
  
  // Observe a single element with a custom callback
  const observeElement = useCallback((element: Element | null, callback: () => void, threshold = 0.1) => {
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    }, { threshold });
    
    observer.observe(element);
    observers.current.push(observer);
    
    return () => observer.disconnect();
  }, []);
  
  return { observeElements, observeElement, cleanup };
}
