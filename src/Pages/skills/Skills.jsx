import React from 'react';
import {
    FaHtml5,
    FaReact,
    FaJs,
    FaNodeJs,
    FaCss3,
    FaLaptopCode,
    FaServer,
    FaHubspot,
} from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import {
    SkillsContainer,
    Col,
    BoxDiv,
    SkillBox,
    SkillBoxText,
    Common,
} from './Styles';
import { Container, H1 } from '../../SharedStyles/SharedStyles';
import { Heading } from '@chakra-ui/react';

import('./skills.css');

const Skills = () => {
    const projects = [
        {
            id: 0,
            project_name: 'JavaScript',
            project_desc: <FaJs className='commonIcons' />,
        },
        {
            id: 1,
            project_name: 'React JS',
            project_desc: <FaReact className='commonIcons' />,
        },
        {
            id: 2,
            project_name: 'Redux',
            project_desc: <SiRedux className='commonIcons' />,
        },
        {
            id: 3,
            project_name: 'HTML',
            project_desc: <FaHtml5 className='commonIcons' />,
        },
        {
            id: 4,
            project_name: 'CSS',
            project_desc: <FaCss3 className='commonIcons' />,
        },
         {
             id: 5,
             project_name: 'Node JS',
             project_desc: <FaNodeJs className='commonIcons' />,
         },
    ];
    const proficiencies = [
        {
            id: 0,
            project_name: 'Frontend',
            project_desc: <FaLaptopCode className='commonIcons' />,
        },
        {
            id: 1,
            project_name: 'Data Structures',
            project_desc: <FaHubspot className='commonIcons' />,
        },
        {
            id: 2,
            project_name: 'Backend',
            project_desc: <FaServer className='commonIcons' />,
        },
    ];

    return (
        <Container className='skills' id="skills">
            <SkillsContainer>
                <Common>
                    <Heading style={{color:"yellowgreen",textAlign:"center"}} >Skills</Heading>
                </Common>
                <Col className='colorTechnologies'>
                    {projects.map((item) => (
                        <BoxDiv key={item.id}>
                            <SkillBox>
                                {item.project_desc}
                                <SkillBoxText>{item.project_name}</SkillBoxText>
                            </SkillBox>
                        </BoxDiv>
                    ))}
                </Col>
                <Common>
                    <H1>Proficiencies</H1>
                </Common>
                <Col className='colorProficiencies'>
                    {proficiencies.map((item) => (
                        <BoxDiv key={item.id}>
                            <SkillBox>
                                {item.project_desc}
                                <SkillBoxText>{item.project_name}</SkillBoxText>
                            </SkillBox>
                        </BoxDiv>
                    ))}
                </Col>
            </SkillsContainer>
        </Container>
    );
};

export default Skills;
