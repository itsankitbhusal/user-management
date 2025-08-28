"use client";
import { useGetUsers } from '@/hooks/useUsers';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import { useViewMode } from '@/hooks/useViewMode';
import UsersLoading from './components/UsersLoading';
import UsersError from './components/UsersError';
import { useState, useMemo, useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';

const Users = () => {
    const { data, isLoading, error } = useGetUsers();
    const { viewMode, setMode } = useViewMode();
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const debouncedTimer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 500);

        return () => clearTimeout(debouncedTimer);
    }, [searchQuery]);

    const handleViewModeChange = (mode: "card" | "table") => {
        setMode(mode);
    };

    const filteredUsers = useMemo(
        () =>
            data?.filter(
                (user) =>
                    user.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
            ),
        [data, debouncedQuery]
    );

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
                                {filteredUsers?.length ? (
                                    filteredUsers.map((user) => (
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
                                <UserTable users={filteredUsers ?? []} />
                                {!filteredUsers?.length && (
                                    <p className="text-gray-500 text-center mt-4">
                                        No users found.
                                    </p>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Users;
