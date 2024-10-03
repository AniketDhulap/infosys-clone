import { Box } from '@mui/material';
import { FC } from 'react';
import CommonHeading from '../CommonHeading';
import './style.css';

export interface ICommonAnimatedImageBox {
	image: string;
	heading: string;
	subHeading: string;
	description: string;
	isScroll: boolean;
	href: string;
}

const CommonAnimatedImageBox: FC<ICommonAnimatedImageBox> = ({
	heading,
	subHeading,
	image,
	description,
	isScroll,
	href,
}) => {
	return (
		<Box
			onClick={() => {
				window.open(href);
			}}
			sx={{
				height: '100%',
				width: '100%',
				position: 'relative',
				cursor: 'pointer',
				overflow: 'hidden',
				'&:hover .image': {
					transform: 'scale(1.1)',
					transition: 'transform 0.5s ease-in-out',
				},
				'&:hover .textOverlay': isScroll
					? {
							transform: 'translateY(0)',
							transition: 'transform 0.5s ease-in-out',
					  }
					: {},
				'&:hover .headingOverlay': isScroll
					? {
							opacity: 0,
							display: 'none',
							transition: 'opacity 0.5s ease-in-out',
					  }
					: {},
			}}>
			<img
				src={image}
				alt="animated-box"
				className="image"
				style={{
					height: '100%',
					width: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
					transition: 'transform 0.5s ease-in-out',
				}}
			/>

			<CommonHeading
				heading={heading}
				args={{
					className: 'headingOverlay',
					sx: {
						fontFamily: 'Myriad-pro, Arial',
						fontSize: isScroll ? '19px' : '24px',
						fontWeight: 700,
						textShadow: 'none',
						letterSpacing: '1.5px',
						mb: '15px',
						lineHeight: '30px',
						position: 'absolute',
						bottom: -10,
						left: 10,
						p: 1,
						transition: 'opacity 0.5s ease-in-out',
					},
				}}
			/>

			<Box
				className="textOverlay"
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: 'rgba(0, 0, 0, 0.5)',
					color: '#fff',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					p: 2,
					transform: 'translateY(100%)',
					transition: 'transform 0.5s ease-in-out',
				}}>
				<Box sx={{ mt: 'auto', pr: 2 }}>
					{isScroll && (
						<>
							<CommonHeading
								heading={heading}
								args={{
									sx: {
										fontFamily: 'Myriad-pro, Arial',
										fontSize: '19px',
										fontWeight: 700,
										textShadow: 'none',
										letterSpacing: '1.5px',
										mb: '5px',
										lineHeight: '30px',
										transition: 'opacity 0.5s ease-in-out',
									},
								}}
							/>

							<CommonHeading
								heading={subHeading}
								args={{
									sx: {
										fontFamily: 'Myriad-pro, Arial',
										fontSize: '18px',
										fontWeight: 700,
										textShadow: 'none',
										letterSpacing: '1.5px',
										mb: '5px',
										lineHeight: '30px',
										transition: 'opacity 0.5s ease-in-out',
									},
								}}
							/>
							<CommonHeading
								heading={description}
								args={{
									sx: {
										fontFamily: 'Myriad, Arial',
										fontSize: '17px',
										fontWeight: 400,
										textShadow: 'none',
										letterSpacing: '1.5px',
										mb: '5px',
										lineHeight: '30px',
										transition: 'opacity 0.5s ease-in-out',
									},
								}}
							/>
						</>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default CommonAnimatedImageBox;
