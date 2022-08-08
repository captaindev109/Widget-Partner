import ApplicationThemeProvider from "@/providers/ApplicationThemeProvider";
import { DynamicFormProvider } from "@/providers/DynamicFormProvider";
import { GlobalStateProvider } from "@/providers/GlobalStateProvider";
import React from "react";
import defaultTheme from "../src/theme/theme";

export const decorators = [
  (story) => (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <DynamicFormProvider>
          <div id="app-root">
            {story()}
          </div>
          <div id="modal-portal"></div>
        </DynamicFormProvider>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  ),
];