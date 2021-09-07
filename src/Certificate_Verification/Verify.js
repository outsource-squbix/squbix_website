import { React, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./base";
import { useParams } from "react-router";
import Error from "./Error";
import "./Verify.css";
const db = getFirestore(app);

const Verify = () => {
  const { hash } = useParams();
  const [data, setData] = useState({});
  const [isDataExist, checkData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hash", hash);
    const getData = async () => {
      const docRef = doc(db, "Certificates", hash);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const fetchedData = { ...docSnap.data() };
        console.log(fetchedData);

        setData(fetchedData);
        checkData(true);
      } else {
        console.log("No such document present");
      }
      setLoading(false);
    };

    getData();
  }, [hash]);

  return (
    <div>
      {isLoading ? (
        <div>
          <h1
            class="display-2"
            style={{ textAlign: "center", marginTop: "50vh" }}
          >
            Loading...
          </h1>
        </div>
      ) : isDataExist ? (
        <div className="display-details-div">
          <h1 class="display-6">Candidate Name: {data.Name}</h1>
          <h1 class="display-6">Issuer: {data.Issuer}</h1>
          <h1 class="display-6">Issue Date: {data["date of issue"]}</h1>
          <h1 class="display-6">Role: {data.Role}</h1>
          <h1 class="display-6">
            Status: <span style={{ color: "green" }}>Issued</span>
          </h1>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Verify;
