import { MouseEventHandler, useState } from "react";
import { Project, ProjectState } from "./page";

interface ProjectProps {
  project: Project;
  selected: boolean;
  selectable: boolean;
  onClick: MouseEventHandler
}

export default function ProjectItem(props: ProjectProps) {
  const borderColor = () => {
    switch(props.project.state) {
      case ProjectState.FINISHED:
        return 'border-r-grey-500';
      case ProjectState.LAUNCHED:
        return 'border-r-green-500';
      case ProjectState.NOT_STARTED:
      default:
      return 'border-r-orange-100';
    }
  }

  const backgroundColor = () => {
    if (props.selected) {
      return 'bg-blue-500 hover:bg-blue-400';
    } else {
      return 'bg-white';
    }
  }

  const hoverClasses = () => {
    if (props.selectable) {
      return 'hover:bg-blue-200 hover:cursor-pointer active:bg-blue-300';
    } else {
      return 'cursor-not-allowed';
    }
  }

  const classes = `
    flex flex-col w-full items-start
    border-r-8 border-b-2 gap-2
    md:items-center
    ${borderColor()}
    ${backgroundColor()}
    ${hoverClasses()}
  `;

  return (
    <div className={classes} onClick={(event) => props.selectable ? props.onClick(event) : null}>
      <div className="text-md">{props.project.name}</div>
      <div className="text-xs">{props.project.state}</div>
    </div>
  );
}
