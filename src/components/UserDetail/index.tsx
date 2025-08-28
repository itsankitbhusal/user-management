import { API } from "@/resources";
import React from "react";
import UserDetailError from "./components/UserDetailError";
import BackButton from "./components/BackButton";
import UserInfo from "./components/UserInfo";
import CompanyInfo from "./components/CompanyInfo";

const getUserDetail = async (id: number) => {
  try {
    const data = await API.Users.getUser(id);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const UserDetail = async ({ id }: { id: number }) => {
  const { data, error } = await getUserDetail(id);

  if (error) {
    return <UserDetailError error={error} />;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center border-b pb-4 mb-6 border-b-gray-200">
        <div className=" w-[16rem]">
        <BackButton />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-4 border-b pb-2 border-b-gray-200">
            User Info
          </h2>
          <UserInfo
            username={data?.username}
            email={data?.email}
            phone={data?.phone}
            website={data?.website}
          />
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-4 border-b pb-2 border-b-gray-200">
            Company Info
          </h2>
          <CompanyInfo
            name={data?.company?.name}
            catchPhrase={data?.company?.catchPhrase}
            bs={data?.company?.bs}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
