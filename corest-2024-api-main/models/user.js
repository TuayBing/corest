const db = require('../config/database');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

class User {
  // ฟังก์ชันสำหรับเพิ่มผู้ใช้ใหม่ในระบบ
  static async addUser({
    first_name, last_name, nick_name, gender, date_of_birth,
    idNationality, email, id_passport, address, address2,
    id_country, id_province, id_district, id_subdistrict,
    postal_code, mobile_no, password, profile_image_name, profile_image_url
  }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      `INSERT INTO users (
        first_name, last_name, nick_name, gender, date_of_birth,
        idNationality, email, id_passport, address, address2,
        id_country, id_province, id_district, id_subdistrict,
        postal_code, mobile_no, password, profile_image_name, profile_image_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name, last_name, nick_name, gender, date_of_birth,
        idNationality, email, id_passport, address, address2,
        id_country, id_province, id_district, id_subdistrict,
        postal_code, mobile_no, hashedPassword, profile_image_name, profile_image_url
      ]
    );

    return result.insertId;
  }

  // ฟังก์ชันสำหรับค้นหาผู้ใช้โดยใช้อีเมล
  static async findByEmail(email) {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  // ฟังก์ชันสำหรับตรวจสอบว่ารหัสผ่านที่ป้อนตรงกับรหัสผ่านที่แฮชแล้วหรือไม่
  static async verifyPassword(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }

  // ฟังก์ชันสำหรับเพิ่มผู้ดูแลระบบ (admin) คนแรก
  static async addFirstAdmin({
    first_name, last_name, email, password
  }) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      `INSERT INTO users (
        first_name, last_name, email, password, role
      ) VALUES (?, ?, ?, ?, 'admin')`,
      [first_name, last_name, email, hashedPassword]
    );

    return result.insertId;
  }

  // ฟังก์ชันสำหรับตรวจสอบว่าผู้ใช้คนแรกถูกเพิ่มหรือยัง
  static async isFirstUser() {
    const [rows] = await db.execute('SELECT COUNT(*) as count FROM users');
    return rows[0].count === 0;
  }

  // ฟังก์ชันสำหรับสร้าง token สำหรับการรีเซ็ตรหัสผ่าน
  static async generatePasswordResetToken(email) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const token = crypto.randomBytes(20).toString('hex');
    const expires = new Date(Date.now() + 3600000); 

    await db.execute(
      'UPDATE users SET reset_password_token = ?, reset_password_expires = ? WHERE id = ?',
      [token, expires, user.id]
    );

    return token;
  }

  // ฟังก์ชันสำหรับส่งอีเมลเพื่อรีเซ็ตรหัสผ่าน
  static async sendPasswordResetEmail(email, token) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const resetUrl = `http://localhost:5173/forgottenpassword${token}`;

    const mailOptions = {
      from: 'yourapp@example.com',
      to: email,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             ${resetUrl}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);
  }

  // ฟังก์ชันสำหรับรีเซ็ตรหัสผ่านด้วย token ที่ถูกต้อง
  static async resetPassword(token, newPassword) {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expires > ?',
      [token, new Date()]
    );

    if (rows.length === 0) {
      throw new Error('Password reset token is invalid or has expired');
    }

    const user = rows[0];
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.execute(
      'UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id = ?',
      [hashedPassword, user.id]
    );
  }
}

module.exports = User;
