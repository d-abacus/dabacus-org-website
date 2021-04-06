import React from 'react';


interface CustomIconProps {
  imgSrc: string;
  size: number;
};

const ThemeButton: React.FC<CustomIconProps> = (props: CustomIconProps) => {
  return (
    <img src={props.imgSrc} width={props.size}/>
  );
};

export default ThemeButton;
