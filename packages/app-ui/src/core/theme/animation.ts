// Handy CSS animations for micro-interactions
import { keyframes } from 'styled-components';

export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)',
};

export const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

export const float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;
