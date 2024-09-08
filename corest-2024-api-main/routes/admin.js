const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middleware/auth');

// Add User คนแรก owner
router.post('/add-first-admin', async (req, res) => {
    try {
      const isFirstUser = await User.isFirstUser();
      if (!isFirstUser) {
        return res.status(403).json({ message: 'Admin already exists' });
      }
  
      const { first_name, last_name, email, password } = req.body;
  
      const userId = await User.addFirstAdmin({
        first_name, last_name, email, password
      });
  
      res.status(201).json({ message: 'First admin added successfully', userId });
    } catch (error) {
      res.status(500).json({ message: 'Error adding first admin', error: error.message });
    }
  });


 // Add User   
router.post('/add-user', authMiddleware, async (req, res) => {
  try {
    // ตรวจสอบว่าผู้ใช้ที่ล็อกอินเป็น admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    const {
      first_name, last_name, nick_name, gender, date_of_birth,
      idNationality, email, id_passport, address, address2,
      id_country, id_province, id_district, id_subdistrict,
      postal_code, mobile_no, password, profile_image_name, profile_image_url
    } = req.body;

    const userId = await User.addUser({
      first_name, last_name, nick_name, gender, date_of_birth,
      idNationality, email, id_passport, address, address2,
      id_country, id_province, id_district, id_subdistrict,
      postal_code, mobile_no, password, profile_image_name, profile_image_url
    });

    res.status(201).json({ message: 'User added successfully', userId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
});

module.exports = router;