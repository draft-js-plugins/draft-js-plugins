import React from 'react';
import {
  FaSmile,
  FaPaw,
  FaUtensils,
  FaFutbol,
  FaPlane,
  FaBell,
  FaHeart,
  FaFlag,
} from 'react-icons/fa';

import { EmojiSelectGroup } from '../index';

const defaultEmojiGroups: EmojiSelectGroup[] = [
  {
    title: 'People',
    icon: <FaSmile style={{ verticalAlign: '' }} />,
    categories: ['people'],
  },
  {
    title: 'Nature',
    icon: <FaPaw style={{ verticalAlign: '' }} />,
    categories: ['nature'],
  },
  {
    title: 'Food & Drink',
    icon: <FaUtensils style={{ verticalAlign: '' }} />,
    categories: ['food'],
  },
  {
    title: 'Activity',
    icon: <FaFutbol style={{ verticalAlign: '' }} />,
    categories: ['activity'],
  },
  {
    title: 'Travel & Places',
    icon: <FaPlane style={{ verticalAlign: '' }} />,
    categories: ['travel'],
  },
  {
    title: 'Objects',
    icon: <FaBell style={{ verticalAlign: '' }} />,
    categories: ['objects'],
  },
  {
    title: 'Symbols',
    icon: <FaHeart style={{ verticalAlign: '' }} />,
    categories: ['symbols'],
  },
  {
    title: 'Flags',
    icon: <FaFlag style={{ verticalAlign: '' }} />,
    categories: ['flags'],
  },
];

export default defaultEmojiGroups;
