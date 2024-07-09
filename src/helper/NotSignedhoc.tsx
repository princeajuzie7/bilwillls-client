import { selectIsAuthenticated } from "@/selectors/AuthSelectors";
import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function NotSignedhoc(Component: React.ComponentType<any>) {
  const NotSignedinComp = React.memo(Component);
  return React.memo(function Hoc(props: any) {
    const Isauthenticated = useSelector(selectIsAuthenticated);

    if (Isauthenticated) {
      redirect("/app/home");
    }

    return <NotSignedinComp {...props} />;
  });
}
