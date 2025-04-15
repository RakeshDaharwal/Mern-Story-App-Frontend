import { Suspense } from "react";

const SuspenseLoader = (Component, Fallback) => {
  return (
    <Suspense fallback={Fallback}>
      {Component}
    </Suspense>
  );
};

export default SuspenseLoader;