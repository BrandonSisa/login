import React from "react";
import "./userCard.css";
import Swal from "sweetalert";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="section__userCard animated-border m-6 max-w-[300px] shadow-2xl shadow-slate-900 rounded-xl mb-7">
      <div className="w-full p-1 mt-10 rounded-full">
        {user.image_url ? (
          <img
            className="max-h-[100px] object-cover min-w-[100px] mx-auto rounded-full translate-y-[-5rem] border-4 border-blue-500 bg-white "
            src={user.image_url}
            alt="User img"
          />
        ) : (
          <div className="">
            <img
              className="max-h-[100px] object-cover max-w-[100px] mx-auto rounded-full translate-y-[-5rem] border-4 border-blue-500 bg-white sm:mx-aut0 "
              src="./images/noProfile.jpg"
              alt="User img"
            />
          </div>
        )}
      </div>
      <section className="section__info p-2 mt-[-2rem] shadow-md shadow-slate-900 rounded-xl min-h-[240px]">
        <div className="flex gap-3 mt-3 justify-center">
          <span> {user.first_name} {user.last_name}</span> 
        </div>
        <ul className="mt-3">
          <li className="flex gap-2 justify-center items-center break-all">
            <h4 className="break-normal">Correo: </h4>
            <span className="text-right "> {user.email} </span>
          </li>
          <li className="flex gap-4 mt-3 justify-center items-center">
            <i className="bx bx-gift"></i>
            <h4>Cumpleaños: </h4>
            <span> {user.birthday} </span>
            <span></span>
          </li>
        </ul>
        <hr className="mt-5 border-2 border-blue-500" />
        <div className="gap-3 mt-3 flex justify-end items-center shadow-inner shadow-slate-950 rounded-xl ">
          <button
            onClick={() => {
              Swal({
                title: "¿Quieres editar al usuario?",
                text: "Quieres editar al usuario seleccionado",
                icon: "warning",
                buttons: ["Cancelar", "Editar"],
                dangerMode: true,
              }).then((willEdit) => {
                if (willEdit) {
                  handleClickEdit(user)
                }else {
                  Swal("Cancelado", "El usuario no ha sido editado", "info");
                }
              })
            }}
            className="text-[2rem] text-blue-500 hover:text-blue-500 transition-duration-500"
          >
            <i className="bx bx-pencil"></i>
          </button>
          <button
            onClick={() => {
              Swal({
                title: "¿Estás seguro?",
                text: "deseas eliminar permanentemente al usuario seleccionado",
                icon: "warning",
                buttons: ["Cancelar", "Eliminar"],
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  deleteUser(user.id);
                  Swal(
                    "¡Eliminado",
                    "usuario ha sido eliminado",
                    "success"
                  );
                } else {
                  Swal("Cancelado", "El usuario no ha sido eliminado", "info");
                }
              });
            }}
            className="text-[2rem] text-blue-500 hover:text-blue-500 transition-duration-500"
          >
            <i className="bx bxs-trash"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default UserCard;
