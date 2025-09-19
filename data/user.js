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
  {
    name: "Alice Demo",
    email: "alice.demo@test.com",
    password: bcrypt.hashSync("demoPass123",10),
    location: "Singapore"
  }
]


export default users;