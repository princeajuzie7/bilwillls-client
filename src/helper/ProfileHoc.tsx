import React from "react";
import { useSelector } from "react-redux";
import { selectUser, selectLoading } from "@/selectors/AuthSelectors";
import { SubscriptionEnum } from "@/enum";
export interface InjectedProps {
  user: ReturnType<typeof selectUser>;
  isLoading: ReturnType<typeof selectLoading>;
  planType: SubscriptionEnum;
}

// Higher-order component
const ProfileHoc = <P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC: React.FC<Omit<P, keyof InjectedProps>> = (props) => {
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectLoading);

    return (
      <WrappedComponent {...(props as P)} user={user} isLoading={isLoading} />
    );
  };

  return HOC;
};

export default ProfileHoc;
