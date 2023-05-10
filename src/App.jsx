import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";

function App() {

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    
    if(isDark){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    
  },[isDark])

  const BASE_URL = "https://users-crud.academlo.tech";

  const [users, setusers] = useState([]);
  const [isUserIdtoEdit, setIsUserIdtoEdit] = useState();
  const [modalclose, setmodalclose] = useState(false);

  const handleClick = () => {
    setmodalclose((modalclose) => !modalclose);
  };

  // Uses Form
  const { register, handleSubmit, reset , setError, formState: { errors } } = useForm();

  const DEFAULT_DALUES = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    image_url: "",
  };

  // reenderiado
  useEffect(() => {
    getAllUsers();
  }, []);

  // **************************** //
  const submit = (data) => {

    if(data.birthday === ""){
      data.birthday = null
    }

    if(data.image_url  === ""){
      data.image_url = null
    }

    if (isUserIdtoEdit) {
      editUser(data);
    } else {
      createUser(data);
    }
  };

   // Para crear se Usa == POST
  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL,data)
      .then(() => {
        getAllUsers();
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        })
        setmodalclose(!modalclose);
      })
      .catch((err) => console.log(err));
  };

  // **************************** //
 // Para crear se Usa == DELETE
  const deleteUser = (id) => {
    const URL = `${BASE_URL}/users/${id}/`;

    axios
      .delete(URL)
      .then(() => {
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  // Funtion para editar la informacion
  const handleClickEdit = (data) => {
    setmodalclose((modalclose) => !modalclose);
    reset(data);
    setIsUserIdtoEdit(data.id);
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdtoEdit}/`;

    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_DALUES);
      })
      .catch((err) => console.log(err));
  };

  //* Parte que se obtiene la API
  const getAllUsers = () => {
    const URL = `${BASE_URL}/users/`;

    axios
      .get(URL)
      .then((res) => setusers(res.data))
      .catch((err) => console.log(err));

    return () => {
      console.log("Lil Dree");
    };
  };

  // ? Parte del renderizado
  return (
    <main className="App min-h-screen text-black bg-gray-400/80 dark:bg-gray-900 dark:text-white">
      <Header setmodalclose={setmodalclose} setIsDark={setIsDark} isDark={isDark} />
      <Modal
        modalclose={modalclose}
        setmodalclose={setmodalclose}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        setIsUserIdtoEdit={setIsUserIdtoEdit}
        isUserIdtoEdit={isUserIdtoEdit}
        errors={errors}
        reset={reset}
        setError={setError}

      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
        reset={reset}
      />
    </main>
  );
}

export default App;
