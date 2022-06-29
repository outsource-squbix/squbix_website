import { React, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./base";
import { useParams } from "react-router";
import styled from "styled-components";
import Error from "./Error";
import Logo from "../../Assets/logo.png";
const db = getFirestore(app);

const Verify = () => {
  const { hash } = useParams();
  const [data, setData] = useState({});
  const [isDataExist, checkData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
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
    <>
      <div className="container">
        <Header className="text-center">
          {isLoading ? (
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">
                  Certificate Authenticator
                </h6>
                <hr />
                <p class="card-text" style={{ color: "blue" }}>
                  Loading .....
                </p>
              </div>
            </div>
          ) : isDataExist ? (
            <div class="card">
              <div class="card-body">
                <Watermark>
                  <img src={Logo} alt="" />
                  <h6 class="card-subtitle mb-2 text-muted">
                    Certificate Authenticator
                  </h6>
                  <hr />
                  <p class="card-text">
                    Name: <b> {data.candidate_name}</b>
                  </p>
                  <p class="card-text">
                    Certificate Number: <b>{data.certificate_number}</b>
                  </p>

                  <p class="card-text">
                    Issuer: <b>{data.issuer}</b>
                  </p>

                  <p class="card-text">
                    Issue Date: <b> {data["issue_date"]}</b>
                  </p>
                  <p class="card-text">
                    {data.role ? "Role: " : null}
                    <b> {data.role}</b>
                  </p>
                  <p class="card-text">
                    Certificate Type: <b> {data.type}</b>
                  </p>
                  <h5>
                    <b>Status:</b>
                    <span style={{ color: "green", fontWeight: "800" }}>
                      {" "}
                      Issued
                    </span>
                  </h5>
                </Watermark>
              </div>
            </div>
          ) : (
            <Error />
          )}
        </Header>
      </div>
    </>
  );
};

export default Verify;
const Header = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  position: relative;
  width: 50%;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Watermark = styled.div`
  > img {
    position: absolute;
    height: 250px;
    z-index: -10;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    opacity: 0.3;
  }
`;
