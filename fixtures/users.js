const users = {
  user1: {
    username: "tom-smith-coder",
    email: "tom-smith-coder@tmpbox.net",
    password: "tom-smith-coder@tmpbox.net",
    useForLogin: true,
  },
  user2: {
    username: "tom-smith-cod",
    email: "tom-smith-cod@tmpbox.net",
    password: "tom-smith-cod@tmpbox.net",
    useForLogin: false,
  },
  emptyEmail: {
    username: "tom-smith-cod",
    email: "",
    password: "tom-smith-cod@tmpbox.net",
    useForLogin: false,
  },
  emptyPassword: {
    username: "tom-smith-cod",
    email: "tom-smith-cod@tmpbox.net",
    password: "",
    useForLogin: false,
  },
};

module.exports = users;
