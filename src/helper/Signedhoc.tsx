import { selectIsAuthenticated } from "@/selectors/AuthSelectors";
import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const Signedhoc = (Component: React.ComponentType<any>) => {
  const MemoizedComponent = React.memo(Component);

  return React.memo(
    function Hoc(props: any) {
    const Isauthenticated = useSelector(selectIsAuthenticated);

    if (!Isauthenticated) {
      redirect("/auth/signin");
    }

    return <MemoizedComponent {...props} />;
    });
  
};

export default Signedhoc;
