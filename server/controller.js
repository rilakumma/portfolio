let messages = [{ name: "madi", email: "madi@gmail.com", message: "test 1 2 3" }];

module.exports = {
  getMessages: (req, res) => {
    res.send(messages);
  }
};
