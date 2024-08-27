import React, { useState } from 'react';
import Template from './Template.js';
import styles from '../styles/Folio.module.css';

export default function Folio() {
    const [selectedProj, setSelectedProj] = useState(null);

    const projs = [
        {
            name: 'PokeGuessr',
            description: 'A Pokemon guessing game made for a final project in a web programming course.',
            techStack: ['React', 'Node.js', 'MongoDB', 'PokeAPI'],
            images: ['photo1.jpg', 'photo2.jpg']
        },
        {
            name: 'Spootify',
            description: 'A Spotify clone with custom design.'+"\n"+'* still under construction!',
            techStack: ['React', 'Express', 'Spotify API'],
            images: ['photo3.jpg', 'photo4.jpg']
        },
        {
            name: 'BuddyUp',
            description: 'A hackathon project designed and built with a group of 5 classmates. An online \
            website to look for other individuals or groups to study with.',
            techStack: ['React.js', 'MongoDB', 'Tailwind CSS'],
            images: ['../projs/buddy1.jpg', '../projs/buddy2.png']
        },
        {
            name: 'Portfolio',
            description: 'Some art projects made with various Javascript libraries.',
            techStack: ['P5.js', 'Three.js'],
            images: ['photo7.jpg', 'photo8.jpg']
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
