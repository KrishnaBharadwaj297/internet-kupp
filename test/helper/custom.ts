export function highlightElement(selector: ChainablePromiseElement, color: string = "red", duration: number = 2000) {
    const element = $(selector);
  
    if (element) {
      highlightElementTemporarily(element, color, duration);
    }
  }
  
  function highlightElementTemporarily(element: ChainablePromiseElement, color: string, duration: number) {
    // Use the 'execute' function to inject JavaScript that modifies the element's style
    element.execute(
      (el: Element, color: string) => {
        (el as HTMLElement).style.transition = "background-color 1s ease";
        (el as HTMLElement).style.backgroundColor = color;
      },
      color
    );
  
    // Reset the background color after a specified duration
    setTimeout(() => {
      element.execute(
        (el: Element) => {
          (el as HTMLElement).style.backgroundColor = "";
        }
      );
    }, duration);
  }

  