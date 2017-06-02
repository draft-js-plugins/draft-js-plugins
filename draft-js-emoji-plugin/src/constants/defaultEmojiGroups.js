import React from 'react';
import FaSmileO from 'react-icons/lib/fa/smile-o';
import FaPaw from 'react-icons/lib/fa/paw';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaFutbolO from 'react-icons/lib/fa/futbol-o';
import FaPlane from 'react-icons/lib/fa/plane';
import FaBell from 'react-icons/lib/fa/bell';
import FaHeart from 'react-icons/lib/fa/heart';
import FaFlag from 'react-icons/lib/fa/flag';

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
