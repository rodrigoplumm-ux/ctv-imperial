import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { PlanId } from "./plans";

type CheckoutContextValue = {
  isOpen: boolean;
  planId: PlanId;
  openCheckout: (planId?: PlanId) => void;
  closeCheckout: () => void;
  setPlanId: (planId: PlanId) => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [planId, setPlanId] = useState<PlanId>("anual");

  const value = useMemo<CheckoutContextValue>(
    () => ({
      isOpen,
      planId,
      openCheckout: (next) => {
        if (next) setPlanId(next);
        setIsOpen(true);
      },
      closeCheckout: () => setIsOpen(false),
      setPlanId,
    }),
    [isOpen, planId],
  );

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return context;
}
