"use client"
import { ProfileHero } from '@/components/profile'
import React from 'react'
import { selectUser, selectLoading } from "@/selectors/AuthSelectors";
import { SubscriptionEnum } from '@/enum';
import { useSelector } from 'react-redux';

export default function Page() {
  let [isOpen, setIsOpen] = React.useState(false);
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectLoading);
    const planType = SubscriptionEnum.BASIC; // Assuming a default planType

    return (
      <ProfileHero
        planType={planType}
        user={user}
        isLoading={isLoading}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    );
}
