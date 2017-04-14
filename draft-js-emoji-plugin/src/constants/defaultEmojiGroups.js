import React from 'react';
import {
  FaSmileO,
  FaPaw,
  FaCutlery,
  FaFutbolO,
  FaPlane,
  FaBell,
  FaHeart,
  FaFlag,
} from 'react-icons/lib/fa';

const defaultEmojiGroups = [{
  title: 'People',
  icon: (
    <FaSmileO style={{ verticalAlign: '' }} />
  ),
  categories: ['people'],
}, {
  title: 'Nature',
  icon: (
    <FaPaw style={{ verticalAlign: '' }} />
  ),
  categories: ['nature'],
}, {
  title: 'Food & Drink',
  icon: (
    <FaCutlery style={{ verticalAlign: '' }} />
  ),
  categories: ['food'],
}, {
  title: 'Activity',
  icon: (
    <FaFutbolO style={{ verticalAlign: '' }} />
  ),
  categories: ['activity'],
}, {
  title: 'Travel & Places',
  icon: (
    <FaPlane style={{ verticalAlign: '' }} />
  ),
  categories: ['travel'],
}, {
  title: 'Objects',
  icon: (
    <FaBell style={{ verticalAlign: '' }} />
  ),
  categories: ['objects'],
}, {
  title: 'Symbols',
  icon: (
    <FaHeart style={{ verticalAlign: '' }} />
  ),
  categories: ['symbols'],
}, {
  title: 'Flags',
  icon: (
    <FaFlag style={{ verticalAlign: '' }} />
  ),
  categories: ['flags'],
}];

export default defaultEmojiGroups;
