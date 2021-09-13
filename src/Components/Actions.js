import { useEffect, useState } from "react";
import alert from 'alert'

export const Actions = () => {
  let [users, setUsers] = useState([]);
  let [subscribers, setSubscribers] = useState([]);

    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);
  let [subscriberLength, setSubscriberLength] = useState(null);

  useEffect(() => {
    fetch("https://squbix.com/server/show.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers(data.users.reverse());
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Inserting a new user into the database.
  const insertUser = (newUser) => {
    fetch("https://squbix.com/server/insert.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if(!alert('Message Sent!'))
        {window.location.reload();}
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setUsers([
            {
              id: data.id,
              ...newUser,
            },
            ...users,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
// Inserting newsletter email and name into the database.

const insertSubscriber = (newSubscriber) => {
  fetch("https://squbix.com/server/newsletter_insert.php/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSubscriber),
  })
    .then((res) => {
      if(!alert('Successfully Subscribed!'))
      {window.location.reload();}
      return res.json();
      
    })
    .then((data) => {
 
      if (data.id) {
        setSubscribers([
          {
            id: data.id,
            ...newSubscriber,
          },
          ...subscribers,
        ]);
        setSubscriberLength(true);
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//   // Enabling the edit mode for a listed user.
  const editMode = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers(users);
  };

  // Cance the edit mode.
  const cancelEdit = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers(users);
  };

  // Updating a user.
  const updateUser = (userData) => {
    fetch("https://squbix.com/server/update.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          users = users.map((user) => {
            if (user.id === userData.id) {
              user.isEditing = false;
              user.user_name = userData.user_name;
              user.user_email = userData.user_email;
              return user;
            }
            return user;
          });
          setUsers(users);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   // Deleting a user.
  const deleteUser = (theID) => {
      // filter outing the user.
    let userDeleted = users.filter((user) => {
      return user.id !== theID;
    });
    fetch("http://localhost/php-react/delete-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers(userDeleted);
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users,
    editMode,
    cancelEdit,
    updateUser,
    insertUser,
    insertSubscriber,
    deleteUser,
    userLength,
  };
};