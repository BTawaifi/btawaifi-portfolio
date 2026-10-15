export function throttle(func: Function, limit: number, args: any) {
    let inThrottle = false;
    return () => {
      if (!inThrottle) {
        func(args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit)
      }
    }
  }
  
export function debounce(func: Function, delay: number, args: any) {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(args)
      }, delay);
    }
  }