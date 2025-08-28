"use client";
import { useGetUsers } from '@/hooks/useUsers';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import { useViewMode } from '@/hooks/useViewMode';
import UsersLoading from './components/UsersLoading';
import UsersError from './components/UsersError';
import { useState, useMemo, useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';
import { Pagination, PaginationProps } from 'semantic-ui-react';
import { useRouter, useSearchParams } from 'next/navigation';

const Users = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialPage = Number(searchParams.get("page")) || 1;
    const { viewMode, setMode } = useViewMode();
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState<number>(initialPage);
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const { data, isLoading, error } = useGetUsers({
        pageParams: {
            page: page,
            limit: 5,
            q: debouncedQuery
        }
    });

    useEffect(() => {
        const debouncedTimer = setTimeout(() => {
            setPage(1);
            // set url
            const url = new URL(window.location.href);
            url.searchParams.delete("page");
            url.searchParams.set("q", searchQuery);
            router.push(url.toString());
            setDebouncedQuery(searchQuery);
        }, 500);

        return () => clearTimeout(debouncedTimer);
    }, [searchQuery]);

    const handleViewModeChange = (mode: "card" | "table") => {
        setMode(mode);
    };

    const handlePageChange = (_, data: PaginationProps) => {
        if (data?.activePage) {
            setPage(Number(data?.activePage))
            // set url
            const url = new URL(window.location.href);
            url.searchParams.set("page", data?.activePage.toString());
            router.push(url.toString());
        }
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <p className="font-bold text-xl">Users List</p>

                {/* Search Bar */}
                <div className="flex justify-start w-full items-center gap-2 border border-gray-200 rounded-md p-2 max-w-[600px]">
                    <LuSearch className="text-gray-400" />
                    <input
                        className="w-full focus:outline-none"
                        placeholder="Search by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* View Mode Toggle */}
                <div className="flex gap-2">
                    <button
                        onClick={() => handleViewModeChange("card")}
                        className={`px-3 py-1 rounded-md cursor-pointer font-medium ${viewMode === "card"
                            ? "bg-gray-200"
                            : "bg-white border border-gray-300"
                            }`}
                    >
                        Card
                    </button>
                    <button
                        onClick={() => handleViewModeChange("table")}
                        className={`px-3 py-1 rounded-md cursor-pointer font-medium ${viewMode === "table"
                            ? "bg-gray-200"
                            : "bg-white border border-gray-300"
                            }`}
                    >
                        Table
                    </button>
                </div>
            </div>

            <div className="w-full">
                {isLoading && <UsersLoading />}
                {error && <UsersError error={error} />}

                {!isLoading && !error && (
                    <>
                        {viewMode === "card" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data?.length ? (
                                    data.map((user) => (
                                        <UserCard
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            username={user.username}
                                            email={user.email}
                                            address={user.address}
                                            phone={user.phone}
                                            website={user.website}
                                            company={user.company}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-500 col-span-full text-center">
                                        No users found.
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <UserTable users={data ?? []} />
                                {!data?.length && (
                                    <p className="text-gray-500 text-center mt-4">
                                        No users found.
                                    </p>
                                )}
                            </div>
                        )}
                    </>
                )}
                <div className="mt-16 w-full flex justify-center">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={initialPage}
                        activePage={page}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={2}
                        onPageChange={handlePageChange}

                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
