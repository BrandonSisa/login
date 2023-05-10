import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users, handleClickEdit, deleteUser }) => {
  return (
    <section className=" flex flex-wrap justify-center p-2 m-3 ">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickEdit={handleClickEdit}
        />
      ))}
    </section>
  );
};

export default UsersList;
