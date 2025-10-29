// ✅ error.tsx
"use client"
import { Box, Button, Typography } from "@mui/material"

export default function Error1({ error, reset }: { error: unknown; reset: () => void }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h3" fontWeight={900}>
        Something went wrong !
      </Typography>
      <Typography variant="body1">{(error as Error)?.message || "Unknown error"}</Typography>
      <Button variant="myCustom" onClick={reset}>
        Try again
      </Button>
    </Box>
  )
}
