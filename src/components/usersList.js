import { getUsers, deleteUser } from "../services/userServices";

import { useState, useEffect } from "react";
import CreateUser from "./createUser";
import { Card, makeStyles } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    display: "flex",
    gap: "10px",
  },
  userCard: {
    padding: 10,
    marginBottom: 16,
    display: "flex",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    marginTop: 16,
    padding: 20,
    display: "flex",
    gap: 20,
  },
  button: {
    marginTop: 16,
  },
});

function UserList() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const fetchUsers = () => {
    getUsers().then((response) => {
      setUsers(response?.data?.users);
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then((response) => {
      fetchUsers();
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={classes.section}>
      <CreateUser fetchUsers={fetchUsers}></CreateUser>
      <div>
        {users?.length > 0 ? (
          users.map((user) => {
            return (
              <Card className={classes.userCard}>
                <div>
                  {user?.name} - {user?.email} - {user?.password}
                </div>

                <div>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteUser(user?._id)}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </Card>
            );
          })
        ) : (
          <div>No Users in the system</div>
        )}
      </div>
    </div>
  );
}

export default UserList;
