import React from "react";
import { Box, TablePagination } from "@mui/material";

export const CustomPagination = ({
  total_counts,
  pageInfo,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
        "& .MuiTablePagination-root": {
          display: "flex",
          justifyContent: "center",
        },
        "@media (max-width: 445px)": {
          "& .MuiTablePagination-selectLabel": {
            display: "none",
          },
        },
      }}
    >
      <TablePagination
        component="div"
        count={total_counts}
        page={pageInfo.pageNum - 1}
        onPageChange={handleChangePage}
        rowsPerPage={pageInfo.pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
