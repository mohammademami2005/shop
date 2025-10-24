'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import ThemeRegistry from '../ThemeRegistry'

export default function Providers({ children }: { children: React.ReactNode }) {
  // برای جلوگیری از ساخت چندباره‌ی QueryClient در هر رندر:
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
            <ReactQueryDevtools initialIsOpen={false}  />

    </QueryClientProvider>
  )
}
