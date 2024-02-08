import React from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Skeleton,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "../../modules/validation";
import SearchResultItem from "./components/searchResultItem";
import { CustomPagination } from "./components/customPagination";

const SearchPage = () => {
  const {
    formik,
    updatePagination,
    pageInfo,
    searchResults = [],
    isLoading,
    isError,
  } = useForm();
  const handleChangePage = (_, newPage) => {
    updatePagination(pageInfo.pageSize, newPage + 1);
  };
  const handleChangeRowsPerPage = (event) => {
    updatePagination(parseInt(event.target.value, 10), 1);
  };
  const total_counts = searchResults?.collection?.metadata.total_hits || 0;
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            placeholder="What do you want?"
            variant="outlined"
            className="QueryInput"
            fullWidth
            {...formik.getFieldProps("query")}
            error={formik.touched.query && Boolean(formik.errors.query)}
            helperText={formik.touched.query && formik.errors.query}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Year Start"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("yearStart")}
              error={
                formik.touched.yearStart && Boolean(formik.errors.yearStart)
              }
              helperText={formik.touched.yearStart && formik.errors.yearStart}
            />
            <TextField
              label="Year End"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("yearEnd")}
              error={formik.touched.yearEnd && Boolean(formik.errors.yearEnd)}
              helperText={formik.touched.yearEnd && formik.errors.yearEnd}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              sx={{ flexShrink: 0 }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </form>

      {isError && (
        <Typography>Something went wrong! Try agian later</Typography>
      )}
      {!isLoading && total_counts > 0 && (
        <CustomPagination
          total_counts={total_counts}
          pageInfo={pageInfo}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card>
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", height: 300 }}
                  />
                  <Box p={1}>
                    <Skeleton variant="text" height={40} width={200} mt={1} />
                    <Skeleton variant="text" height={20} width={300} mt={1} />
                  </Box>
                </Card>
              </Grid>
            ))
          : !!searchResults.length !== 0 &&
            searchResults.collection?.items.map((item) => (
              <SearchResultItem key={item.data[0].nasa_id} item={item} />
            ))}
      </Grid>
      {!isLoading && total_counts > 6 && (
        <CustomPagination
          total_counts={total_counts}
          pageInfo={pageInfo}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  );
};

export default SearchPage;
