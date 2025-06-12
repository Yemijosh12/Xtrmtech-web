import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
	<section id='product' className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={bill}
				alt='billing'
				className='w-[100%] h-[100%] relative z-[5]'
			/>
			<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounder-full white__gradient' />
			<div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounder-full pink__gradient' />
		</div>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Tech enthusiast <br/>with a Passion for development.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Join passionate people and be trained in course, and build
				product that will change the world.<br/>
				Software Development and Artificial Intelligence
				<p> Register Now!</p>
				</p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSehd6gQw7MeCdluaVpwQKiQhM4mn95K98D8--0MOBkWFT9jag/viewform?usp=pp_url">
	    <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
		</a>
	  </div>
		</div>
	</section>
);

export default Billing;
