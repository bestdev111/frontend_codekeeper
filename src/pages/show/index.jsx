import React from "react";
import { Box, Button, Typography, Skeleton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useShowItemQuery } from "../../modules/query";

const ShowPage = () => {
  const { nasaId } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useShowItemQuery(nasaId);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Box>
    );
  }
  if (error)
    return <Typography variant="body1">Something went wrong!</Typography>;
  const item = data.collection.items[0]?.data[0];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ fontSize: { xs: 28, md: 32, lg: 36 }, textAlign: "center" }}
      >
        {item?.title || "-"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box pt={3}>
          {data.collection.items[0]?.links.map((link) => (
            <Box
              key={link.href}
              component="img"
              src={link.href}
              alt={item?.title}
              sx={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "fill",
                flexShrink: 1,
              }}
            />
          ))}
        </Box>
        <Box sx={{ flex: 1, maxWidth: 600, textAlign: "left", p: 2 }}>
          <Typography fontSize={16} mb={2}>
            {item?.description}
          </Typography>
          <Typography color="text.secondary" mb={2}>
            Location: {item?.location || "-"}
          </Typography>
          <Typography color="text.secondary" mb={2}>
            Photographer: {item?.photographer || item?.secondary_creator || "-"}
          </Typography>
          <Typography color="text.secondary" mb={2}>
            Keywords: <i>{item?.keywords?.join(", ")}</i>
          </Typography>
          <Typography color="text.secondary" mb={2}>
            Date Created: {item?.date_created}
          </Typography>
          <Button
            onClick={handleBack}
            variant="contained"
            color="primary"
            size="large"
          >
            Back to Search Results
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ShowPage;
