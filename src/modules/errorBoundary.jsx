import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Box>
    <Typography>Something went wrong!</Typography>
    <Button onClick={resetErrorBoundary} variant="contained">
      Try Again
    </Button>
  </Box>
);

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
