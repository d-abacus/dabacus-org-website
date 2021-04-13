import React from 'react';


interface CustomIconProps {
  imgSrc: string;
  size: number;
};

const CustomIcon: React.FC<CustomIconProps> = (props: CustomIconProps) => {
  return (
    <img src={props.imgSrc} width={props.size}/>
  );
};

export default CustomIcon;
