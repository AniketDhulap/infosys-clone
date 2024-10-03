import { Button, ButtonProps, Typography } from '@mui/material';
import { FC, FormEvent } from 'react';

interface IButtonComponent {
	buttonText: string;
	bgColor?: string;
	buttonIcon?: string;
	fullWidth?: boolean;
	buttonAction?: (e: FormEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	buttonProps?: ButtonProps;
}

const ButtonComponent: FC<IButtonComponent> = ({
	buttonText,
	buttonIcon = '',
	buttonAction,
	fullWidth,
	disabled,
	buttonProps,
}) => {
	const defaultSx = {
		background: 'transparent',
		border: '1px solid var(--text-white)',
		borderRadius: '0 !important',
		padding: '11px 50px',
		'&:hover': {
			backgroundColor: 'var(--text-black)',
			borderColor: 'var(--text-black)',
		},
	};

	const mergedSx = buttonProps?.sx
		? { ...defaultSx, ...buttonProps.sx }
		: defaultSx;

	const finalButtonProps = {
		...buttonProps,
		sx: mergedSx,
		fullWidth,
		onClick: buttonAction,
		disabled,
	};

	return (
		<Button {...finalButtonProps} disableElevation variant="contained">
			{buttonIcon && (
				<img
					src={buttonIcon}
					alt="buttonIcon"
					width={20}
					style={{ margin: '20px 15px 20px 0px' }}
				/>
			)}
			<Typography sx={{ fontWeight: 600, fontSize: '13px' }}>
				{buttonText}
			</Typography>
		</Button>
	);
};

export default ButtonComponent;
