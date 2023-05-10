import React from "react";
import Swal from "sweetalert";

const Modal = ({
  modalclose,
  setmodalclose,
  register,
  handleSubmit,
  submit,
  reset,
  setIsUserIdtoEdit,
  isUserIdtoEdit,
  errors,
  setError,
}) => {
  const handleClickCloseModal = () => {
    setmodalclose((modalclose) => !modalclose);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
    });
    setIsUserIdtoEdit();
  };

  return (
    <section
      className={`fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-full bg-black/40 ${
        modalclose ? "opacity-100 visible z-30 bg-black/80 " : "opacity-0 invisible z-30"
      }`}
    >
      <form
        className="bg-white text-black p-5 rounded-lg max-w-[340px] w-full relative
        dark:bg-black/75 dark:text-white dark:border-gray-600 dark:border-4"
        onSubmit={handleSubmit(submit)}
      >
        <h3 className="text-2xl font-bold pb-4 text-left">
          {isUserIdtoEdit ? "Edit usuario" : "Nuevo usuario"}
        </h3>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold" htmlFor="first_name">
            Nombre:{" "}
            <span className="text-blue-500 font-bold text-base">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm p-2 placeholder:text-blue-400 placeholder:text-xs"
            id="first_name"
            type="text"
            placeholder="Este campo es obligatorio"
            {...register("first_name")}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold" htmlFor="last_name">
            Apellidos:{" "}
            <span className="text-blue-500 font-bold text-base">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm p-2  placeholder:text-blue-400 placeholder:text-xs"
            id="last_name"
            type="text"
            placeholder="Este campo es obligatorio"
            {...register("last_name")}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold" htmlFor="email">
            Correo:{" "}
            <span className="text-blue-500 font-bold text-base">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm p-2  placeholder:text-blue-400 placeholder:text-xs"
            id="email"
            type="gmail"
            placeholder="Este campo es obligatorio"
            {...register("email", {
              pattern: {
                value: /^(?=.*@).{1,25}$/,
                message: "Solo se permiten -20 caracteres y debe tener un arroba",
              },
            })}
          />
          <span className="text-blue-500 p-1 text-center ">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold " htmlFor="password">
            Contraseña:{" "}
            <span className="text-blue-500 font-bold text-base">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm p-2  placeholder:text-blue-400 placeholder:text-xs"
            id="password"
            type="password"
            placeholder="Este campo es obligatorio"
            {...register("password")}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold" htmlFor="birthday">
            Cumpleaños:{" "}
          </label>
          <input
            className="border-[1px] rounded-sm p-2  "
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label className="text-sm font-semibold" htmlFor="images_url">
            Url Images:{" "}
          </label>
          <input
            className="border-[1px] rounded-sm p-2  "
            id="images_url"
            type="text"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                message: "Url no valida",
              },
            })}
          />
          <span className="text-blue-500 p-2 max-w-[50%] ">
            {errors.image_url && errors.image_url.message}
          </span>
        </div>

        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute top-2 right-2 text-2xl cursor-pointer hover:text-lime-500 transition-colors "
        ></i>

        {isUserIdtoEdit ? (
          <button
            className="bg-blue-500 p-2 rounded-md text-white flex justify-center items-center mt-3 text-sm hover:bg-sky-950 transition-colors w-full"
            type="submit"
            onClick={() => Swal("Usuario editado correctamente", "", "success")}
          >
            Editar
          </button>
        ) : (
          <button
            className="bg-blue-500 p-2 rounded-md text-white flex justify-center items-center mt-3 text-sm hover:bg-sky-950 transition-colors w-full"
            type="submit"
          >
            Crear
          </button>
        )}
      </form>
    </section>
  );
};

export default Modal;
