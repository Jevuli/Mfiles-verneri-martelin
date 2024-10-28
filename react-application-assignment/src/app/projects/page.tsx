"use client";

import { useState } from 'react';

import Project from './project';
import Button from '../components/buttons/button';

export enum ProjectState {
  LAUNCHED = 'Launched',
  FINISHED = 'Finished',
  NOT_STARTED ='Not started'
}

export interface Project {
  id: number;
  name: string;
  state: ProjectState;
}

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Travel to Mars',
      state: 'Launched'
    },
    { id: 2,
      name: 'Launching satellite',
      state: 'Finished'
    },
    {
      id: 3,
      name: 'Study: growing plants on Mars',
      state: 'Not started'
    },
    {
      id: 4,
      name: 'Study: new human generation on Mars',
      state: 'Not started'
    }
  ] as Project[]);

  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  const toggleProject = (project: Project) => {
    if (selectedProjects.some(selectedProject => selectedProject.id === project.id)) {
      setSelectedProjects(selectedProjects.filter(selectedProject => selectedProject.id !== project.id));
    } else {
      setSelectedProjects([...selectedProjects, project]);
    }
  }

  const updateProjectStates = (state: ProjectState) => {
    setProjects([
      ...projects.filter(project => !selectedProjects.some(selectedProject => selectedProject.id === project.id)),
      ...selectedProjects.map(project => ({ ...project, state }))
    ])
    setSelectedProjects([]);
  }

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-3 w-1/2 md:w-3/4">
        {projects.sort((a, b) => a.id - b.id).map(project => 

<Project 
            key={project.id} 
            project={project} 
            selectable={project.state !== ProjectState.FINISHED && (selectedProjects.length === 0 || selectedProjects[0].state === project.state)}
            selected={selectedProjects.some(selectedProject => selectedProject.id === project.id)}
            onClick={() => toggleProject(project)} 
          />
        )}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center w-1/2 md:w-1/4">
        <Button disabled={selectedProjects.length === 0} onClick={() => updateProjectStates(ProjectState.LAUNCHED)}>
          Launch project
        </Button>
        <Button disabled={selectedProjects.length === 0} onClick={() => updateProjectStates(ProjectState.FINISHED)}>
          Finish project
        </Button>
      </div>
    </div>
  );
}
