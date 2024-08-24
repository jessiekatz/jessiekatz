import React, { useState } from 'react';
import Template from './Template.js';
import styles from '../styles/Folio.module.css';

export default function Folio() {
    const [selectedProj, setSelectedProj] = useState(null);

    const projs = [
        {
            name: 'PokeGuessr',
            description: 'A fun game where players guess Pokémon based on clues.',
            techStack: ['React', 'Node.js', 'MongoDB'],
            images: ['photo1.jpg', 'photo2.jpg']
        },
        {
            name: 'Spootify',
            description: 'A Spotify clone with custom playlist features.',
            techStack: ['React', 'Express', 'PostgreSQL'],
            images: ['photo3.jpg', 'photo4.jpg']
        },
        {
            name: 'BuddyUp',
            description: 'A platform to find study partners for university courses.',
            techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            images: ['photo5.jpg', 'photo6.jpg']
        },
        {
            name: 'Portfolio',
            description: 'My personal portfolio showcasing my projects and skills.',
            techStack: ['Next.js', 'Styled Components', 'Vercel'],
            images: ['photo7.jpg', 'photo8.jpg']
        },
        {
            name: 'Jumbocode',
            description: 'A website for a student-run coding club at Tufts University.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            images: ['photo9.jpg', 'photo10.jpg']
        }
    ];

    const handleClick = (proj) => {
        setSelectedProj(selectedProj === proj ? null : proj);
    }

    return (
        <div>
            <h1 className={styles.header}>projects</h1>
            <div className={styles.projects_list}>
                {projs.map((proj, index) => (
                    <p 
                        key={index}
                        className={`${styles.proj_title} ${selectedProj === proj.name ? styles.active : ''}`}
                        onClick={() => handleClick(proj.name)}
                    >
                        {proj.name}
                    </p>
                ))}
            </div>
            <div className={styles.template_container}>
                {selectedProj && (
                    <Template 
                        name={selectedProj} 
                        description={projs.find(proj => proj.name === selectedProj).description} 
                        techStack={projs.find(proj => proj.name === selectedProj).techStack} 
                        images={projs.find(proj => proj.name === selectedProj).images}
                    />
                )}
            </div>
        </div>
    );
}
