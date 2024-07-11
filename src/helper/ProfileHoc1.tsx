// import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser, selectLoading } from "@/selectors/AuthSelectors";
// import { SubscriptionEnum } from "@/enum";

// interface ProfileHeroProps {
//   planType: SubscriptionEnum;
// }

// export interface InjectedProps {
//   user: ReturnType<typeof selectUser>;
//   isLoading: ReturnType<typeof selectLoading>;
// }


// function withUserState<P extends ProfileHeroProps & InjectedProps>(
//   WrappedComponent: React.ComponentType<P>
// ) {
//   return function ComponentWithUserState(props: P) {
//     const user = useSelector(selectUser);
//     const isLoading = useSelector(selectLoading);
//     const mergedProps = {
//       user,
//       isLoading,
//       ...props,
//     };

//     return <WrappedComponent {...mergedProps} />;
//   };
// }

// export default withUserState;
