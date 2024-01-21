import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
   const [matches, setMatches] = useState(window.matchMedia(query).matches);

   useEffect(() => {
      const mediaQuery = window.matchMedia(query);

      const handleChange = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => {
         setMatches(event.matches);
      };

      mediaQuery.addEventListener("change", handleChange);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
         mediaQuery.removeEventListener("change", handleChange);
      };
   }, [query]);

   return matches;
};
