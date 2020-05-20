const users = [];

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //valide statement
  if (!username || !room) {
    return {
      error: "Username and room are required.",
    };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "Username already taken.",
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//remove user
const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//getUser
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//getUsersInRoom
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};
addUser({
  id: 123456,
  username: "saksham",
  room: "room1",
});

addUser({
  id: 1456,
  username: "saksham1",
  room: "room1",
});

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
