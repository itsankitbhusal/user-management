"use client";
import { useGetUsers } from '@/hooks/useUsers';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import { useViewMode } from '@/hooks/useViewMode';
import UsersLoading from './components/UsersLoading';
import UsersError from './components/UsersError';

const Users = () => {
    const { data, isLoading, error } = useGetUsers();
    const { viewMode, setMode } = useViewMode();

    const handleViewModeChange = (mode: "card" | "table") => {
        setMode(mode);
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <p className="font-bold text-xl">Users List</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => handleViewModeChange("card")}
                        className={`px-3 py-1 rounded-md cursor-pointer font-medium ${viewMode === "card" ? "bg-gray-200" : "bg-white border border-gray-300"}`}
                    >
                        Card
                    </button>
                    <button
                        onClick={() => handleViewModeChange("table")}
                        className={`px-3 py-1 rounded-md cursor-pointer font-medium ${viewMode === "table" ? "bg-gray-200" : "bg-white border border-gray-300"}`}
                    >
                        Table
                    </button>
                </div>
            </div>

            <div className="w-full">
                {isLoading && (
                    <UsersLoading />
                )}

                {error && (
                    <UsersError error={error} />
                )}

                {!isLoading && !error && (
                    <>
                        {viewMode === "card" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data?.map((user) => (
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
                                ))}
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <UserTable users={data ?? []} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Users;
