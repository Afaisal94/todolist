// import { signOut } from "next-auth/react";

export const Header = () => {
  return (
    <div className="header mt-5">
      <h1 className="text-center text-2xl">TODO LIST</h1>
      
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>
        Sign Out
      </button> */}
    </div>
  );
};
