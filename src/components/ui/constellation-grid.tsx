import React from "react";
export interface ConstellationGridProps {
  className?: string;
  children?: React.ReactNode;
  overlayTitle?: boolean;
}
export default function ConstellationGrid({
  children,
}: ConstellationGridProps) {
  return <>{children}</>;
}
