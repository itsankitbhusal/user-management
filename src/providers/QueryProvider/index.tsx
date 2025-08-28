"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
    children: React.ReactNode;
}

const AppQueryProvider = ({ children }: IProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 1,
            },
        },
    });
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AppQueryProvider;