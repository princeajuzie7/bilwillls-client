import { selectIsAuthenticated } from "@/selectors/AuthSelectors";
import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function Signedhoc(Component: React.ComponentType<any>) {
  return function Hoc(props: any) {
    const Isauthenticated = useSelector(selectIsAuthenticated);

    if (!Isauthenticated) {
      redirect("/auth/signin");
    }
 
    return <Component {...props} />;
  };
}
