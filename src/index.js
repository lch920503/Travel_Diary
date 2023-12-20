import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./queryClient";
import { RecoilRoot } from "recoil";

const queryClient = getQueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
);
