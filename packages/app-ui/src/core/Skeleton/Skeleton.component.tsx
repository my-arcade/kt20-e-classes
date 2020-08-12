import React, { FC, CSSProperties } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const defaultBaseColor = "#eee";
export const defaultHighlightColor = "#f5f5f5";

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const skeletonStyles = css`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: 100%;
`;

interface SkeletonProps {
  count?: number;
  duration?: number;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  style?: CSSProperties;
  className?: string;
}

const SkeletonItem = styled.span<{duration?: number}>`
   ${skeletonStyles}
   animation: ${skeletonKeyframes} ${({duration}) => duration || 1.2}s ease-in-out infinite;
`


const Skeleton : FC<SkeletonProps> = ({
  count,
  duration,
  width,
  height,
  circle,
  style: customStyle,
  className: customClassName,
}) => {
  const elements = [];
  for (let i = 0; i < count; i++) {
    let style : CSSProperties = {};

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    let className = "react-loading-skeleton";
    if (customClassName) {
      className += " " + customClassName;
    }

    elements.push(
      <SkeletonItem
        key={i}
        duration={duration}
        className={className}
        style={{
          ...customStyle,
          ...style,
        }}
      >
        &zwnj;
      </SkeletonItem>
    );
  }

  return (
    <span>
      {elements}
    </span>
  );
}

export default Skeleton

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: undefined,
  height: undefined,
  circle: false,
};