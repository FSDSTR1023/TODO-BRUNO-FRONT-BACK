import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const register = async (req, res) => {
  const { name, surname, username, email, password } = req.body;
  console.log(req.body, 'req.body from register');
  try {
    const userFound = await User.findOne({ email });
    console.log(userFound, 'userFound');
    if (userFound) return res.status(400).json(['Email already exists']);
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      username,
      email,
      password: passwordHash,
    });
    console.log(newUser, 'newUser');

    const userSaved = await newUser.save();
    console.log(userSaved, 'userSaved');
    const token = await createAccesToken({ id: userSaved._id });

    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      avatar: userSaved.avatar,
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Register user error',
      error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Contraseña incorrecta' });

    const token = await createAccesToken({ id: userFound._id });
    console.log(token, 'token');

    res.cookie('token', token);
    res.json({
      name: userFound.name,
      surname: userFound.surname,
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      avatar: userFound.avatar,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      message: 'Usuario registrado correctamente',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error,
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Usuario deslogueado correctamente' });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: 'Usuario no encontrado' });
  return res.json({
    name: userFound.name,
    surname: userFound.surname,
    avatar: userFound.avatar,
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: 'Unauthoriced' });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthoriced' });

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      avatar: userFound.avatar,
      name: userFound.name,
      surname: userFound.surname,
    });
  });
};
export const profileUpdate = async (req, res) => {
  const { username, email, avatar } = req.body;
  console.log(req.body, 'req.body frome profileUpdate');
  try {
    const userUpdated = await User.findByIdAndUpdate(
      req.user.id,
      {
        username,
        email,
        avatar,
      },
      { new: true }
    );
    if (!userUpdated)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    res.json({
      id: userUpdated._id,
      username: userUpdated.username,
      email: userUpdated.email,
      avatar: userUpdated.avatar,
      name: userUpdated.name,
      surname: userUpdated.surname,
      message: 'Usuario actualizado correctamente',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el usuario',
      error,
    });
  }
};
