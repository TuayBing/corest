const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//login แล้วส่ง token กลับ มา
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);

    if (!user || !(await User.verifyPassword(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { user: { id: user.id, email: user.email, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// ฟังก์ชันใหม่สำหรับ Forgotten Password ส่งไปใน email
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const token = await User.generatePasswordResetToken(email);
    await User.sendPasswordResetEmail(email, token);
    res.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error(error);
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'No user found with that email address' });
    } else {
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  }
});

// ฟังก์ชันใหม่สำหรับ Reset Password
router.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await User.resetPassword(token, newPassword);
    res.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error(error);
    if (error.message === 'Password reset token is invalid or has expired') {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An error occurred while resetting the password' });
    }
  }
});

module.exports = router;