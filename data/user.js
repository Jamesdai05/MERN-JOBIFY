import bcrypt from "bcrypt";


const users= [
  {
    name:"Admin",
    email:"admin@email.com",
    password:bcrypt.hashSync("abc123456",10),
    role:"admin",
    location:"Singapore",
  },

  {
    name:"John Green",
    email:"jonh_green@email.com",
    password:bcrypt.hashSync("abc123456",10),
    location:"China",
  },
]


export default users;