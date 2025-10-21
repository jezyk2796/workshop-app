"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./globals.css";
import { Toast } from "@/components/Toast/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8000",
    },
    secondary: {
      main: "#303030",
    },
    background: {
      default: "#eaeaea",
    },
    common: {
      white: "#fff",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h1: {
      fontSize: "30px",
    },
  },
});

const metadata: Metadata = {
  title: "Workshop app",
  description: "Application to manage current and past repairs and customers",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Toast />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
