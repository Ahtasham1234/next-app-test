import axios from "axios";
import { clientsActions } from "./clientsSlice";
import Env from "@/Env";

// export const fetchAllClients = () => {
//   return async (dispatch) => {
//     axios
//       .get(`${Env.REACT_APP_BACKEND_ENV}/api/client/getAllClient`)
//       .then((res) => {
//         console.log("GetAllData===>>>", res.data.findClientAll);
//         // setGetDataAllClient(res.data.findClientAll);
//         // setRows(res.data.findClientAll);
//         dispatch(clientsActions.getAllClients(res.data.findClientAll));
//       })
//       .catch((err) => console.log("Erroreee===>>", err));
//   };
// };
export const fetchAllClients = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `${Env.REACT_APP_BACKEND_ENV}/api/client/getAllClient`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.res.data.findClientAll;

      return data;
    };
    const clientData = await fetchData();
    console.log("clientData", clientData);
    // try {
    //   const clientData = await fetchData();

    //   dispatch(
    //     clientsActions.getAllClients({
    //       getAllClients: clientData || [],
    //     })
    //   );
    // } catch (error) {
    //   console.log(error);

    // }
  };
};
