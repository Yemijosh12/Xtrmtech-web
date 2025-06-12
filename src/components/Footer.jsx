import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className='flex-1 flex-col justify-start mr-10'>
				<img
					src={logo}
					alt='hoobank'
					className='w-[266px] h-[72px] object-contain'
				/>
				<p className={`${styles.paragraph} mt-4 
				max-w-[310px]`}>
					Xtremely transformed minds.
				</p>
			</div>
			
		</div>
		<div className="w-full flex justify-center items-center
		 md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
			<p className='font-poppins font-normal  text-center 
			text-[18px] leading-[27px] text-white'>
				2025 Xtrm tech. All Rights Reserved.
			</p></div>
<br/>
		<div className='flex flex-row md:mt-0 mt-6'>
				{socialMedia.map((social, index) =>  ( 
					<a href={social.link}>
	<img key={social.id} src={social.icon}  alt='social.id' 
					 className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
				</a>
				))}
			</div>
	</section>
);

export default Footer;
