'use client';

import { FaGithub } from 'react-icons/fa';
import PageSection from './PageSection';

interface SkillItemProps {
  category: string;
  skills: string[];
}

const skillStyles: { [key: string]: { bg: string; text: string } } = {
  JavaScript: { bg: 'bg-[#F7DF1E]', text: 'text-black' },
  Python: { bg: 'bg-[#14354C]', text: 'text-white' },
  'C++': { bg: 'bg-[#00599C]', text: 'text-white' },
  TypeScript: { bg: 'bg-[#3178C6]', text: 'text-white' },
  Django: { bg: 'bg-[#092E20]', text: 'text-white' },
  FastAPI: { bg: 'bg-[#009688]', text: 'text-white' },
  'Next.js': { bg: 'bg-[#000000]', text: 'text-white' },
  HTML: { bg: 'bg-[#E34F26]', text: 'text-white' },
  CSS: { bg: 'bg-gray-500', text: 'text-white' },
  'Tailwind CSS': { bg: 'bg-[#38B2AC]', text: 'text-white' },
  ShadCN: { bg: 'bg-[#000000]', text: 'text-white' },
  'Arch Linux': { bg: 'bg-[#1793D1]', text: 'text-white' },
  NixOS: { bg: 'bg-[#4C566A]', text: 'text-white' },
  'Linux Mint': { bg: 'bg-[#87CF3B]', text: 'text-white' },
  Ubuntu: { bg: 'bg-[#E95420]', text: 'text-white' },
  React: { bg: 'bg-[#61DAFB]', text: 'text-black' },
};

const SkillItem: React.FC<SkillItemProps> = ({ category, skills }) => (
  <div className='group relative flex flex-col gap-2 p-3 transition-all duration-300'>
    <h3 className='font-semibold text-gray-900 dark:text-zinc-200'>
      {category}
    </h3>
    <ul className='flex flex-wrap gap-2'>
      {skills.map((skill, i) => {
        const style = skillStyles[skill] || {
          bg: 'bg-gray-200',
          text: 'text-black',
        };
        return (
          <li
            key={i}
            className={`rounded-lg ${style.bg} px-3 py-1 text-sm font-medium ${style.text}`}
          >
            {skill}
          </li>
        );
      })}
    </ul>
  </div>
);

export const Skills: React.FC = () => {
  const skillsData: SkillItemProps[] = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      skills: ['Django', 'FastAPI', 'Next.js'],
    },
    {
      category: 'Markup & Styling',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'ShadCN'],
    },
    {
      category: 'Favorite Linux Distros',
      skills: ['Arch Linux', 'NixOS', 'Linux Mint', 'Ubuntu'],
    },
    {
      category: 'Libraries',
      skills: ['React'],
    },
  ];

  return (
    <PageSection
      title='Tech Stack'
      link={{
        href: 'https://github.com/neerajadhav',
        text: 'Visit My GitHub',
        icon: <FaGithub className='h-4 w-4' />,
      }}
    >
      <div className='grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {skillsData.map((skillSet, index) => (
          <SkillItem key={index} {...skillSet} />
        ))}
      </div>
    </PageSection>
  );
};

export default Skills;
