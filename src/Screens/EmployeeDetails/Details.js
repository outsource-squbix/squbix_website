import { React, useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./base";
import { useParams } from "react-router";
import styled from "styled-components";
import ErrorException from "./ErrorException";
import Logo from "../../Assets/logo.png";
const db = getFirestore(app);

const Verify = () => {
  const { hash } = useParams();
  const [data, setData] = useState({});
  const [isDataExist, checkData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "EmployeeData", hash);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const fetchedData = { ...docSnap.data() };
        console.log("jhijg........", fetchedData);
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
                <h6 class="card-subtitle mb-2 text-muted">Employee Details</h6>
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
                    Employee Details
                  </h6>
                  <hr />
                  <p class="card-text">
                    Name: <b> {data.Name}</b>
                  </p>
                  <p class="card-text">
                    Designation: <b>{data.Designation}</b>
                  </p>

                  <p class="card-text">
                    Email: <b> {data.Email}</b>
                  </p>

                  <p class="card-text">
                    Employee ID: <b> {data.employee_id}</b>
                  </p>
                  <h5>
                    <b>Status:</b>
                    <span style={{ color: "green", fontWeight: "800" }}>
                      {" "}
                      Active
                    </span>
                  </h5>
                </Watermark>
              </div>
            </div>
          ) : (
            <ErrorException />
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
