// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// import { IStaticMethods } from "preline/preline";
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

// export  function PrelineScript() {
//   const path = usePathname();

//   useEffect(() => {
//     const loadPreline = async () => {
//       await import("preline/preline");
//       if (
//         typeof window !== "undefined" &&
//         typeof document
//           .getElementById('"data-hs-tab"')
//           ?.getAttribute('"data-hs-tab"') !== "undefined"
//       ) {
//         window.HSStaticMethods.autoInit();
//       }
//     };

//     loadPreline();
//   }, [path]);

//   return null;
// }

