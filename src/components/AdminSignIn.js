import ItemCountCart from "./itemCountCart";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "./CartContext";
import swal from "sweetalert";
import {doc, getDoc} from "firebase/firestore";
import {db, firestoreFetch} from "../utils/firebaseConfig";
import {AdminContext} from "./AdminContext";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function AdminSignIn() {

  const adminContext = useContext(AdminContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [form, setForm] = useState(false)
  const [adminData, setAdminData] = useState("")
  const navigate = useNavigate();

  const firestoreAdminFetch = async (admin) => {
    const docRef = doc(db, "users", admin);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {id: docSnap.id, ...docSnap.data()};
    } else {
      console.log("No such user!");
    }
  }

  useEffect(() => {
    firestoreAdminFetch('admin')
      .then(result => setAdminData(result))
  }, [])


  useEffect(() => {
    setForm(false)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user.email === adminData.email) {
          adminContext.adminOnline();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, [form])

  useEffect(() => {
    if(adminContext.admin) {
      swal('¡Sesión como Admin iniciada correctamente!');
      navigate("/");
    }
  }, [adminContext.admin])

  function sendForm(event) {
    event.preventDefault();
    setForm(true)
    }

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full justify-around items-center mt-16">
        {/* Formulario de Contacto */}
        <div className="mt-10 sm:mt-0 w-4/5 lg:w-2/5">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-3 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 text-start">
                          Email
                        </label>
                        <input
                          onChange={(evento) => setEmail(evento.target.value)}
                          placeholder="Introduzca aquí el email"
                          required
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-start">
                          Contraseña
                        </label>
                        <input
                          onChange={(evento) => setPass(evento.target.value)}
                          placeholder="Introduzca aquí la contraseña"
                          required
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                    <button
                      onClick={sendForm}
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}