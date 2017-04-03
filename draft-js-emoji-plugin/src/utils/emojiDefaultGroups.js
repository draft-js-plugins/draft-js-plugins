import React from 'react';
import {
  FaClockO,
  FaSmileO,
  FaLeaf,
  FaCatlery,
  FaFutbolO,
  FaPlane,
  FaBell,
  FaHeart,
  FaFlag,
} from 'react-icons/fa';

const emojiDefaultGroups = [{
  title: 'Frequently used',
  icon: (
    <FaClockO />
  ),
  emojis: [],
}, {
  title: 'People',
  icon: (
    <FaSmileO />
  ),
  categories: ['people'],
}, {
  title: 'Nature',
  icon: (
    <FaLeaf />
  ),
  categories: ['nature'],
}, {
  title: 'Food & Drink',
  icon: (
    <FaCatlery />
  ),
  categories: ['food'],
}, {
  title: 'Activity',
  icon: (
    <FaFutbolO />
  ),
  categories: ['activity'],
}, {
  title: 'Travel & Places',
  icon: (
    <FaPlane />
  ),
  categories: ['travel'],
}, {
  title: 'Objects',
  icon: (
    <FaBell />
  ),
  categories: ['objects'],
}, {
  title: 'Symbols',
  icon: (
    <FaHeart />
  ),
  categories: ['symbols'],
}, {
  title: 'Flags',
  icon: (
    <FaFlag />
  ),
  categories: ['flags'],
}];

export default emojiDefaultGroups;
