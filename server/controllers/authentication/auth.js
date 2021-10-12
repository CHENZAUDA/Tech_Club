const authRole = (Role) => {
    return (req, res, next) => {
      if (req.body.role !== Role) {
        res
          .status(403)
          .json({
            success: false,
            message: "you don't have access",
          });
      } else {
        next();
      }
    };
  };
  module.exports = {authRole};