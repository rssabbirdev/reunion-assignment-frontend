import React from 'react';
import './PropertyCard.css';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { MdOutlineBed } from 'react-icons/md';
import { TbBath } from 'react-icons/tb';
import { RxRulerSquare } from 'react-icons/rx';

const PropertyCard = ({ property, wish, handleWishList }) => {
	const {
		id,
		name,
		price,
		address,
		image,
		totalBeds,
		totalBathrooms,
		landSize,
		isPopular,
	} = property;
	return (
		<div className='cursor-pointer hover:-translate-y-3 transition-all '>
			<div className='card bg-base-100 shadow-xl '>
				<figure>
					<img
						className='h-56 w-full object-cover'
						src={image}
						alt={name}
					/>
				</figure>
				<div
					className={`card-body relative space-y-5 ${
						isPopular && 'card-body-area'
					}`}
					data-label={`✨ Popular`}
				>
					<div className='space-y-1'>
						<div className='flex justify-between items-center'>
							<div>
								<span className='text-2xl text-primary'>
									${price}
								</span>
								<span className='text-gray-600 text-sm'>
									/month
								</span>
							</div>
							<div>
								<button
									onClick={() => handleWishList(id)}
									className='text-xl rounded-full p-2 border border-primary text-primary'
								>
									{!wish && <BsSuitHeart />}
									{wish && <BsSuitHeartFill />}
								</button>
							</div>
						</div>
						<h2 className='card-title'>{name}</h2>
						<p className='text-gray-600'>{address}</p>
					</div>
					<div className='card-actions justify-between border-t gap-0 pt-5 text-sm'>
						<div className='flex justify-center items-center gap-1'>
							<MdOutlineBed className='text-xl text-primary' />
							<span>{totalBeds} Beds</span>
						</div>
						<div className='flex justify-center items-center gap-1'>
							<TbBath className='text-xl text-primary' />
							<span>{totalBathrooms} Bathrooms</span>
						</div>
						<div className='flex justify-center items-center gap-1'>
							<RxRulerSquare className='text-xl text-primary' />
							<span>{landSize}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
