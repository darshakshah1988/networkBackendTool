//Creating Token and Storing in Cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

    //options for cookie
    const options = {
      httpOnly: true,
      sameSite:'None',
      secure:true,
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      )
    };
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;
  